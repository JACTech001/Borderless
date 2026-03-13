import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from '../../hooks/useAuth';
import AdminLayout from './AdminLayout';
import DashboardLayout from './DashboardLayout';
import AdminAttendance from './AdminAttendance';
import DashboardHome from './DashboardHome';
import Navbar from './Navbar';
import Footer from './Footer';
import AdminDashboardHome from './AdminDashboardHome';

function ProtectedRoute({ children, role }) {
  const { user } = useAuth();

  if (!user || user.role !== role) {
    // Redirect them to the home page if they don't have the correct role
    return <Navigate to="/" />;
  }

  return children;
}

function PublicLayout() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function AppRoutes() {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path="/" element={<div className="text-white text-center p-10">Public Home Page</div>} />
                {/* Placeholder routes for links in Navbar */}
                <Route path="/features" element={<div className="text-white text-center p-10">Features Page</div>} />
                <Route path="/events" element={<div className="text-white text-center p-10">Events Page</div>} />
                <Route path="/community" element={<div className="text-white text-center p-10">Community Page</div>} />
                <Route path="/docs" element={<div className="text-white text-center p-10">Docs Page</div>} />
                <Route path="/about" element={<div className="text-white text-center p-10">About Us Page</div>} />
            </Route>
            <Route path="/admin" element={<ProtectedRoute role="Admin"><AdminLayout /></ProtectedRoute>}>
                <Route index element={<AdminDashboardHome />} />
                <Route path="attendance" element={<AdminAttendance />} />
            </Route>
            <Route path="/dashboard" element={<ProtectedRoute role="Member"><DashboardLayout /></ProtectedRoute>}>
                <Route index element={<DashboardHome />} />
            </Route>
        </Routes>
    )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}