import React, { useState } from "react";
import { Mail, Lock, Shield, BadgeCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import { useAuth } from "../../hooks/useAuth";

/* ---------------- Reusable Input ---------------- */

const InputField = (props) => {
  const { id, type, placeholder, Icon, ...rest } = props;
  return (
    <div>
      <label className="block text-sm font-medium text-white/80 mb-2">
        {placeholder}
      </label>

      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />
        )}

        <input
          id={id}
          type={type}
          placeholder={`Enter your ${placeholder.toLowerCase()}`}
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-all"
          {...rest}
        />
      </div>
    </div>
  );
};

/* ---------------- Wallet Button ---------------- */

const WalletConnectButton = () => (
  <button
    className="w-full flex items-center justify-center gap-3 
    bg-gradient-to-r from-[#F97316] to-[#EA580C] 
    hover:from-[#FB923C] hover:to-[#F97316]
    text-white font-semibold py-3.5 px-4 rounded-xl 
    transition-all shadow-lg shadow-orange-500/20 mb-8 
    transform hover:-translate-y-0.5"
  >
    <div className="bg-white rounded-full p-1 size-7 flex items-center justify-center">
      <img
        alt="MetaMask"
        className="w-5 h-5"
        src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
      />
    </div>

    Login with MetaMask
  </button>
);

/* ---------------- Main Component ---------------- */

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginByEmail } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const foundUser = loginByEmail(email);
    if (foundUser) {
      if (foundUser.role === "Admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } else {
      alert("User not found. Please sign up first.");
    }
  };

  return (
    <>
      <Navbar />
      <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-25 pb-6
      bg-gradient-to-br from-[#0f0c29] via-[#141030] to-[#1b1442] text-white"
    >
      {/* Purple Glow */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full"></div>

      {/* Card */}
      <div
        className="relative w-full max-w-md p-8 rounded-2xl 
        bg-[#121028]/80 backdrop-blur-xl 
        border border-white/10 shadow-2xl"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-3">Welcome Back</h1>
          <p className="text-white/50 text-sm">
            Sign in to access your dashboard and manage your events.
          </p>
        </div>

        <WalletConnectButton />

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-[#121028] text-white/40">
              Or continue with email
            </span>
          </div>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <InputField
            id="email"
            type="email"
            placeholder="Email Address"
            Icon={Mail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            id="password"
            type="password"
            placeholder="Password"
            Icon={Lock}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-end text-sm">
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 transition"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-3.5 rounded-xl font-semibold text-white
              bg-gradient-to-r from-[#6D28D9] to-[#4C1D95]
              hover:from-[#7C3AED] hover:to-[#5B21B6]
              transition-all shadow-lg shadow-purple-600/20 mt-4"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-white/50">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-purple-400 hover:text-purple-300 font-medium transition"
          >
            Create one
          </Link>
        </div>

        <div className="mt-8 flex justify-center gap-6 text-xs text-white/40">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Audited by CertiK
          </div>
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-4 h-4" />
            Secure Authentication
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;