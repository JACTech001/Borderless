import StatCard from "../../components/dashboard/StatCard"
import TaskList from "../../components/dashboard/TaskList"
import ActivityFeed from "../../components/dashboard/ActivityFeed"
import { stats } from "../../mock/dashboardData"
import NotificationPanel from "../../components/dashboard/NotificationPanel"
import { NavLink } from "react-router-dom"


export default function Dashboard() {
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

      <NotificationPanel />

    </div>
    
  )
}