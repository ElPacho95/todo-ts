import React, { useEffect } from "react";
import "./content.scss";

import {
  useAppDispatch,
  useTypedSelector,
} from "../../store/hooks/useTypedSelector";
import { fetchTodos } from "../../store/action-creators/get";

const Content: React.FC = () => {
  const { todos, error, loading } = useTypedSelector((state) => state.todo);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  console.log(todos);
  return (
    <div className="content">
      {todos.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
};

export default Content;
