import React, { useState } from "react";

const AuthForm = ({ onSubmit, type }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(form);
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div className="authFormDiv">
        {type === "signup" && (
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={form.name}
            required
          />
        )}
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={form.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={form.password}
          required
        />
        <button type="submit">{type === "signup" ? "SignUp" : "SignIn"}</button>
      </div>
    </form>
  );
};

export default AuthForm;
