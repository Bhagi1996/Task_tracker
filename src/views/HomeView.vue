<template>
  <!-- <div
    class="flex items-start justify-center min-h-screen pt-8 bg-slate-700 dark:bg-white"
  >
    <div
      class="max-w-[700px] shadow-md p-6 rounded-md bg-white dark:bg-slate-700"
    >
      <div class="flex items-start mb-4 sm:items-center">
        <h1 class="flex-1 text-4xl dark:text-white">
          Vue Tailwind Dark/Light Mode
        </h1>
        <span class="dark:text-white">
          {{ isDark ? "Dark" : "Light" }} Mode
        </span>
      </div>
      <p class="mb-4 text-md dark:text-white">
        In this tutorial we will be learning how to enable dark mode for your
        tailwind website/app. Also, we will show how we can create a toggle to
        change between a light & dark theme.
      </p>
      <button
        @click="toggleDark()"
        class="px-4 py-2 text-white bg-black rounded-md dark:bg-white dark:text-black"
      >
        Learn More!
      </button>
    </div>
  </div> -->
  <!-- main component -->

  <div
    class="flex items-start justify-center min-h-screen pt-8 bg-slate-700 dark:bg-white"
  >
    <button
      @click="toggleDark()"
      class="px-4 py-2 text-white bg-black rounded-md dark:bg-white dark:text-black"
    >
      {{ isDark ? "Dark" : "Light" }} Mode
    </button>
    <div class="container w-full max-w-2xl">
      <div
        class="mb-3 text-3xl font-bold text-center text-white uppercase dark:bg-white dark:text-black"
      >
        Task Tracker
      </div>
      <div>
        <!-- add todo header/start -->
        <adddata />
        <!-- add todo header/end -->
      </div>
      <div class="p-5 mt-5 text-gray-700 bg-gray-100 shadow-lg rounded-xl">
        <h1 class="block mb-0 text-xl italic font-bold leading-none">Task's</h1>
        <div class="overflow-y-auto max-h-80">
          <!-- to-do list start -->
          <table id="todo_table" class="table w-full">
            <thead>
              <tr>
                <th
                  class="px-1 py-2 text-center text-orange-100 bg-orange-500 rounded-tl-xl"
                >
                  #
                </th>
                <th class="px-1 py-2 text-left text-orange-100 bg-orange-500">
                  Title
                </th>
                <th class="px-1 py-2 text-left text-orange-100 bg-orange-500">
                  Details
                </th>
                <th
                  class="px-1 py-2 text-orange-100 bg-orange-500 rounded-tr-xl"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-orange-100 even:bg-orange-50" v-if="taskStore.state.tasklist.length<1">
                <td class="px-1 py-2 text-center text-orange-800" colSpan="4">
                  No Todos found. Add a few to begin.
                </td>
              </tr>
              <tr
                class="bg-green-100"
                v-for="(item, index) in taskStore.state.tasklist"
                :key="index"
                v-else
              >
                <td class="px-1 py-2 text-center text-orange-800">
                  {{ index + 1 }}
                </td>
                <td class="px-1 py-2 text-orange-800">{{ item.text }}</td>
                <td class="px-1 py-2 text-orange-800">{{ item.Desc }}</td>

                <td
                  class="flex justify-start gap-3 px-1 py-2 text-center text-orange-800"
                >
                  <button
                  @click="showUpdateModal(index)"
                    class="py-1 pl-2 pr-2 text-sm text-orange-100 placeholder-orange-400 bg-orange-500 rounded-l-full rounded-r-full"
                  >
                    Edit
                  </button>

                  <button
                    @click="showDeleteModal(index)"
                    class="py-1 pl-2 pr-2 text-sm text-orange-100 placeholder-orange-400 bg-orange-500 rounded-l-full rounded-r-full"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- to-do list end -->
        </div>
      </div>
    </div>
  </div>
  <deletemodal ref="deleteModalRef" @deleteItem="handleDelete" />
  <editmodal ref="updateModalRef" @deleteItem="handleDelete" />
  <!-- todo end -->
</template>
<script setup>
import adddata from "./addData.vue";
import deletemodal from "../modals/deleteModal.vue";
import editmodal from "../modals/editModal.vue";
import { useDark, useToggle } from "@vueuse/core";
import { ref, onMounted, inject } from "vue";
const taskStore = inject("taskStore");
const isDark = useDark();
const deleteModalRef = ref(null);
const updateModalRef = ref(null);
const toggleDark = useToggle(isDark);
const showDeleteModal = (idx) => {
  deleteModalRef.value.showDeleteModal(idx);
};
const showUpdateModal = (idx) => {
  updateModalRef.value.showUpdateModal(idx);
};
// const handleDelete = () => {
//   alert("fgdfhf");
//   // Your delete logic goes here
//   console.log("Item deleted!");
// };
onMounted(() => {
  console.log(taskStore.state.tasklist);
  // deleteModalRef.value.$on("deleteItem", handleDelete);
});

</script>
