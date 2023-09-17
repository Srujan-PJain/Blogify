import "./App.css";
import { Routes, Route } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/pages/Layout";
import IndexPage from "./components/pages/Index";
import LoginPage from "./components/pages/Login";
import PostPage from "./components/pages/PostPage";
import RegisterPage from "./components/pages/Register";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./components/pages/CreatePost";
import EditPost from "./components/pages/EditPost";
function App() {
  return (
    <UserContextProvider>
      <ToastContainer />
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
          <Route path={"/create"} element={<CreatePost />} />
          <Route path={"/post/:id"} element={<PostPage />} />
          <Route path={"/edit/:id"} element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
