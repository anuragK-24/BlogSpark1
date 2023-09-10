import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const [userPost, setUserPost] = useState("");

  return (
    <div className="top">
      <div className="topLeft">
        <a href="">
          <i className="topIcon fa-brands fa-facebook"></i>
        </a>
        <i className="topIcon fa-brands fa-instagram"></i>
        <a href="https://twitter.com/AnuragS41695054">
          <i className="topIcon fa-brands fa-twitter"></i>
        </a>
        <i className="topIcon fa-brands fa-pinterest"></i>
      </div>
      <div className="topCentre">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Write">
              Write
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            {" "}
            <img className="topImage" src={user.profilePic} alt="" />{" "}
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
        <input
          className="searchBox"
          type="text"
          onChange={(e) => {
            setUserPost(e.target.value);
          }}
        />
        <Link to={`/?user=${userPost}`} className="link">
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </Link>
      </div>
    </div>
  );
}
