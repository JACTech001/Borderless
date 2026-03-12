import { Link } from "react-router-dom";
import {
  CheckCircle,
  Users,
  Clock,
  Zap,
  Shield,
  TrendingUp,
  Wallet,
  Lock,
  BarChart3,
  MessageSquare,
  Award,
  Globe,
} from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const Features = () => {
  const mainFeatures = [
    {
      icon: Users,
      title: "Community Dashboard",
      description:
        "Join and participate in tech communities. View member profiles, track community activity, and engage with other professionals.",
      color: "text-blue-500",
    },
    {
      icon: Clock,
      title: "Attendance Tracking",
      description:
        "Track your attendance and participation. Get verified proof of your community involvement with transparent records.",
      color: "text-green-500",
    },
    {
      icon: CheckCircle,
      title: "Personal Task Management",
      description:
        "Manage your assigned tasks and projects. Track progress, meet deadlines, and showcase your contributions.",
      color: "text-purple-500",
    },
    {
      icon: Wallet,
      title: "Earn & Manage Tokens",
      description:
        "Earn tokens for contributions and participation. Track your earnings, view transaction history, and manage your wallet.",
      color: "text-yellow-500",
    },
    {
      icon: BarChart3,
      title: "Personal Analytics",
      description:
        "View your engagement metrics, contribution stats, and performance on the hub. See how you compare with community averages.",
      color: "text-orange-500",
    },
    {
      icon: Shield,
      title: "Secure Web3 Account",
      description:
        "Decentralized identity with blockchain verification. Your data, your control. No intermediaries.",
      color: "text-red-500",
    },
  ];

  const premiumFeatures = [
    {
      icon: Lock,
      title: "Advanced Profile Customization",
      description: "Customize your profile with badges, skills, and achievements. Showcase your contributions.",
    },
    {
      icon: Globe,
      title: "Multi-Hub Support",
      description: "Join and manage participation across multiple communities with a unified account.",
    },
    {
      icon: MessageSquare,
      title: "Direct Messaging",
      description: "Connect with other members. Send direct messages and build professional relationships.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth Insights",
      description: "Analytics on your growth, skills gained, and contribution trends. Track your journey.",
    },
    {
      icon: Award,
      title: "Achievement & Badges",
      description: "Earn badges for milestones. Display achievements as NFTs to showcase expertise.",
    },
    {
      icon: Zap,
      title: "API Access for Developers",
      description: "API access to your data. Build custom integrations and third-party tools.",
    },
  ];

  const FeatureCard = ({ icon, title, description, color }) => {
    const Icon = icon;
    return (
      <div className="bg-[#151521] border border-[#26263a] rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center mb-4`}>
          <Icon className={`${color}`} size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen text-white bg-[radial-gradient(ellipse_at_top,_#1e1b4b_0%,_#0f0c29_40%,_#0a0a1f_100%)]">
        {/* HERO SECTION */}
        <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
          <div className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_80px_rgba(99,102,241,0.15)] px-10 py-20 text-center">
            <div className="mb-6">
              <span className="text-xs tracking-widest px-4 py-1 rounded-full bg-white/5 border border-white/10">
                POWERFUL FEATURES
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Your Personal{" "}
              <span className="bg-gradient-to-r from-white via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Borderless Hub
              </span>
            </h1>

            <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
              Manage your tasks, track attendance, earn tokens, and engage with 
              your community—all in one secure, decentralized platform.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <Link
                to="/signup"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-500/30"
              >
                Get Started
              </Link>

              <Link
                to="/demo"
                className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* MAIN FEATURES SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-16">
            <p className="text-indigo-400 text-sm tracking-widest mb-2">
              CORE FEATURES
            </p>
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Thrive</h2>
            <p className="text-gray-400 max-w-2xl">
              The essential tools to manage your involvement, track contributions,
              and succeed in your tech community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, idx) => (
              <FeatureCard
                key={idx}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
              />
            ))}
          </div>
        </section>

        {/* PREMIUM FEATURES SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-16">
            <p className="text-indigo-400 text-sm tracking-widest mb-2">
              PREMIUM FEATURES
            </p>
            <h2 className="text-4xl font-bold mb-4">Advanced Tools & Growth</h2>
            <p className="text-gray-400 max-w-2xl">
              Unlock premium features to enhance your profile, grow your network,
              and take your participation to the next level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumFeatures.map((feature, idx) => (
              <FeatureCard
                key={idx}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color="text-indigo-400"
              />
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="bg-[#0f172a]/70 border border-white/10 backdrop-blur-xl rounded-2xl px-10 py-16 text-center shadow-[0_0_60px_rgba(99,102,241,0.15)]">
            <h2 className="text-4xl font-bold mb-4">Join the Borderless Community Today</h2>

            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Start managing your tasks, tracking your progress, and earning tokens.
              Join thousands of tech professionals already thriving on the Borderless Hub.
            </p>

            <div className="flex justify-center gap-4">
              <Link
                to="/signup"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 transition shadow-lg shadow-indigo-500/30"
              >
                Sign Up Now
              </Link>

              <button className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Features;
