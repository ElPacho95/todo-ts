import React, { useEffect } from "react";
import "./content.scss";

import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import { fetchTodos } from "../../store/action-creators/todo";
import { useAction } from "../../store/hooks/useAction";

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
        return (
          <div className="list" key={item.id}>
            <input type="checkbox" checked={item.completed} />
            {item.title}
            <button className="delete">X</button>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
