<template>
  <h1 v-text="title"></h1>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const title = ref("abc");

    return { title };
  }
};
</script>

<style></style>
