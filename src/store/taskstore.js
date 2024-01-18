import { reactive } from "vue";
const state = reactive({
  tasklist: [
    { 
      text: "Learn React",
      Desc: "Hello React",
    },
    {
      text: "Learn Vue",
      Desc: "Hello Vue",
    },
    {
      text: "Learn Angular",
      Desc: "Hello Angular",
    },
  ]
  
});

const methods = {
  settask(val){
    state.tasklist.unshift(val);
    // state.tasklist=val;
  },
  delettask(val){
    state.tasklist.splice(val, 1);
  },
  updateTask(index, newText, newDesc) {
    // Check if the index is valid
    if (index >= 0 && index < tasklist.length) {
      // Update the text and description at the specified index
      tasklist[index].text = newText;
      tasklist[index].Desc = newDesc;
      console.log("Task updated successfully:", tasklist[index]);
    } else {
      console.log("Invalid index. Please provide a valid index.");
    }
  }
};

export default {
  state,
  methods,
};
