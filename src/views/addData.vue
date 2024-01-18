<template>
     <div class="flex justify-center pb-6">
          <input
            type="text"
            name="todo"
            v-model="inpData.text"
            placeholder="Enter Task Here"
            class="px-5 py-2 text-xl text-orange-800 placeholder-orange-400 bg-orange-100 rounded-l-full outline-orange-300"
          />
          <input
            type="text"
            name="desc"
            v-model="inpData.Desc"
            placeholder="Enter description"
            class="px-5 py-2 text-xl text-orange-800 placeholder-orange-400 bg-orange-100 outline-orange-300"
          />
          <button
            type="button"
            @click="addtask"
            class="py-2 pl-4 pr-5 text-xl text-orange-100 placeholder-orange-400 bg-orange-500 rounded-r-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
</template>
<script setup>
import { ref,onMounted,inject } from "vue";
const taskStore = inject("taskStore");
const inpData = ref({ text: "", Desc: "" });
const addtask = () => {
  if (inpData.value.text == "" && inpData.value.Desc == "") {
    alert("please fill required fields");
  } else {
    taskStore.methods.settask(inpData.value);
    inpData.value ={ text: "", Desc: "" };
    // todoList.value.unshift(inpData.value);
  }
};
</script>