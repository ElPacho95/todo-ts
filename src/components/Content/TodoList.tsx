import React, { useState } from "react";
import { useAction } from "../../store/hooks/useAction";
interface TodoItemProps {
  title: string;
  id: number;
  completed: boolean;
  changeCheckbox: (checked: boolean, id: number) => any;
}
const TodoList: React.FC<TodoItemProps> = ({
  title,
  completed,
  id,
  changeCheckbox,
}) => {
  const [checked, setChecked] = useState<boolean>(completed || false);
  const { fetchDeleteTodo } = useAction();
  const handleDeleteTodo = () => {
    fetchDeleteTodo(id);
  };
  return (
    <div className="list" key={id}>
      <input
        onClick={() => changeCheckbox(checked, id)}
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {title}
      <button onClick={handleDeleteTodo} className="delete">
        X
      </button>
    </div>
  );
};

export default TodoList;
