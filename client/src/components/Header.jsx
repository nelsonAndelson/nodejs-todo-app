import React from "react";
import AddTodo from "./AddTodo";

const Header = () => {
  return (
    <section className="mt-2 flex justify-between items-center">
      <h1 className="font-bold text-3xl ">My Tasks</h1>

      <AddTodo />
    </section>
  );
};

export default Header;
