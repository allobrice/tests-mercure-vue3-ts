<script lang="ts" setup>
import {useMercureTopic} from "@/composables/useMercureTopic.ts";
import {onMounted} from "vue";

const {createListener, publishMessage,conversation, stringToPublish} = useMercureTopic();
onMounted(() => {
  createListener();
});
</script>
<template>
  <div class="user">
    <h2>User B</h2>
    <div class="conversation">
      <p v-for="message in conversation" :key="message">{{ message }}</p>
    </div>
    <form @submit.prevent="publishMessage">
      <input v-model="stringToPublish" type="text">
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>