import {Topics} from "@/enums/topics.ts";
import {computed, type ComputedRef, ref, watch} from "vue";
import {mercureAxiosInstance} from "@/xhr/mercure.ts";

export const useMercureTopic = () => {
    const topicUrl = ref<Topics>(Topics.topicUrl);
    const stringToPublish = ref<string>('');
    const conversation = ref<string[]>([])

    const eventSource: ComputedRef<EventSource> = computed(() => {
        const url = new URL(import.meta.env.VITE_MERCURE_URL);
        const urlTopic = topicUrl.value
        console.log(urlTopic)
        url.searchParams.append('topic', urlTopic);
        url.searchParams.append('authorization', import.meta.env.VITE_SUBSCRIBE_TOKEN);
        return new EventSource(url);
    });
    watch(eventSource, (__, oldVal) => {
        oldVal?.close()
        createListener()
    })

    const createListener = ():void => {
        eventSource.value.addEventListener('message', (event) => {
            console.log(event)
            conversation.value.push(event.data)
        })
    }

    const publishMessage = async ():Promise<void> => {
        const params = new URLSearchParams();
        params.append("topic", topicUrl.value);
        params.append("data", stringToPublish.value)
        await mercureAxiosInstance.post('', params)
        stringToPublish.value = ''
    }

    return {createListener, publishMessage,conversation, stringToPublish, topicUrl}
}