import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { notifications } from "../../mock/dashboardData"
import { useAuth } from "../../hooks/useAuth"
import {
  Search,
  Bell,
  User,
  Menu
} from "../../icons"

export default function Topbar({ onMenuClick }) {
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("");
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchKey = (e) => {
    if (e.key === "Enter") {
      // for now just alert or log; could route to a search page later
      alert(`Search for: ${searchTerm}`);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-[#26263a] gap-4">

      {/* Mobile menu button */}
      <button
        onClick={onMenuClick}
        className="md:hidden p-2 text-gray-400 hover:text-white"
      >
        <Menu size={20} />
      </button>

      {/* Search */}
      <div className="flex items-center gap-2 bg-[#1a1a2e] px-3 py-2 rounded-lg flex-1 md:flex-initial md:w-72">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleSearchKey}
          className="bg-transparent outline-none text-sm w-full text-gray-200"
        />
      </div>
      

      {/* Right Side */}
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
        <Link to="/" className="hidden lg:block text-text-secondary text-purple-600 hover:text-white transition">
            Home
          </Link>
        <Link to="/community" className="hidden lg:block text-text-secondary text-purple-600 hover:text-white transition">
            Community
          </Link>
         <Link to="/about" className="hidden lg:block text-text-secondary text-purple-600 hover:text-white transition">
            About Us
          </Link>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setNotificationOpen(!notificationOpen)}
            className="relative hover:opacity-80 transition"
          >
            <Bell size={25} />
            <span className="absolute -top-1 -right-1 bg-purple-600 text-xs px-1 rounded-full">
              {notifications.length}
            </span>
          </button>

          {notificationOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-[#151521] border border-[#26263a] rounded-xl p-4 space-y-3 z-50 shadow-lg">
              <h4 className="font-semibold text-sm text-white mb-3">Notifications</h4>
              {notifications.map((note) => (
                <div key={note.id} className="text-sm text-gray-300 pb-3 border-b border-[#26263a] last:border-b-0">
                  <p>{note.message}</p>
                  <span className="text-xs text-gray-500">{note.time}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Wallet */}
        <div className="text-sm text-gray-600 text-purple-600">
          0x8a3...29f1
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <User size={30} />
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#151521] border border-[#26263a] rounded-xl p-3 space-y-2 z-50 shadow-lg">
              <Link
                to={user?.role === "Admin" ? "/admin/settings" : "/dashboard/settings"}
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#26263a] rounded transition"
              >
                Settings
              </Link>
              <Link
                to={user?.role === "Admin" ? "/admin/settings" : "/dashboard/settings"}
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#26263a] rounded transition"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#26263a] rounded transition border-t border-[#26263a]"
              >
                Logout
              </button>
            </div>
          )}
        </div>

      </div>

    </div>
  )
}