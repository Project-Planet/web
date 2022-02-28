import React, { useState } from "react";
import { toast } from "react-toastify";

const Register = ({ registerUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [joinAs, setJoinAs] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !joinAs) {
      return toast.dark("Please fill in all fields!!");
    }
    if (password.length < 8) {
      return toast.dark("Password must be of length 8 or more");
    }
    if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
    ) {
      return toast.dark(
        "Password must have alteast a number and a special character!"
      );
    }
    const data = {
      email,
      password,
      joinAs,
    };

    registerUser(data);
  };

  return (
    <form className="sign-up-form loginReg" autocomplete="off" onSubmit={handleSubmit}>
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input
          autocomplete="off"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autocomplete="off"
        />
      </div>
      <div className="select-field">
        <i className="fas fa-user"></i>
        <select value={joinAs} onChange={(e) => setJoinAs(e.target.value)}>
          <option value="">Join As</option>
          <option value="volunteer">Volunteer</option>
          <option value="organization">Organization</option>
        </select>
      </div>

      <input type="submit" className="btnCustom" value="Sign up" />
    </form>
  );
};

export default Register;
