<!-- DeleteModal.vue -->
<template>
  <div
    v-if="showModal"
    class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75"
  >
    <div class="p-4 bg-white rounded shadow-md">
      <p>Are you sure you want to delete?</p>
      <div class="flex justify-end mt-4">
        <button
          @click="cancelDelete"
          class="px-4 py-2 mr-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          @click="confirmDelete()"
          class="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
        >
          <!-- $emit('deleteItem') -->
          Delete
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

    const showDeleteModal = (idx) => {
      deleteId.value = idx;
      showModal.value = true;
    };

    const cancelDelete = () => {
      showModal.value = false;
    };

    const confirmDelete = () => {
      // Add your delete logic here
      // emit('deleteItem');
      taskStore.methods.delettask(deleteId.value);
      console.log("Item deleted!");
      showModal.value = false;
    };

    return {
      showModal,
      showDeleteModal,
      cancelDelete,
      confirmDelete,
      taskStore,
      deleteId,
    };
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
