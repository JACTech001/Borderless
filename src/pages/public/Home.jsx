// src/pages/public/Landing.jsx

import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Shield,
  Users,
  BadgeCheck,
} from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";


const Landing = () => {
  return (
    <>

    <Navbar />
    <div className="min-h-screen text-white bg-[radial-gradient(ellipse_at_top,_#1e1b4b_0%,_#0f0c29_40%,_#0a0a1f_100%)]">

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_80px_rgba(99,102,241,0.15)] px-10 py-20 text-center">

          <div className="mb-6">
            <span className="text-xs tracking-widest px-4 py-1 rounded-full bg-white/5 border border-white/10">
              LIVE ON MAINNET
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Decentralized{" "}
            <span className="bg-gradient-to-r from-white via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Community
            </span>
            <br />
            Management
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Empowering borderless innovation through Web3 governance,
            automated attendance, and transparent task tracking.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/signup"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-500/30"
            >
              Get Started
            </Link>

            <Link
              to="/docs"
              className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              Read Docs
            </Link>
          </div>

        </div>
      </section>

   
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-indigo-400 text-sm tracking-widest mb-2">
              CAPABILITIES
            </p>
            <h2 className="text-3xl font-bold">Core Infrastructure</h2>
            <p className="text-gray-400 mt-3 max-w-lg">
              Everything you need to manage a decentralized tech hub efficiently,
              built on secure smart contracts.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {["Web3 Auth", "Task Management", "Attendance Tracking"].map(
            (title, i) => (
              <div
                key={i}
                className="bg-[#111827]/70 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:border-indigo-500/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 mb-4"></div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">
                  Secure decentralized infrastructure powered by smart contracts
                  and blockchain verification.
                </p>
              </div>
            )
          )}
        </div>
      </section>

   
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-[#0f172a]/70 border border-white/10 backdrop-blur-xl rounded-2xl px-10 py-16 text-center shadow-[0_0_60px_rgba(99,102,241,0.15)]">

          <h2 className="text-4xl font-bold mb-4">
              Ready to decentralize your hub?
        </h2>

        <p className="text-gray-400 mb-8">
              Join over 500+ tech professionals already using Borderless to manage members,
              contributions, governance, and activities with full transparency
              and blockchain-backed security.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/signup"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 transition shadow-lg shadow-indigo-500/30"
          >
               Join Our Community
          </Link>

          <Link
            to="/demo"
            className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            Demo
          </Link>
        </div>

      </div>
      </section>

          <Footer />

    </div>
    </>
  );
};

export default Landing;