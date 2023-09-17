import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    const currentPath = window.location.pathname;
    if (currentPath !== "/") {
      navigate("/");
    }
    setUserInfo(0);
  }
  const username = userInfo?.username;
  return (
    <header>
      <Link to="/" className="logo">
        Blogify
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create_Post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};
