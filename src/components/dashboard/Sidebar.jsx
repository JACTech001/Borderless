import { NavLink } from "react-router-dom"

import {
  LayoutDashboard,
  CheckSquare,
  CalendarDays,
  Wallet,
  History,
  Settings,
  LogOut,
  X
} from "../../icons"

export default function Sidebar({ onClose }) {

  const linkClass =
    "flex items-center gap-3 p-2 rounded transition-colors"

  const activeClass =
    "bg-purple-600 text-white"

  const inactiveClass =
    "text-gray-300 hover:bg-[#1e293b]"

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
      <h1 className="text-xl font-bold text-purple-500 mb-10">
        Borderless Tech Hub
      </h1>

      <nav className="flex flex-col gap-2 flex-grow">

        {/* Dashboard */}

        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
        <LayoutDashboard size={20} color="white" />
          Dashboard
        </NavLink>


        {/* Tasks */}

        <NavLink
          to="/dashboard/tasks"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <CheckSquare size={18} />
          My Tasks
        </NavLink>


        {/* Attendance */}

        <NavLink
          to="/dashboard/attendance"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <CalendarDays size={18} />
          Attendance
        </NavLink>


        {/* Wallet */}

        <NavLink
          to="/dashboard/wallet"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <Wallet size={18} />
          Wallet
        </NavLink>


        {/* Activity */}

        <NavLink
          to="/dashboard/activity"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <History size={18} />
          Activity Log
        </NavLink>


        {/* Settings */}

        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <Settings size={18} />
          Settings
        </NavLink>

      </nav>


      {/* Logout Button */}

      <button className="flex items-center gap-3 p-2 rounded text-gray-300 hover:bg-[#1e293b] mt-6">
        <LogOut size={18} />
        Log Out
      </button>

    </div>
  )
}