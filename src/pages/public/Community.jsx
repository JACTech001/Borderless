import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function Community() {
  return (
    <>
    <Navbar />
    <main className="flex-1 flex-grow min-h-screen text-white bg-[radial-gradient(ellipse_at_top,_#1e1b4b_0%,_#0f0c29_40%,_#0a0a1f_100%)]">

      {/* Hero Section */}
      <section className="px-4 lg:px-40 py-12 lg:py-20 pt-16 max-w-[1700px] mx-auto">
        <div className="bg-primary rounded-3xl p-12 lg:p-20 relative overflow-hidden shadow-2xl shadow-primary/40">

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-background-dark/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div className="flex flex-col gap-6">

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Community First
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white">
                  Join Our Community
                </h1>

                <p className="text-lg text-white/80 max-w-lg leading-relaxed">
                  Connect with other tech enthusiasts, developers, and creators.
                  Share ideas, contribute to open-source projects, and build the
                  future of Borderless Tech together.
                </p>

                {/* Contributors */}
                <div className="mt-4">
                  <h3 className="text-sm font-bold text-white/60 mb-4 uppercase tracking-widest">
                    Top Contributors
                  </h3>

                  <div className="flex -space-x-3 items-center">

                    <div
                      className="size-12 rounded-full border-4 border-white/30 bg-cover bg-center ring-2 ring-white/20"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6zBEnGfqgMiN_YPyNruv79R3tHMwNFXXqbfcj6xSYvW9VC3ZR4TG8iemRTStq6HBz8djoaA4snbKEep6hHNDpVMoZ83r3sSqMmsuh54ovAHgcXu-AZwTrgTRcWAw4MFVESqrjYn0GKZ-wGoY1-WzXbbAhcEwSIiNBJaJo50WwC1mV_Lxp3pIxsKOlZJRcL6NLniTcuO9H5aNz5FUnKls4DOld-PaOCYHe3Bvn8y6xGSrMkoPnY2DLY-lFd0PncozG-ZxQfQyHTwY')",
                      }}
                    ></div>

                    <div
                      className="size-12 rounded-full border-4 border-white/30 bg-cover bg-center ring-2 ring-white/20"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAsf3X6GUqy7mKvAf1FB6sGDgzie9iFIfN5evdN2OuU0cJBi-6mTgNgwYKfmJ2CoSPgzZ_N9_EZg8sgZREqJF6EHbrQTSrb2EMEr9tH5vrFQSr5NWOhaCUV-WTmx2YIRGs-8lubM-Kvt6rS7pAPF3bwq5v8i9awzsHy4A8PLLuR-1qVXXf_IYgm7ab3MwZw7fYiv4Z552FhuHd_U6y-p8ZoPHTV1ymCY__NWhgunSfASCk98EjDzC2eGD6K1MTNeQl4Wk5aVlZKMM')",
                      }}
                    ></div>

                    <div
                      className="size-12 rounded-full border-4 border-white/30 bg-cover bg-center ring-2 ring-white/20"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDv7gJTZZ0DRSutj9y09JNOJS8RpdXOo-pxBr-TIHXySma13oD0q-652jSOfH_UM28zDbYl2S_wqrho5zQL1JKPtWpsJ4iNi6-GuA5bc3oIHRofTafyQwX6VXfwQHdQoWfR9HHx0ofn3V3l-sdPEr0yvqi78tNaOSNqILEMJA9KPEBgj6YWXyA2C0m_GBmAbbhlr1HaXMnxXnRGXbssKezADj5Rm2IjrmWC_1ItV_kC9fV_ilYB0H35rKbDFUBFIN3IsijVWHXA1G8')",
                      }}
                    ></div>

                    <div className="size-12 rounded-full border-4 border-white/30 bg-white/20 flex items-center justify-center text-white text-xs font-bold ring-2 ring-white/20">
                      +2k
                    </div>

                  </div>
                </div>
              </div>

              {/* Hero Card */}
              <div className="relative hidden lg:block">

                <div className="relative glass-card rounded-2xl overflow-hidden aspect-video shadow-2xl">

                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>

                  <div className="p-8 h-full flex flex-col justify-end">
                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="material-symbols-outlined text-white">
                          verified
                        </span>
                        <span className="font-bold text-white">Latest Milestone</span>
                      </div>
                      <p className="text-sm text-white/80">
                        Just reached 50,000 active contributors across all
                        platforms! 🚀
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    <span className="material-symbols-outlined text-[200px]">
                      groups
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Platform Grid */}
      <section className="flex-grow min-h-screen text-white bg-[radial-gradient(ellipse_at_top,_#1e1b4b_0%,_#0f0c29_40%,_#0a0a1f_100%)]">
        <div className="max-w-[1200px] mx-auto">

          <div className="flex flex-col gap-2 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Connect Across Platforms
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Wherever you are, we're building there too.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Discord */}
            <div className="glass-card p-6 rounded-xl flex flex-col h-full group">

              <div className="flex justify-between items-start mb-6">
                <div className="size-12 rounded-lg bg-[#5865F2]/20 flex items-center justify-center text-[#5865F2]">
                  <span className="material-symbols-outlined text-3xl">
                    forum
                  </span>
                </div>

                <span className="text-[10px] font-bold py-1 px-2 rounded bg-green-500/10 text-green-500 border border-green-500/20 uppercase tracking-widest">
                  Active
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">Discord</h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                Join our real-time chat for technical support, workshops, and
                networking with devs.
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-semibold text-slate-500">
                  12k members
                </span>

                <a
                  className="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  href="#"
                >
                  Join Server
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

                        {/* Telegram */}
<div className="group relative overflow-hidden rounded-2xl border border-card-border bg-card-dark p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

  <div className="relative flex items-start justify-between">
    <span className="material-symbols-outlined text-4xl text-blue-400">send</span>
    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">
      Chat
    </span>
  </div>

  <h3 className="mt-6 text-xl font-bold text-white">Telegram</h3>

  <p className="mt-2 text-sm text-slate-400">
    Real-time community discussions, quick updates, and direct access to the
    Borderless ecosystem.
  </p>

  <a
    href="#"
    className="mt-6 inline-flex items-center gap-2 text-blue-400 font-semibold hover:gap-3 transition-all"
  >
    Join Telegram
    <span className="material-symbols-outlined text-sm">arrow_forward</span>
  </a>
</div>

{/* Twitter */}
<div className="group relative overflow-hidden rounded-2xl border border-card-border bg-card-dark p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10">
  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-sky-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

  <div className="relative flex items-start justify-between">
    <span className="material-symbols-outlined text-4xl text-sky-400">alternate_email</span>
    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-sky-500/10 text-sky-400">
      Social
    </span>
  </div>

  <h3 className="mt-6 text-xl font-bold text-white">Twitter</h3>

  <p className="mt-2 text-sm text-slate-400">
    Stay updated with the latest announcements, product launches, and
    community highlights.
  </p>

  <a
    href="#"
    className="mt-6 inline-flex items-center gap-2 text-sky-400 font-semibold hover:gap-3 transition-all"
  >
    Follow Us
    <span className="material-symbols-outlined text-sm">arrow_forward</span>
  </a>
</div>

{/* WhatsApp */}
<div className="group relative overflow-hidden rounded-2xl border border-card-border bg-card-dark p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10">
  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

  <div className="relative flex items-start justify-between">
    <span className="material-symbols-outlined text-4xl text-green-400">
      chat
    </span>
    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-500/10 text-green-400">
      Community
    </span>
  </div>

  <h3 className="mt-6 text-xl font-bold text-white">WhatsApp</h3>

  <p className="mt-2 text-sm text-slate-400">
    Join our WhatsApp community to connect with members, share ideas, and stay
    updated with the latest announcements from Borderless Tech Hub.
  </p>

  <a
    href="#"
    className="mt-6 inline-flex items-center gap-2 text-green-400 font-semibold hover:gap-3 transition-all"
  >
    Join WhatsApp
    <span className="material-symbols-outlined text-sm">arrow_forward</span>
  </a>
</div>

{/* GitHub */}
<div className="group relative overflow-hidden rounded-2xl border border-card-border bg-card-dark p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-500/10">
  <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-gray-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

  <div className="relative flex items-start justify-between">
    <span className="material-symbols-outlined text-4xl text-gray-300">code</span>
    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-500/10 text-gray-300">
      Open Source
    </span>
  </div>

  <h3 className="mt-6 text-xl font-bold text-white">GitHub</h3>

  <p className="mt-2 text-sm text-slate-400">
    Explore our open-source repositories, contribute code, and help build
    Borderless tools.
  </p>

  <a
    href="#"
    className="mt-6 inline-flex items-center gap-2 text-gray-300 font-semibold hover:gap-3 transition-all"
  >
    View Repository
    <span className="material-symbols-outlined text-sm">arrow_forward</span>
  </a>
</div>

{/* LinkedIn */}
<div className="group relative overflow-hidden rounded-2xl border border-card-border bg-card-dark p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/10">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

  <div className="relative flex items-start justify-between">
    <span className="material-symbols-outlined text-4xl text-blue-500">business</span>
    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-600/10 text-blue-500">
      Network
    </span>
  </div>

  <h3 className="mt-6 text-xl font-bold text-white">LinkedIn</h3>

  <p className="mt-2 text-sm text-slate-400">
    Connect professionally with the Borderless network and explore career
    opportunities.
  </p>

  <a
    href="#"
    className="mt-6 inline-flex items-center gap-2 text-blue-500 font-semibold hover:gap-3 transition-all"
  >
    Connect
    <span className="material-symbols-outlined text-sm">arrow_forward</span>
  </a>
</div>

{/* Hub Portal */}
<div className="group relative overflow-hidden rounded-2xl border border-card-border bg-card-dark p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

  <div className="relative flex items-start justify-between">
    <span className="material-symbols-outlined text-4xl text-purple-400">hub</span>
    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-purple-500/10 text-purple-400">
      Platform
    </span>
  </div>

  <h3 className="mt-6 text-xl font-bold text-white">Hub Portal</h3>

  <p className="mt-2 text-sm text-slate-400">
    Access the Borderless Tech Hub dashboard, manage communities, and explore
    decentralized tools.
  </p>

  <a
    href="#"
    className="mt-6 inline-flex items-center gap-2 text-purple-400 font-semibold hover:gap-3 transition-all"
  >
    Open Portal
    <span className="material-symbols-outlined text-sm">arrow_forward</span>
  </a>
</div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 lg:px-40 py-24 text-center">

        <div className="max-w-[800px] mx-auto bg-primary rounded-3xl p-12 lg:p-20 relative overflow-hidden shadow-2xl shadow-primary/40">

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-background-dark/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="relative z-10 flex flex-col items-center gap-8">

            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              Ready to shape the future of technology?
            </h2>

            <p className="text-white/80 text-lg max-w-lg mx-auto">
              Don't just watch the web evolve. Be part of the movement that's
              defining the borderless era of tech collaboration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">

              <button className="bg-primary-dark bg-opacity-20 border border-white/20 text-white hover:bg-white/10 font-bold py-4 px-10 rounded-xl transition-all text-lg">
                Join Now
              </button>

              <button className="bg-primary-dark bg-opacity-20 border border-white/20 text-white hover:bg-white/10 font-bold py-4 px-10 rounded-xl transition-all text-lg">
                View Manifesto
              </button>

            </div>
          </div>
        </div>
      </section>
        <Footer />
    </main>
    </>
  );
}