import React, { useEffect } from "react";
import search from "../../assets/search.svg";
import "./Header.scss";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import { useAction } from "../../store/hooks/useAction";
import { fetchTags } from "../../store/action-creators/tags";

const Header: React.FC = () => {
  const { error, profile } = useTypedSelector(
    (state) => state.profile
  );
  const tagsLoading = useTypedSelector(state => state.tags.loading)
  const profileLoading =useTypedSelector(state => state.profile.loading)
  const {tags} = useTypedSelector(state => state.tags)

  const { fetchProfile, fetchTags } = useAction();
  useEffect(() => {
    fetchProfile();
    fetchTags();
  }, []);

  if (profileLoading && tagsLoading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  console.log(tags)
  return (
    <div className="header">
      <div className="form">
        <div className="form-bg">
          <img src={search} alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <label htmlFor="">Choose a tags:</label>
          <select name="" id="">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="submit">
          <button className="accept">Submit</button>
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
