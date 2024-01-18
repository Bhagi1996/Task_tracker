<!-- DeleteModal.vue -->
<template>
  <div
    v-if="showModal"
    class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75"
  >
    <!-- dsfdgdfdg -->

    <!-- dsfdgdfdg -->
    <div class="p-4 bg-white rounded shadow-lg" style="width: 40vw;">
      <form class="max-w-sm mx-auto">
        <div class="w-full">
          <label
            for="small-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Task Name</label
          >
          <input
            type="text"
            id="small-input"
            v-model="inpData.text"
            placeholder="Enter Task Here"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Description</label
          >
          <textarea
            id="message"
            rows="4"
            v-model="inpData.Desc"
            placeholder="Enter description"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
      </form>
     
      <div class="flex justify-end mt-4">
        <button
          @click="cancelUpdate"
          class="px-4 py-2 mr-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          @click="confirmUpdate()"
          class="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
          <!-- $emit('deleteItem') -->
          Update
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, inject } from "vue";

export default {
  setup() {
    const taskStore = inject("taskStore");
    const deleteId = ref(null);
    const showModal = ref(false);
    const inpData = ref({ text: "", Desc: "" });
    const ids = ref(null);
    const showUpdateModal = (idx) => {
      deleteId.value = idx;
      console.log(idx);
      showModal.value = true;
      ids.value = idx;
      inpData.value = taskStore.state.tasklist[idx];
      console.log(taskStore.state.tasklist[idx]);
    };

    const cancelUpdate = () => {
      showModal.value = false;
    };

    const confirmUpdate = () => {
      showModal.value = false;
      console.log("Item edited!");
      taskStore.methods.updateTask(
        ids.value,
        inpData.value.text,
        inpData.value.Desc
      );
    };

    return {
      showModal,
      showUpdateModal,
      cancelUpdate,
      confirmUpdate,
      taskStore,
      deleteId,
      inpData,
      ids,
    };
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
