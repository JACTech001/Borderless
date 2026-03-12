import { BarChart3, TrendingUp, Users, Zap, Calendar, Activity } from "lucide-react";
import { useState } from "react";
import { members } from "../../mock/membersData";
import { tasks } from "../../mock/tasksData";

const MetricCard = ({ icon, label, value, change, color }) => {
  const Icon = icon;
  return (
    <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6 hover:border-purple-500/50 transition">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm mb-2">{label}</p>
          <p className="text-3xl font-bold">{value}</p>
          {change && (
            <p className={`text-sm mt-2 ${change > 0 ? "text-green-400" : "text-red-400"}`}>
              {change > 0 ? "+" : ""}{change}% from last week
            </p>
          )}
        </div>
        <Icon className={`${color} text-2xl`} />
      </div>
    </div>
  );
};

const ChartBar = ({ label, value, maxValue, color }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span>{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
    <div className="w-full bg-[#26263a] rounded-full h-2">
      <div
        className={`h-2 rounded-full ${color}`}
        style={{ width: `${(value / maxValue) * 100}%` }}
      />
    </div>
  </div>
);

export default function AdminAnalytics() {
  const [timeRange, setTimeRange] = useState("week");

  // Analytics calculations
  const activeMembers = members.filter(m => m.status === "Active").length;
  const completedTasks = tasks.filter(t => t.status === "Completed").length;
  const totalTokensDistributed = members.reduce((sum, m) => sum + (m.tokens || 0), 0);
  const avgTokensPerMember = Math.round(totalTokensDistributed / members.length);

  // Growth metrics
  const memberGrowth = 12.5;
  const taskGrowth = 8.3;
  const tokenGrowth = 15.8;

  // Activity data for chart
  const activityData = [
    { day: "Mon", tasks: 12, members: 8, reports: 4 },
    { day: "Tue", tasks: 14, members: 10, reports: 5 },
    { day: "Wed", tasks: 18, members: 12, reports: 6 },
    { day: "Thu", tasks: 16, members: 9, reports: 5 },
    { day: "Fri", tasks: 22, members: 15, reports: 8 },
    { day: "Sat", tasks: 10, members: 6, reports: 3 },
    { day: "Sun", tasks: 8, members: 5, reports: 2 },
  ];

  // Member stats
  const membersByRole = {
    "Premium": members.filter(m => m.role === "Premium").length,
    "Standard": members.filter(m => m.role === "Standard").length,
    "Basic": members.filter(m => m.role === "Basic").length,
    "Moderator": members.filter(m => m.role === "Moderator").length,
  };

  // Top performers
  const topMembers = members
    .sort((a, b) => (b.tokens || 0) - (a.tokens || 0))
    .slice(0, 5);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Analytics</h1>
          <p className="text-gray-400 mt-2">Platform insights and performance metrics</p>
        </div>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="bg-[#1a1a2e] border border-[#26263a] rounded-lg px-4 py-2 outline-none focus:border-purple-600 transition"
        >
          <option value="day">Last 24 Hours</option>
          <option value="week">Last 7 Days</option>
          <option value="month">Last 30 Days</option>
          <option value="year">Last Year</option>
        </select>
      </div>

      {/* KEY METRICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          icon={Users}
          label="Active Members"
          value={activeMembers}
          change={memberGrowth}
          color="text-blue-500"
        />
        <MetricCard
          icon={Activity}
          label="Completed Tasks"
          value={completedTasks}
          change={taskGrowth}
          color="text-green-500"
        />
        <MetricCard
          icon={Zap}
          label="Total Tokens Distributed"
          value={totalTokensDistributed}
          change={tokenGrowth}
          color="text-yellow-500"
        />
        <MetricCard
          icon={TrendingUp}
          label="Avg Tokens/Member"
          value={avgTokensPerMember}
          change={3.2}
          color="text-purple-500"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* WEEKLY ACTIVITY CHART */}
        <div className="lg:col-span-2 bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <BarChart3 className="text-purple-500" />
            Weekly Activity
          </h2>

          <div className="space-y-6">
            {activityData.map((item) => (
              <div key={item.day}>
                <p className="text-sm font-medium mb-2">{item.day}</p>
                <div className="space-y-2">
                  <ChartBar
                    label="Tasks Created"
                    value={item.tasks}
                    maxValue={25}
                    color="bg-blue-500"
                  />
                  <ChartBar
                    label="New Members"
                    value={item.members}
                    maxValue={20}
                    color="bg-green-500"
                  />
                  <ChartBar
                    label="Reports"
                    value={item.reports}
                    maxValue={10}
                    color="bg-orange-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MEMBER DISTRIBUTION */}
        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Member Distribution</h2>

          <div className="space-y-4">
            {Object.entries(membersByRole).map(([role, count]) => (
              <div key={role}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium">{role}</p>
                  <p className="font-semibold">{count}</p>
                </div>
                <div className="w-full bg-[#26263a] rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      role === "Premium" ? "bg-purple-600" :
                      role === "Standard" ? "bg-blue-600" :
                      role === "Basic" ? "bg-green-600" :
                      "bg-orange-600"
                    }`}
                    style={{ width: `${(count / members.length) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-[#1a1a2e] rounded-lg">
            <p className="text-sm text-gray-400 mb-2">Total Members</p>
            <p className="text-2xl font-bold">{members.length}</p>
          </div>
        </div>
      </div>

      {/* TOP PERFORMERS */}
      <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-6">Top Performers</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#26263a]">
                <th className="pb-3 font-semibold">Member</th>
                <th className="pb-3 font-semibold">Role</th>
                <th className="pb-3 font-semibold">Tokens Earned</th>
                <th className="pb-3 font-semibold">Tasks Completed</th>
                <th className="pb-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {topMembers.map((member) => (
                <tr key={member.id} className="border-b border-[#26263a] hover:bg-[#1a1a2e]/50 transition">
                  <td className="py-4 font-medium">{member.name}</td>
                  <td className="py-4">
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs font-medium">
                      {member.role}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="font-semibold text-yellow-400">{member.tokens || 0}</span>
                  </td>
                  <td className="py-4">{member.tasksCompleted || 0}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      member.status === "Active" ? "bg-green-600/20 text-green-400" :
                      member.status === "Inactive" ? "bg-red-600/20 text-red-400" :
                      "bg-yellow-600/20 text-yellow-400"
                    }`}>
                      {member.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* INSIGHTS */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-green-600/20 to-green-600/5 border border-green-600/30 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <TrendingUp className="text-green-400 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Positive Trends</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Member engagement ↑ 15.2%</li>
                <li>• Task completion rate ↑ 8.9%</li>
                <li>• Token distribution ↑ 12.4%</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-600/20 to-orange-600/5 border border-orange-600/30 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <Calendar className="text-orange-400 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Recommendations</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Increase task rewards to boost engagement</li>
                <li>• Schedule community events on Fridays</li>
                <li>• Review inactive member profiles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
