import { Menu, Search, Bell, ChevronDown, User, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Topbar({ onMenuClick }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="flex-shrink-0 bg-[#0f0f1a] border-b border-[#26263a]">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <button onClick={onMenuClick} className="md:hidden text-white p-1">
            <Menu size={24} />
          </button>
          {/* Search Bar - hidden on small screens */}
          <div className="hidden md:flex items-center relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#1a1a2e] border border-[#26263a] rounded-md pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative text-gray-400 hover:text-white p-2 rounded-full hover:bg-[#1a1a2e]">
            <Bell size={20} />
            {/* Notification badge */}
            <span className="absolute top-1 right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          </button>

          <button className="hidden sm:flex items-center px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 transition shadow-lg shadow-indigo-500/30 text-sm font-semibold">
            Connect Wallet
          </button>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold">
                {user?.email?.[0].toUpperCase() || 'A'}
              </div>
              <span className="hidden md:inline text-sm font-medium">{user?.email || 'User'}</span>
              <ChevronDown size={16} className="hidden md:inline text-gray-400" />
            </button>

            {dropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-[#1a1a2e] border border-[#26263a] rounded-md shadow-lg py-1 z-20"
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:bg-[#26263a] hover:text-white">
                  <User size={16} /> Profile
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:bg-[#26263a] hover:text-white">
                  <Settings size={16} /> Settings
                </a>
                <div className="border-t border-[#26263a] my-1"></div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-red-500/20 hover:text-red-300"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}