import StatCard from "../../components/dashboard/StatCard"
import TaskList from "../../components/dashboard/TaskList"
import ActivityFeed from "../../components/dashboard/ActivityFeed"
import AttendanceChart from "../../components/dashboard/AttendanceChart"
import { stats } from "../../mock/dashboardData"
import NotificationPanel from "../../components/dashboard/NotificationPanel"
import { NavLink } from "react-router-dom"
import { useState } from "react"


export default function Dashboard() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  const handleStatusToggle = () => {
    setIsSignedIn(!isSignedIn)
    const newStatus = !isSignedIn ? "Signed In" : "Signed Out"
    alert(`Status changed to: ${newStatus}`)
  }

  return (
    
    <div className="space-y-8 ">

      {/* Welcome */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

        <div>
          <h1 className="text-3xl font-bold">
            Welcome back, Alex
          </h1>

          <p className="text-gray-400">
            Here's what's happening in your hub today.
          </p>
        </div>

        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-4 w-full md:w-60">

          <p className="text-xs text-gray-400 mb-2">
            CURRENT STATUS
          </p>

          <div className="flex justify-between items-center">

            <span className={`text-lg font-medium ${isSignedIn ? "text-green-400" : "text-red-400"}`}>
              {isSignedIn ? "Signed In" : "Signed Out"}
            </span>

            <button 
              onClick={handleStatusToggle}
              className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                isSignedIn ? "bg-green-600" : "bg-gray-600"
              }`}
            ></button>

          </div>

        </div>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
          />
        ))}

      </div>

      {/* Tasks + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2">
          <TaskList />
        </div>

        <ActivityFeed />

      </div>

      {/* Attendance */}
      <AttendanceChart />
      <NotificationPanel />

    </div>
    
  )
}