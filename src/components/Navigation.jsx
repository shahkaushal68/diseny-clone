import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { logoutUser } from "../features/user/userSlice";

const Navigation = () => {
  const user = useSelector((state) => state.user);
  console.log("user in navigation =>", user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    //alert("logout");
    signOut(auth)
      .then(() => {
        console.log("user logout");
        dispatch(logoutUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src="images/logo.png" className="brand-logo" alt="" />
      </Link>
      <ul className="nav-links">
        <li className="nav-items">
          <a href="#">TV</a>
        </li>
        <li className="nav-items">
          <a href="#">movies</a>
        </li>
        <li className="nav-items">
          <a href="#">sports</a>
        </li>
        <li className="nav-items">
          <a href="#">premium</a>
        </li>
      </ul>

      <div className="right-container">
        <input type="text" className="search-box" placeholder="search" />
        <button className="sub-btn">subscribe</button>

        {user?.user === null ? (
          <Link to="/login">Login</Link>
        ) : (
          <img
            onClick={logout}
            className="user-avatar"
            src={user?.user?.photoURL}
            alt="user-profile"
          />
        )}
      </div>
    </nav>
  );
};

export default Navigation;
