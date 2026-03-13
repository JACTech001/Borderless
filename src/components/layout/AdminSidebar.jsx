import { Link, useLocation } from 'react-router-dom';
import { CalendarCheck, LayoutDashboard, X } from 'lucide-react';

export default function AdminSidebar({ onClose }) {
  const location = useLocation();
  const isActive = (path) => {
    if (path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/admin/attendance', icon: CalendarCheck, label: 'Attendance' },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b border-[#26263a]">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <button onClick={onClose} className="md:hidden"><X size={24} /></button>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map(item => (
          <Link key={item.href} to={item.href} className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive(item.href) ? 'bg-primary text-white' : 'hover:bg-[#1a1a2e]'}`}>
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}