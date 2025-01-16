<script lang="ts" setup>
import UserA from "@/components/UserA.vue";
import UserB from "@/components/UserB.vue";
</script>

<template>
  <main class="main">
    <h1>Test Mercure AlloVoisins :</h1>
    <article class="container">
      <UserA />
      <UserB />
    </article>
  </main>

</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.container {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>