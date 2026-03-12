import { NavLink } from "react-router-dom";
import { LayoutDashboard, BarChart3, Users, CheckSquare, FileText, Settings, LogOut, Calendar, X } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function AdminSidebar({ onClose }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const linkClass =
    "flex items-center gap-3 p-2 rounded transition-colors";

  const activeClass =
    "bg-purple-600 text-white";

  const inactiveClass =
    "text-gray-300 hover:bg-[#1e293b]";

  return (
    <div className="w-64 h-screen bg-[#0f0f1a] border-r border-[#26263a] p-6 flex flex-col">

      {/* Close button for mobile */}
      <button
        onClick={onClose}
        className="md:hidden self-end mb-4 p-2 text-gray-400 hover:text-white"
      >
        <X size={20} />
      </button>

      {/* Logo */}
      <h1 className="text-xl font-bold text-purple-500 mb-2">
        Borderless Tech
      </h1>
      <p className="text-xs text-gray-500 mb-10">Admin Panel</p>

      <nav className="flex flex-col gap-2 flex-grow">

        {/* Dashboard */}
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        {/* Analytics */}
        <NavLink
          to="/admin/analytics"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <BarChart3 size={20} />
          Analytics
        </NavLink>

        {/* Users */}
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <Users size={20} />
          Users
        </NavLink>

        {/* Tasks */}
        <NavLink
          to="/admin/tasks"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <CheckSquare size={20} />
          Tasks
        </NavLink>

        {/* Events */}
        <NavLink
          to="/admin/events"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <Calendar size={20} />
          Events
        </NavLink>

        {/* Reports */}
        <NavLink
          to="/admin/reports"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <FileText size={20} />
          Reports
        </NavLink>

        {/* Settings */}
        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <Settings size={20} />
          Settings
        </NavLink>

      </nav>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 p-2 rounded text-gray-300 hover:bg-[#1e293b] mt-6 w-full transition"
      >
        <LogOut size={18} />
        Log Out
      </button>

    </div>
  );
}
