import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const Legal = () => {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <>
      <Navbar />
      <div className="relative pt-28 pb-16 bg-gradient-to-br from-[#0f0c29] via-[#141030] to-[#1b1442] text-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6 text-center">Legal Information</h1>

          {/* Tab Buttons */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setActiveTab("privacy")}
              className={`px-6 py-3 rounded-l-lg transition ${
                activeTab === "privacy"
                  ? "bg-purple-600 text-white"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab("terms")}
              className={`px-6 py-3 rounded-r-lg transition ${
                activeTab === "terms"
                  ? "bg-purple-600 text-white"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"
              }`}
            >
              Terms of Service
            </button>
          </div>

          {/* Content with Slide Animation */}
          <div className="relative overflow-hidden">
            <div
              className={`transition-transform duration-500 ease-in-out ${
                activeTab === "privacy" ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="bg-[#151521] border border-[#26263a] rounded-xl p-8">
                <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
                <p className="text-gray-300 mb-4">
                  This Privacy Policy describes how Borderless Tech Hub collects, uses, and protects your personal information.
                </p>
                <h3 className="text-lg font-medium mb-2">Information We Collect</h3>
                <p className="text-gray-400 mb-4">
                  We collect information you provide directly to us, such as when you create an account, participate in events, or contact us.
                </p>
                <h3 className="text-lg font-medium mb-2">How We Use Your Information</h3>
                <p className="text-gray-400 mb-4">
                  We use the information to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.
                </p>
                <h3 className="text-lg font-medium mb-2">Data Security</h3>
                <p className="text-gray-400">
                  We implement appropriate security measures to protect your personal information against unauthorized access or disclosure.
                </p>
              </div>
            </div>

            <div
              className={`absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out ${
                activeTab === "terms" ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="bg-[#151521] border border-[#26263a] rounded-xl p-8">
                <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
                <p className="text-gray-300 mb-4">
                  These Terms of Service govern your use of Borderless Tech Hub and outline the rules and regulations for the use of our platform.
                </p>
                <h3 className="text-lg font-medium mb-2">Acceptance of Terms</h3>
                <p className="text-gray-400 mb-4">
                  By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <h3 className="text-lg font-medium mb-2">User Responsibilities</h3>
                <p className="text-gray-400 mb-4">
                  You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
                </p>
                <h3 className="text-lg font-medium mb-2">Limitation of Liability</h3>
                <p className="text-gray-400">
                  In no event shall Borderless Tech Hub be liable for any indirect, incidental, special, consequential, or punitive damages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Legal;