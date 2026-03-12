import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const Demo = () => {
  return (
    <>
      <Navbar />
      <div className="relative pt-28 pb-16 bg-gradient-to-br from-[#0f0c29] via-[#141030] to-[#1b1442] text-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6 text-center">Interactive Demo</h1>
          <p className="text-lg text-gray-300 mb-8 text-center">
            Experience Borderless Tech Hub in action. This demo showcases key features and workflows.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Dashboard Preview</h2>
              <p className="text-gray-400 mb-4">
                See how members track tasks, view attendance, and manage their profiles.
              </p>
              <div className="bg-[#1a1a2e] rounded-lg p-4 h-48 flex items-center justify-center">
                <span className="text-gray-500">Dashboard Mockup</span>
              </div>
            </div>

            <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>
              <p className="text-gray-400 mb-4">
                Explore admin tools for managing users, tasks, and platform settings.
              </p>
              <div className="bg-[#1a1a2e] rounded-lg p-4 h-48 flex items-center justify-center">
                <span className="text-gray-500">Admin Panel Mockup</span>
              </div>
            </div>

            <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Event Management</h2>
              <p className="text-gray-400 mb-4">
                Discover how events are created, managed, and attended by the community.
              </p>
              <div className="bg-[#1a1a2e] rounded-lg p-4 h-48 flex items-center justify-center">
                <span className="text-gray-500">Events Mockup</span>
              </div>
            </div>

            <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Community Features</h2>
              <p className="text-gray-400 mb-4">
                Connect with other members through forums, discussions, and networking.
              </p>
              <div className="bg-[#1a1a2e] rounded-lg p-4 h-48 flex items-center justify-center">
                <span className="text-gray-500">Community Mockup</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Ready to join the community? Sign up to access all features.
            </p>
            <a
              href="/signup"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 transition shadow-lg shadow-indigo-500/30"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Demo;