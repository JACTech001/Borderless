import { Users, CheckSquare, TrendingUp, BarChart3, Wallet, AlertCircle } from "lucide-react";
import { members } from "../../mock/membersData";
import { tasks } from "../../mock/tasksData";
import { reports, analyticsData } from "../../mock/reportsData";

// stat box component declared at top level to satisfy eslint and prevent
// recreation on each render
const StatBox = ({ icon, label, value, color }) => {
  const Icon = icon;
  return (
    <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6 hover:border-purple-500/50 transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">{label}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
};

export default function AdminDashboard() {
  console.log('AdminDashboard rendering');
  const totalMembers = members.length;
  const activeTasks = tasks.filter(t => t.status === "In Progress").length;
  const completedTasks = tasks.filter(t => t.status === "Completed").length;
  const totalReports = reports.length;
  const totalTokensDistributed = 15650;
  const activeMembersOnline = members.filter(m => m.status === "Active").length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-400 mt-2">Manage and monitor your platform</p>
      </div>

      {/* KEY METRICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatBox
          icon={Users}
          label="Total Members"
          value={totalMembers}
          color="bg-blue-600/20 text-blue-400"
        />
        <StatBox
          icon={CheckSquare}
          label="Active Tasks"
          value={activeTasks}
          color="bg-purple-600/20 text-purple-400"
        />
        <StatBox
          icon={CheckSquare}
          label="Completed Tasks"
          value={completedTasks}
          color="bg-green-600/20 text-green-400"
        />
        <StatBox
          icon={Wallet}
          label="Tokens Distributed"
          value={`${totalTokensDistributed.toLocaleString()}`}
          color="bg-yellow-600/20 text-yellow-400"
        />
        <StatBox
          icon={TrendingUp}
          label="Online Members"
          value={activeMembersOnline}
          color="bg-emerald-600/20 text-emerald-400"
        />
        <StatBox
          icon={BarChart3}
          label="Total Reports"
          value={totalReports}
          color="bg-cyan-600/20 text-cyan-400"
        />
      </div>

      {/* RECENT ACTIVITY */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* RECENT TASKS */}
        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Tasks</h2>
          <div className="space-y-3">
            {tasks.slice(0, 4).map((task) => (
              <div key={task.id} className="flex items-center justify-between p-3 bg-[#1a1a2e] rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-sm">{task.title}</p>
                  <p className="text-xs text-gray-500">{task.category}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  task.status === "Completed" ? "bg-green-600/20 text-green-400" :
                  task.status === "In Progress" ? "bg-blue-600/20 text-blue-400" :
                  "bg-yellow-600/20 text-yellow-400"
                }`}>
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RECENT MEMBERS */}
        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Members</h2>
          <div className="space-y-3">
            {members.slice(0, 4).map((member) => (
              <div key={member.id} className="flex items-center justify-between p-3 bg-[#1a1a2e] rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-sm">{member.name}</p>
                  <p className="text-xs text-gray-500">{member.role}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  member.status === "Active" ? "bg-green-600/20 text-green-400" :
                  member.status === "Present" ? "bg-blue-600/20 text-blue-400" :
                  "bg-red-600/20 text-red-400"
                }`}>
                  {member.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PLATFORM HEALTH */}
      <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <AlertCircle className="text-yellow-500" />
          <h2 className="text-xl font-semibold">Platform Health & Metrics</h2>
        </div>

        <div className="space-y-4">
          {analyticsData.map((metric, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium">{metric.category}</p>
                <p className="text-sm text-gray-400">{metric.current}%</p>
              </div>
              <div className="w-full h-2 bg-[#26263a] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                  style={{ width: `${metric.current}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
