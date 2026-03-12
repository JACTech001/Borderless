import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-[#0f172a]/70 border-b border-white/10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 sm:gap-3 text-lg sm:text-2xl">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600"></div>
          <span className="font-semibold text-white text-sm sm:text-base">
            Borderless Tech Hub
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-gray-300">
          <Link to="/" className="hover:text-orange-500 transition">
            Home
          </Link>
          {user && user.role === "Member" && (
            <Link to="/dashboard" className="hover:text-orange-500 transition">
              Dashboard
            </Link>
          )}
          {user && user.role === "Admin" && (
            <Link to="/admin" className="hover:text-orange-500 transition">
              Admin Dashboard
            </Link>
          )}
          <Link to="/features" className="hover:text-orange-500 transition">
            Features
          </Link>
          <Link to="/events" className="hover:text-orange-500 transition">
            Events
          </Link>
          <Link to="/community" className="hover:text-orange-500 transition">
            Community
          </Link>
          <Link to="/docs" className="hover:text-orange-500 transition">
            Docs
          </Link>
          <Link to="/about" className="hover:text-orange-500 transition">
            About Us
          </Link>
          {/* auth links */}
          {!user ? (
            <>
              <Link to="/login" className="hover:text-orange-500 transition">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-primary hover:bg-primary-hover text-white px-3 py-2 rounded-lg transition text-sm"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <span className="text-gray-200 text-sm">
                {user.email || user.name || "User"}
              </span>
              <button
                onClick={handleLogout}
                className="px-3 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition text-white text-sm"
              >
                Logout
              </button>
            </>
          )}

          <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 transition shadow-lg shadow-indigo-500/30 text-sm">
            Connect Wallet
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-4 space-y-4">
            <Link to="/" className="block text-gray-300 hover:text-orange-500 transition" onClick={toggleMenu}>
              Home
            </Link>
            {user && user.role === "Member" && (
              <Link to="/dashboard" className="block text-gray-300 hover:text-orange-500 transition" onClick={toggleMenu}>
                Dashboard Home
              </Link>
            )}
            {user && user.role === "Admin" && (
              <Link to="/admin" className="block text-gray-300 hover:text-orange-500 transition" onClick={toggleMenu}>
                Admin Dashboard
              </Link>
            )}
            <Link to="/features" className="block text-gray-300 hover:text-orange-500 transition" onClick={toggleMenu}>
              Features
            </Link>
            <Link to="/events" className="block text-gray-300 hover:text-orange-500 transition" onClick={toggleMenu}>
              Events
            </Link>
            <Link to="/community" className="block text-gray-300 hover:text-orange-500 transition" onClick={toggleMenu}>
              Community
            </Link>
            <Link to="/docs" className="block text-gray-300 hover:text-orange-500 transition" onClick={toggleMenu}>
              Docs
            </Link>
            <Link to="/about" className="block text-gray-300 hover:text-orange-500 transition" onClick={toggleMenu}>
              About Us
            </Link>
            {!user ? (
              <>
                <Link to="/login" className="block text-gray-300 hover:text-orange-500 transition" onClick={toggleMenu}>
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg transition text-center"
                  onClick={toggleMenu}
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <span className="block text-gray-200">
                  {user.email || user.name || "User"}
                </span>
                <button
                  onClick={() => { handleLogout(); toggleMenu(); }}
                  className="block w-full text-left px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition text-white"
                >
                  Logout
                </button>
              </>
            )}
            <button className="block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 transition shadow-lg shadow-indigo-500/30 text-white" onClick={toggleMenu}>
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;