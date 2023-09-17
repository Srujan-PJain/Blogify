import { useState } from "react";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const register = async (e) => {
    e.preventDefault();
    const pattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const userName = /^(?=.{4,20}$)(?:[a-zA-Z\d]+(?:[._][a-zA-Z\d])*)+$/;
    if (!userName.test(username)) {
      toast.error("Username must contain min of 4 characters or numbers", {
        position: toast.POSITION.TOP_CENTER,
      });
      setUsername("");
    } else {
      if (!pattern.test(password)) {
        toast.error("Weak password!", {
          position: toast.POSITION.TOP_CENTER,
        });
        setPassword("");
        return;
      }
    }
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      setMessage("Registration Successful, Continue login");
    } else {
      setMessage("Registration Failed, try again with different username");
    }
  };
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <div className="input-cont">
        <div className="input-fields">
          <input
            id="userName"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label for="userName" class="Username">
            Username
          </label>
        </div>
        <div className="input-fields">
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label for="password" class="Password">
            Password
          </label>
        </div>
      </div>
      <div className="errorMsg">
        <h5>{message}</h5>
      </div>
      <button>Register</button>
    </form>
  );
}
