import React from "react";
import TaskForm from "../../componenets/TaskForm";
import TasksList from "../../componenets/TasksList";
import s from "../../pages/TodoPage/TodoPage.module.scss";

function TodoPage() {
  return (
    <div className={s.todoContainer}>
      <TaskForm />
      <TasksList />
    </div>
  );
}

export default TodoPage;
