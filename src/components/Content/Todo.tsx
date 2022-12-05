import React from "react";

import { useAction } from "../../store/hooks/useAction";
import { ITodo } from "../../store/types/todo";

import trash from "../../assets/trash.svg";

interface TodoItemProps {
  todo: ITodo;
}
const TodoList: React.FC<TodoItemProps> = ({
  todo: { id, title, tags, completed },
}) => {
  const { fetchDeleteTodo, fetchChangeCheckbox } = useAction();
  const handleDeleteTodo = () => {
    fetchDeleteTodo(id);
  };

  return (
    <div className="list" key={id}>
      <div className="title">
        {title}
        {tags.map((item) => {
          return <div>{item}</div>;
        })}
      </div>

      <div className="icons">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => fetchChangeCheckbox(!completed, id)}
        />
        <button onClick={handleDeleteTodo} className="delete">
          <img src={trash} alt="" />
        </button>
      </div>
    </div>
  );
};

export default TodoList;
