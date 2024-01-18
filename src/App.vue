<script setup>
import { RouterView } from "vue-router";
import { ref,onMounted,provide } from "vue";
import taskStore from "./store/taskstore";
provide("taskStore", taskStore);
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
