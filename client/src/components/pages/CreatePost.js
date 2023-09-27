import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../Editor";
export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  // async function createNewPost(e) {
  //   e.preventDefault();
  //   const data = new FormData();
  //   data.set("title", title);
  //   data.set("summary", summary);
  //   data.set("content", content);
  //   data.set("file", files[0]);

  //   const response = await fetch("http://localhost:4000/post", {
  //     method: "POST",
  //     body: data,
  //     credentials: "include",
  //   });
  //   if (response.ok) {
  //     setRedirect(true);
  //   }
  // }
  async function createNewPost(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("content", content);
    formData.append("file", files[0]); // Ensure the field name is "file"

    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <form className="create-post" onSubmit={createNewPost}>
      <input
        type="title"
        placeholder={"Title"}
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
        required
      />
      <input
        type="summary"
        placeholder={"Summary"}
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
        required
      />
      <input
        type="file"
        onChange={(ev) => setFiles(ev.target.files)}
        accept="image/*"
        required
      />
      <Editor onChange={setContent} value={content} />
      <button type="submit" style={{ marginTop: "5px" }}>
        Create Post
      </button>
    </form>
  );
}
