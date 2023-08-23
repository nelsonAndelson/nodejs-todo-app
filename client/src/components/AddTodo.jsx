import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddTodo = () => {
  return (
    <button className="bg-blue-500 flex items-center gap-2 text-white px-4 py-2 rounded hover:bg-blue-600">
      Add Task
      <AiOutlinePlus />
    </button>
  );
};

export default AddTodo;
