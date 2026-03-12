// src/pages/public/Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import {
  User,
  Mail,
  Lock,
  Shield,
  Users,
  BadgeCheck,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

/* ---------------- Reusable Components ---------------- */

const InputField = (props) => {
  const { id, type, placeholder, Icon, helperText, value, onChange } = props;
  return (
    <div>
      <label className="block text-sm font-medium text-white/80 mb-2">
        {placeholder}
      </label>

      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />

        <input
          id={id}
          type={type}
          placeholder={`Enter your ${placeholder.toLowerCase()}`}
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-all"
        />
      </div>

      {helperText && (
        <p className="mt-2 text-xs text-white/40">{helperText}</p>
      )}
    </div>
  );
};

const RoleSelector = ({ role, setRole }) => (
  <div>
    <label className="block text-sm font-medium text-white/80 mb-3">
      I am joining as a
    </label>

    <div className="grid grid-cols-2 gap-3 p-1 bg-white/5 rounded-xl border border-white/10">
      {[
        { label: "Member", icon: Users },
        { label: "Admin", icon: BadgeCheck },
      ].map((r) => (
        <label key={r.label} className="cursor-pointer">
          <input
            type="radio"
            name="role"
            value={r.label}
            checked={role === r.label}
            onChange={() => setRole(r.label)}
            className="peer sr-only"
          />
          <div
            className="flex flex-col items-center justify-center py-3 rounded-lg text-sm font-medium text-white/50 
            peer-checked:bg-purple-600/20 peer-checked:text-purple-400 
            peer-checked:border peer-checked:border-purple-600/40 transition-all"
          >
            <r.icon className="w-5 h-5 mb-1" />
            {r.label}
          </div>
        </label>
      ))}
    </div>
  </div>
);

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

    Connect with MetaMask
  </button>
);

/* ---------------- Main Component ---------------- */

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin");

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }
    alert(`Signing up as ${role}`);
    signup({ name, email, role, password });
    // send user to appropriate landing
    if (role === "Admin") {
      navigate("/admin");
    } else {
      navigate("/dashboard");
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
          <h1 className="text-3xl font-bold mb-3">Join the Hub</h1>
          <p className="text-white/50 text-sm">
            Connect your wallet or enter your details to access the community
            dashboard.
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
          <RoleSelector role={role} setRole={setRole} />
          <InputField
            id="name"
            type="text"
            placeholder="Full Name"
            Icon={User}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            helperText="Must be at least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-3.5 rounded-xl font-semibold text-white
              bg-gradient-to-r from-[#6D28D9] to-[#4C1D95]
              hover:from-[#7C3AED] hover:to-[#5B21B6]
              transition-all shadow-lg shadow-purple-600/20 mt-4"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8 flex justify-center gap-6 text-xs text-white/40">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Audited by CertiK
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4" />
            End-to-end Encrypted
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Signup;