import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const Docs = () => {
  return (
    <>
      <Navbar />
      <div className="relative pt-28 pb-16 bg-gradient-to-br from-[#0f0c29] via-[#141030] to-[#1b1442] text-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Documentation</h1>
          <p className="text-lg text-gray-300 mb-4">
            Welcome to the Borderless Tech Hub documentation. Below you'll find
            guides, API references, and tutorials to help you get started with
            the platform.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-3">Getting Started</h2>
            <p className="text-gray-400">
              Learn how to create an account, log in, and navigate the dashboard.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-3">Features Overview</h2>
            <p className="text-gray-400">
              Explore the various features available to members and admins,
              including tasks, attendance tracking, events, and more.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-3">API Reference</h2>
            <p className="text-gray-400">
              Details on the internal mock endpoints and data structures used by
              the application. Perfect for developers extending the codebase.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Docs;
