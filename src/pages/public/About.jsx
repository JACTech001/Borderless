import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import {
  Mail,
  Link2,
  Trophy,
  Lock,
  Users,
  Eye,
  CheckCircle,
  ShieldCheck,
  Monitor,
  Cpu,
  Award,
  ArrowRight,
  Home
} from "lucide-react";

import { FaReact, FaNodeJs } from "react-icons/fa";      // React, Node.js
import { SiMongodb, SiSolidity, SiEthereum } from "react-icons/si"; // MongoDB, Solidity, Sepolia
import Footer from "../../components/layout/Footer";


const About = () => {
  return (
    <>
      {/* Top Navigation */}
   
      <Navbar />
      <main className="flex-grow min-h-screen text-white bg-[radial-gradient(ellipse_at_top,_#1e1b4b_0%,_#0f0c29_40%,_#0a0a1f_100%)]">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-[128px]"></div>
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/10 blur-[96px]"></div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

              <div className="flex flex-col justify-center">
                <div className="inline-flex w-fit items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light mb-6">
                  <span className="mr-1 h-2 w-2 rounded-full bg-primary"></span>
                  Building the Future of Web3
                </div>

                <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light text-white text-gray-800">Borderless Tech Hub</span>
                </h1>

                <p className="text-lg leading-relaxed text-slate-400 mb-8 max-w-xl">
                  We are empowering tech communities with transparent management, decentralized tracking, and seamless collaboration. Traditional community management lacks accountability—we bridge that gap with blockchain technology.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white transition-all hover:bg-primary-dark hover:scale-105">
                    Learn More
                  </button>
                  <button className="flex h-12 items-center justify-center rounded-lg border border-card-border bg-transparent px-6 text-base font-medium text-white transition-all hover:bg-card-dark hover:border-slate-500">
                    View Roadmap
                  </button>
                </div>
              </div>

              <div className="relative lg:h-full min-h-[300px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-card-border bg-card-dark/50">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBoUOHa09BaUkEfuGqtv0BWSHq032Np2p8DDjXjdkrRLZw1rrI_4s_9M5LApQ4CBVfobBxa5hjbpLrxieZGLfJyau8ObBCkw0M6ZYQnlUghZKj-gMl_T4xyqu9DDnDnfZ2GXRsq_F1lFW5fOcE2OiS0BMycnWew88s-yQCmh_ClRlOk9f7gHsRDy6adRMXif9WAtsJ8j-jbY1n8yScOs8dQeadzIKEmKHWRNl5IKat-SXCIw447DT9R6roBrj_ra_qiymRUs48zYkc")' }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-glass backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                      <span className="material-symbols-outlined">diversity_3</span>
                    </div>
                    <div>
                      <p className="text-white font-bold">Community First</p>
                      <p className="text-slate-300 text-sm">Over 5,000 active members</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* KEEPING ALL OTHER SECTIONS EXACTLY SAME STRUCTURE */}

        {/* Why We Built This Grid */}
<section className="py-16 bg-card-dark/30 border-y border-card-border">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mb-12 md:text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Why We Built This</h2>
      <p className="text-slate-400 text-lg">Traditional management tools are opaque. We're introducing a new standard of trust and efficiency.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="group relative overflow-hidden rounded-2xl border border-card-border bg-card-dark p-8 hover:border-primary/50 transition-colors duration-300">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary-light group-hover:bg-primary group-hover:text-white transition-colors">
          <span className="material-symbols-outlined text-3xl">visibility</span>
        </div>
        <h3 className="mb-3 text-xl font-bold text-white">Transparent Monitoring</h3>
        <p className="text-slate-400 leading-relaxed">
          Real-time activity tracking visible to everyone. Eliminate favoritism with data-driven insights.
        </p>
      </div>

      {/* Card 2 */}
      <div className="group relative overflow-hidden rounded-2xl border border-card-border bg-card-dark p-8 hover:border-primary/50 transition-colors duration-300">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary-light group-hover:bg-primary group-hover:text-white transition-colors">
          <span className="material-symbols-outlined text-3xl">task_alt</span>
        </div>
        <h3 className="mb-3 text-xl font-bold text-white">Task Management</h3>
        <p className="text-slate-400 leading-relaxed">
          Efficient assignment and tracking of community tasks with Kanban-style boards and automated reminders.
        </p>
      </div>

      {/* Card 3 */}
      <div className="group relative overflow-hidden rounded-2xl border border-card-border bg-card-dark p-8 hover:border-primary/50 transition-colors duration-300">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary-light group-hover:bg-primary group-hover:text-white transition-colors">
          <span className="material-symbols-outlined text-3xl">verified_user</span>
        </div>
        <h3 className="mb-3 text-xl font-bold text-white">Decentralized Trust</h3>
        <p className="text-slate-400 leading-relaxed">
          Immutable records on the blockchain ensuring fairness. Contributions are verified and stored permanently.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Our Platform Features */}
<section className="py-20 bg-background-dark">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Our Platform Features</h2>
        <p className="text-slate-400 max-w-xl">A comprehensive suite of tools designed for modern tech communities.</p>
      </div>
      <button className="text-primary hover:text-white font-medium flex items-center gap-1 transition-colors">
        Explore all features <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Feature 1 */}
      <div className="flex flex-col gap-4">
        <div className="w-full aspect-video rounded-xl bg-card-dark border border-card-border overflow-hidden relative group">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgBuinVGNkJ5O4ZTZ6mb5-1qMPZQNwWME2XYs0ET6lGailzblB3Ik8hD5vLnQQfUNvFMR6HiICtvJkNvq6v6TX5DlB7Kt8Dbe8HIs3ekTAcdSiWxE-bD9Wj3o8zIIC_FiTjkBvzcACLyWLs2OnfJk7P36Lt5IPxC0bVcF0HhMz9qRxIolpaaAQHe8wedM9cnu8OPHSvS1R8ztpsD2fFblno-gAROoFPNuFPC6DbNEMvPbtGDwoE6BJbe2BhcwPT1ebrVvSAIJVKGs")' }}></div>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur px-2 py-1 rounded text-xs text-white flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">monitoring</span> Live
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-1">Activity Tracking</h3>
          <p className="text-sm text-slate-400">Monitor member contributions effortlessly.</p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col gap-4">
        <div className="w-full aspect-video rounded-xl bg-card-dark border border-card-border overflow-hidden relative group">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuATpgW9qUwZ6Uq0YlUvEtsc6AO47xRkEIWzs6dL_DfjcUknZ8fO9lieU6PPCtC5MjUrwd15VjrM0-TLdIaRsTfUIiD_1A5RCiLt1OXEfF5C80bJshLlg1-SbZdcELEV6uMQuWNEcMu_OVnqJIL34-EhZNOOJx3eyNjG-azmD5apE42WAaOIqd9spPVyxGAKOaVuAgcQ5Lvx7sLO92ka9_29qdsicqyrM-K0oT6FtK5-NA_8ndeFO-AhTI8r5kO0RcEFIAQ4kkf0Jww")' }}></div>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-1">Task Board</h3>
          <p className="text-sm text-slate-400">Kanban-style task management.</p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col gap-4">
        <div className="w-full aspect-video rounded-xl bg-card-dark border border-card-border overflow-hidden relative group">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDESFPOn9huKQUzkiU_RYk9c5xbmmHPm25pI0wau9SvXgyd01nhDk96nI1RXT1XJ_NYSLHjJdTgRA5b-xCpQcmGiku4TjIolOCoguYPq8ohHkHDrGo3_GLCy8OSK58_EVaqssFr4IGPKs0DQTcxln8anIumVe46mjQfow8-TGXHdarIXYBD6li5I_ELE3QcDBqlD1EExJ7BrWQiDHxUel_RU_C0pz5_x19xbSAgjYUg0nmrHALBDR0_bEFpQKmXmQZMdap_UJGXneo")' }}></div>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-1">Smart Attendance</h3>
          <p className="text-sm text-slate-400">Automated attendance logging.</p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex flex-col gap-4">
        <div className="w-full aspect-video rounded-xl bg-card-dark border border-card-border overflow-hidden relative group">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDA5fxvEpxhfjCEV3bhnZVhoPQUYMeIyURZ0lkXo3yJmSeL7qgOyNQ8Ra1CjemQDc7p0iNTBJmt1532iHDlUTkZozTUm18A-P9jdf-UCooAN75l2J2VRZ1wGKmyFQeePE4zGce5pEnOp4lh5H7WWAeB8FyvQSOXygUzyERTCDvBDr-iDEGyrNSKODfL7vShdoRLsVbKNnRc8o-gwSeGJkJ8gXw75UPhIzRO7YZjHkNJydtWgBm4SfNav_dpMO_AT2Vd1fSw2EiEcAg")' }}></div>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
          <div className="absolute top-3 right-3 bg-primary/80 backdrop-blur px-2 py-1 rounded text-xs text-white font-bold">
            Web3
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-1">Blockchain Verify</h3>
          <p className="text-sm text-slate-400">On-chain verification of achievements.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Community Benefits (Glassmorphism Section) */}
<section className="py-20 relative">
  <div className="absolute inset-0 bg-primary/5"></div>
  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#4b2bee 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.1 }}></div>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="rounded-3xl border border-white/10 bg-glass p-8 md:p-12 backdrop-blur-xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Community Benefits</h2>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <span className="material-symbols-outlined">balance</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Fairness &amp; Accountability</h4>
                <p className="text-slate-400 text-sm mt-1">Every action is recorded. No more disputes about who did what. The system is the arbiter.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                <span className="material-symbols-outlined">trophy</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Gamified Engagement</h4>
                <p className="text-slate-400 text-sm mt-1">Earn tokens and badges for contributions. Keep the community motivated and active.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                <span className="material-symbols-outlined">lock</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Data Ownership</h4>
                <p className="text-slate-400 text-sm mt-1">You own your data. Your reputation travels with you across the ecosystem.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB29JaiF4pisapSeB42jJ57WdZcBR4cVOnlXHMc4KyxxObDFjKOVkzP3lt0DDIykfg-pCxNZfq7GNajQpQ_5JYSLuZg1js4MsBHB6-1CX-DZpuHEK79OUl7FSXDZVBPpPlZ1wF5WlHDmt2PJrgHSPIGuw3-P5E4hSNmflHY5c-uF8B9U9QigAvd-FV10Pjyxo7UOm62eXzbyWFa2ssKN1HQ3PKH34k8hw4EffVgcSMa6PVbDbK0xEyK4mVFHVKK_aa2T_gWFJCV6Vw")' }}></div>
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Development Team */}
<section className="py-20 bg-background-dark">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Meet the Minds</h2>
      <p className="text-slate-400 max-w-2xl mx-auto">The dedicated team bringing decentralized management to life.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Team Member 1 */}
      <div className="bg-card-dark border border-card-border rounded-2xl p-6 text-center hover:-translate-y-2 transition-transform duration-300">
        <div className="w-24 h-24 mx-auto rounded-full bg-slate-700 mb-4 overflow-hidden border-2 border-primary">
          <img alt="Team member portrait" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYyvCddXjZcnTZcYCp9K-rWs_for5mYeWPqgeu_liLPcs91nOJOKbNA1-8jPqEnaI22PtxKoV7aygnKIRra2voihz-Qb65E_hfQcZ1MKAXVnOJwCWorZnvebIhSCiQmz_ifbq1T89Ixoh8OE2ZD1mTKNi2o70KJKoIdONMZXM9-NIjS92ktiDBEK3Mll6Rinr3bnImCHfeW-l9l6x4VpYUiiPgbk2lL9zz5s6lV11Hrt__awF4bh-iCDVZf_Ggb4uj1YX39BhxBbg"/>
        </div>
        <h3 className="text-white text-xl font-bold">Alex Johnson</h3>
        <p className="text-primary-light font-medium text-sm mb-4">Frontend Architect</p>
        <p className="text-slate-400 text-sm mb-6">Expert in React and UI/UX design. Passionate about creating seamless user experiences.</p>
        <div className="flex justify-center gap-3">
          <a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">mail</span></a>
          <a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">link</span></a>
        </div>
      </div>

      {/* Team Member 2 */}
      <div className="bg-card-dark border border-card-border rounded-2xl p-6 text-center hover:-translate-y-2 transition-transform duration-300">
        <div className="w-24 h-24 mx-auto rounded-full bg-slate-700 mb-4 overflow-hidden border-2 border-primary">
          <img alt="Team member portrait" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy-MWg_xXEJod91c0tSwJZPS_SkgdYpgcTZeycAj63bmC6eD1rUJ3kLXzu_URoAQFFpe8jmZvXY3L17es5JxoZU9GVNaNsIUOUz_Q04i9POZTbvLm6jPGp7wUy2J3TMPgI6YrR1R3ryZbIFkz9350SUgzW8yBNwYMJCHrG0c2pn5mUgwevZHb5yBw1Tnpy18yVOQwjCprAaGrkDUmbRF-plJt1-grJZTMk-FBRC8LoVff5n4EnUObcBJoxDVjRtKd98aPdplXiDJI"/>
        </div>
        <h3 className="text-white text-xl font-bold">Sarah Chen</h3>
        <p className="text-primary-light font-medium text-sm mb-4">Backend Lead</p>
        <p className="text-slate-400 text-sm mb-6">Master of scalable APIs and database architecture. Ensures 99.9% uptime.</p>
        <div className="flex justify-center gap-3">
          <a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">mail</span></a>
          <a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">link</span></a>
        </div>
      </div>

      {/* Team Member 3 */}
      <div className="bg-card-dark border border-card-border rounded-2xl p-6 text-center hover:-translate-y-2 transition-transform duration-300">
        <div className="w-24 h-24 mx-auto rounded-full bg-slate-700 mb-4 overflow-hidden border-2 border-primary">
          <img alt="Team member portrait" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBrRVC5PBVRqBJB5qPYVGk_6zo44WvXtxuoJglwXBGLmkW-drwgdT1EWV-qbhrpYtt0YJmgw8c-xqjAHvJUY13pxD3Ljy5VlMiGINlSgUfBhKSA1C7xtyGBlJdHzCzYQ_fA9zBCld6TbVCPdfr9HMiO-NrrnFRnHNTiMNOtIq46t2IVvfEPKM62IZCLytjGkYeqHdxirleb_PYmgklAZv82N7YzDuY7YVH9AMQbRWIDM_rchKXRPyp4ESTQjksla5hOcKN2fbrAiQ"/>
        </div>
        <h3 className="text-white text-xl font-bold">Michael Okon</h3>
        <p className="text-primary-light font-medium text-sm mb-4">Web3 Engineer</p>
        <p className="text-slate-400 text-sm mb-6">Smart contract specialist. Focuses on Solidity security and gas optimization.</p>
        <div className="flex justify-center gap-3">
          <a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">mail</span></a>
          <a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">link</span></a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Tech Stack */}
<section className="py-16 border-t border-card-border bg-card-dark/20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500 mb-8">
      Powered by Modern Technology
    </p>
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
      {/* Tech Badges */}
      <div className="flex items-center gap-2">
        <FaReact className="text-[#61DAFB] w-8 h-8" />
        <span className="text-xl font-bold text-white">React</span>
      </div>
      <div className="flex items-center gap-2">
        <FaNodeJs className="text-[#68A063] w-8 h-8" />
        <span className="text-xl font-bold text-white">Node.js</span>
      </div>
      <div className="flex items-center gap-2">
        <SiMongodb className="text-[#4DB33D] w-8 h-8" />
        <span className="text-xl font-bold text-white">MongoDB</span>
      </div>
      <div className="flex items-center gap-2">
        <SiSolidity className="text-[#363636] w-8 h-8" />
        <span className="text-xl font-bold text-white">Solidity</span>
      </div>
      <div className="flex items-center gap-2">
        <SiEthereum className="text-[#627EEA] w-8 h-8" />
        <span className="text-xl font-bold text-white">Sepolia</span>
      </div>
    </div>
  </div>
</section>

{/* CTA Footer1 */}
<footer className="relative overflow-hidden bg-background-dark py-16">
  <div className="absolute inset-0 bg-primary/5"></div>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
      Ready to Transform Your Community?
    </h2>
    <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
      Join thousands of tech enthusiasts building the future of decentralized collaboration today.
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <button>
       <Link
            to="/signup"
            className="flex h-12 min-w-[160px] items-center justify-center rounded-lg border border-card-border bg-card-dark px-8 text-base font-bold text-white transition-all hover:bg-[#2b2839]"
          >
            Join the Community
          </Link>
      </button>
         <button>
           <Link to="/login" className="flex h-12 min-w-[160px] items-center justify-center rounded-lg border border-card-border bg-card-dark px-8 text-base font-bold text-white transition-all hover:bg-[#2b2839]">
                  Sign In
            </Link>
            </button>
    </div>
  </div>
</footer>

{/* CTA Footer2 */}

<footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Borderless Tech Hub. All rights reserved.
        <div className="justify-center mt-4 flex gap-6">
        <a className="text-slate-500 hover:text-white text-sm" href="#">Privacy Policy</a>
        <a className="text-slate-500 hover:text-white text-sm" href="#">Terms of Service</a>
      </div>
      </footer>

      <Footer /> 

      </main>
    </>
  );
};

export default About;