import React, { useState } from "react";
import { Lock, User } from "lucide-react";
import Tittle from "../components/Tittle";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login submitted with Email: ${formData.email}`);
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-gray-100 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          <Tittle tex1={"LOGIN"} />
        </h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your credentials to access your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:ring-1 focus-within:ring-black">
            <User className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full outline-none text-sm text-black"
              required
            />
          </div>

          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:ring-1 focus-within:ring-black">
            <Lock className="w-5 h-5 text-gray-400" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="w-full outline-none text-sm text-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-semibold text-sm hover:bg-white hover:text-black border border-black transition-all"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-gray-600 text-center mt-4">
          Don't have an account?{" "}
          <span className="text-black font-semibold cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
