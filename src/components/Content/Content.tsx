import React, { useEffect } from "react";

import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import { fetchTodos } from "../../store/action-creators/todo";
import { useAction } from "../../store/hooks/useAction";

import Todo from "./Todo";

import "./content.scss";

const Content: React.FC = () => {
  const { todos, error, loading } = useTypedSelector((state) => state.todo);

  const { fetchTodos } = useAction();

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
        return <Todo todo={item} key={item.id} />;
      })}
    </div>
  );
};

export default Content;
