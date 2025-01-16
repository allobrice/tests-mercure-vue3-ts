import {Topics} from "@/enums/topics.ts";
import {computed, ref} from "vue";
import {mercureAxiosInstance} from "@/xhr/mercure.ts";

export const useMercureTopic = () => {
    const topicUrl = ref<Topics>(Topics.topicUrl);
    const stringToPublish = ref<string>('');
    const conversation = ref<string[]>([])

    const eventSource = computed(() => {
        const url = new URL(import.meta.env.VITE_MERCURE_URL);
        url.searchParams.append('topic', topicUrl.value);
        url.searchParams.append('authorization', import.meta.env.VITE_SUBSCRIBE_TOKEN);
        return new EventSource(url);
    });

    const createListener = () => {
        eventSource.value.addEventListener('message', (event) => {
            conversation.value.push(event.data)
        })
    }

    const publishMessage = async () => {
        const params = new URLSearchParams();
        params.append("topic", topicUrl.value);
        params.append("data", JSON.stringify(stringToPublish.value))
        await mercureAxiosInstance.post('', params)
        stringToPublish.value = ''
    }

    return {createListener, publishMessage,conversation, stringToPublish}
}