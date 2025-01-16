<script lang="ts" setup>
import {useMercureTopic} from "@/composables/useMercureTopic.ts";
import {onMounted} from "vue";

const {createListener, publishMessage,conversation, stringToPublish} = useMercureTopic();
onMounted(() => {
  createListener();
});
defineProps<{name: string}>()
</script>

<template>
  <div class="user">
    <h2>{{name}}</h2>
    <div class="conversation">
      <p class="message" v-for="message in conversation" :key="message">{{ message }}</p>
    </div>
    <form @submit.prevent="publishMessage">
      <input class="input" v-model="stringToPublish" type="text">
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<style scoped>

h2 {
  margin: 0
}

.user {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.conversation {
  border-radius: 8px;
  border: 1px solid grey;
  min-height: 30px;
  background-color: azure;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 6px;
}

.message {
  margin: 0;
  padding: 4px;
  border-radius: 4px;
  background-color: peachpuff;
}

form {
  display: flex;
  gap: 10px;
}

.input {
  border: 1px solid lightskyblue;
  padding: 4px 6px;
  border-radius: 4px;
}

button {
  background-color: aliceblue ;
  border: 1px solid cornflowerblue;
  border-radius: 4px;
  color: cornflowerblue;
}
</style>

