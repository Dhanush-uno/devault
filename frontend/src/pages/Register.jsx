import { useState } from "react";
import api from "../api/axios";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/auth/register", form);
    alert("Account Created");
  };

  return (
    <form onSubmit={submit}>
      <input
        placeholder="email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button>Register</button>
    </form>
  );
}
