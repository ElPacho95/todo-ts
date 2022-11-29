import React from "react";
import search from "../../assets/search.svg";
import "./Header.scss";

const Header: React.FC = () => {
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
          <img
            src="https://www.sosyncd.com/wp-content/uploads/2022/06/139.png"
            alt=""
          />
        </div>
        <div className="user-name">say my name</div>
      </div>
    </div>
  );
};

export default Header;
