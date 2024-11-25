import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password }); //now these values are available in the context (central/global state/store)
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        name=""
        id=""
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Username"
      />{" "}
      <input
        type="password"
        name=""
        id=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
