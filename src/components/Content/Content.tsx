import React, { useEffect } from "react";
import "./content.scss";

import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import { fetchTodos } from "../../store/action-creators/todo";
import { useAction } from "../../store/hooks/useAction";
import TodoList from "./TodoList";

const Content: React.FC = () => {
  const { todos, error, loading } = useTypedSelector((state) => state.todo);
  const { fetchTodos, fetchChangeCheckbox } = useAction();
  const changeCheckbox = (checked: boolean, id: number) => {
    fetchChangeCheckbox(checked, id)
  }
  useEffect(() => {
    fetchTodos();
  }, []);
  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="content">
      {todos.map((item) => {
        return (
          <TodoList changeCheckbox={changeCheckbox} title={item.title} completed={item.completed} id={item.id} key={item.id}/>
        );
      })}
    </div>
  );
};

export default Content;
