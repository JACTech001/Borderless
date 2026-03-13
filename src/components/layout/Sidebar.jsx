import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, CheckSquare, Wallet, Activity, FileText, Settings, X, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export default function Sidebar({ onClose }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navItems = [
    { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard', end: true },
    { href: '/dashboard/tasks', icon: CheckSquare, label: 'Tasks' },
    { href: '/dashboard/wallet', icon: Wallet, label: 'Wallet' },
    { href: '/dashboard/activity', icon: Activity, label: 'Activity' },
    { href: '/dashboard/reports', icon: FileText, label: 'Reports' },
    { href: '/dashboard/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b border-[#26263a]">
        <h1 className="text-xl font-bold text-purple-500">
          Borderless Tech Hub
        </h1>
        <button onClick={onClose} className="md:hidden"><X size={24} /></button>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map(item => (
          <NavLink
            key={item.href}
            to={item.href}
            end={item.end}
            className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'hover:bg-[#1a1a2e]'}`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="p-4 mt-auto border-t border-[#26263a]">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 p-2 rounded text-gray-300 hover:bg-[#1e293b] w-full transition"
        >
          <LogOut size={18} />
          Log Out
        </button>
      </div>
    </div>
  );
}