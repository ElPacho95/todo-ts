import React, { useEffect, useState } from "react";

import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import { fetchNewTodo } from "../../store/action-creators/todo";
import { fetchTags } from "../../store/action-creators/tags";
import { useAction } from "../../store/hooks/useAction";

import search from "../../assets/search.svg";

import "./Header.scss";

const Header: React.FC = () => {
  const profileLoading = useTypedSelector((state) => state.profile.loading);
  const { error, profile } = useTypedSelector((state) => state.profile);
  const tagsLoading = useTypedSelector((state) => state.tags.loading);
  const { tags } = useTypedSelector((state) => state.tags);

  const { fetchProfile, fetchTags, fetchNewTodo } = useAction();

  const [tag, setTag] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchProfile();
    fetchTags();
  }, []);

  const createTodo = (e: { preventDefault: () => void }) => {
    const body = {
      title: title,
      completed: false,
      tags: [tag],
    };
    fetchNewTodo(body);
    e.preventDefault();
    setTitle("");
  };

  if (profileLoading && tagsLoading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="header">
      <div className="form">
        <div className="form-bg">
          <img src={search} alt="" />
          <input
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            type="text"
            placeholder="Type"
          />
        </div>
        <div className="select">
          <label htmlFor="">Choose a tags:</label>
          <select
            value={tag}
            name=""
            id=""
            onChange={(e) => setTag(e.currentTarget.value)}
          >
            {tags.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="submit">
          <button onClick={createTodo} className="accept">
            Submit
          </button>
        </div>
      </div>

      <div className="profile">
        <div className="user-image">
          <img src={profile.profile_img} alt="" />
        </div>
        <div className="user-name">{profile.username}</div>
      </div>
    </div>
  );
};

export default Header;
