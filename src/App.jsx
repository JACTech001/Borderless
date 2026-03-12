import { Routes, Route } from "react-router-dom";

import Signup from "./pages/public/Signup";
import Login from "./pages/public/Login";
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Features from "./pages/public/Features";
import Community from "./pages/public/Community";
import Events from "./pages/public/Events";
import Docs from "./pages/public/Docs";
import Legal from "./pages/public/Legal";
import Demo from "./pages/public/Demo";

import DashboardLayout from "./components/layout/DashboardLayout";
import AdminLayout from "./components/layout/AdminLayout";

import Dashboard from "./pages/member/Dashboard";
import Tasks from "./pages/member/Tasks";
import Attendance from "./pages/member/Attendance";
import Wallet from "./pages/member/Wallet";
import Activity from "./pages/member/Activity";
import Reports from "./pages/member/Reports";
import Settings from "./pages/member/Settings";

import AdminDashboard from "./pages/admin/Dashboard";
import AdminUsers from "./pages/admin/Users";
import AdminTasks from "./pages/admin/Tasks";
import AdminReports from "./pages/admin/Reports";
import AdminSettings from "./pages/admin/Settings";
import AdminAnalytics from "./pages/admin/Analytics";
import AdminEvents from "./pages/admin/Events";

import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(ellipse_at_top,_#1e1b4b_0%,_#0f0c29_40%,_#0a0a1f_100%)]">

      <Routes>

        {/* PUBLIC PAGES */}

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/features" element={<Features />} />
        <Route path="/events" element={<Events />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />

        {/* MEMBER DASHBOARD */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >

          <Route index element={<Dashboard />} />

          <Route path="tasks" element={<Tasks />} />

          <Route path="attendance" element={<Attendance />} />

          <Route path="wallet" element={<Wallet />} />

          <Route path="activity" element={<Activity />} />

          <Route path="reports" element={<Reports />} />

          <Route path="settings" element={<Settings />} />

        </Route>

        {/* ADMIN PANEL */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="Admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >

          <Route index element={<AdminDashboard />} />

          <Route path="analytics" element={<AdminAnalytics />} />

          <Route path="users" element={<AdminUsers />} />

          <Route path="tasks" element={<AdminTasks />} />

          <Route path="events" element={<AdminEvents />} />

          <Route path="reports" element={<AdminReports />} />

          <Route path="settings" element={<AdminSettings />} />

        </Route>

      </Routes>

    </div>
  );
};

export default App;