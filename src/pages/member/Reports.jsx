import { Download, Calendar, TrendingUp, BarChart3 } from "lucide-react";
import { reports, analyticsData } from "../../mock/reportsData";

const TrendBadge = ({ trend }) => {
  return (
    <span className={`flex items-center gap-1 text-sm font-medium ${
      trend === "up" ? "text-green-400" : "text-red-400"
    }`}>
      <TrendingUp size={14} />
      {trend === "up" ? "↑" : "↓"} {trend}
    </span>
  );
};

export default function Reports() {

  const handleExport = () => {
    alert("Exporting report...");
  };

  return (

    <div className="p-6 space-y-8">

      {/* HEADER */}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

        <div>

          <h1 className="text-2xl font-bold">Analytics & Reports</h1>

          <p className="text-gray-400 text-sm">
            Community performance insights
          </p>

        </div>

        <button 
          onClick={handleExport}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition font-medium w-full sm:w-auto"
        >

          <Download size={18} />

          Export Report

        </button>

      </div>

      {/* KEY METRICS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="bg-[#151521] border border-[#26263a] p-5 rounded-xl hover:border-purple-500/50 transition">
          <p className="text-gray-400 text-sm">Total Members</p>
          <h2 className="text-2xl font-bold mt-2">245</h2>
          <p className="text-xs text-green-400 mt-2">↑ 12 new this week</p>
        </div>

        <div className="bg-[#151521] border border-[#26263a] p-5 rounded-xl hover:border-purple-500/50 transition">
          <p className="text-gray-400 text-sm">Task Completion</p>
          <h2 className="text-2xl font-bold mt-2">92.3%</h2>
          <p className="text-xs text-green-400 mt-2">↑ 4.2% from last month</p>
        </div>

        <div className="bg-[#151521] border border-[#26263a] p-5 rounded-xl hover:border-purple-500/50 transition">
          <p className="text-gray-400 text-sm">Avg Attendance</p>
          <h2 className="text-2xl font-bold mt-2">87.5%</h2>
          <p className="text-xs text-green-400 mt-2">↑ 2.5% this week</p>
        </div>

        <div className="bg-[#151521] border border-[#26263a] p-5 rounded-xl hover:border-purple-500/50 transition">
          <p className="text-gray-400 text-sm">Tokens Distributed</p>
          <h2 className="text-2xl font-bold mt-2">15.6K</h2>
          <p className="text-xs text-green-400 mt-2">↑ 1.2K this week</p>
        </div>

      </div>

      {/* ANALYTICS DATA */}

      <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <BarChart3 className="text-purple-500" size={24} />
          <h2 className="text-xl font-semibold">Performance Metrics</h2>
        </div>

        <div className="space-y-4">
          {analyticsData.map((metric, index) => (
            <div key={index} className="flex items-center justify-between pb-4 border-b border-[#26263a] last:border-b-0 last:pb-0">
              <div className="flex-1">
                <p className="font-medium">{metric.category}</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-32 h-2 bg-[#26263a] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                      style={{ width: `${metric.current}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-400">{metric.current}%</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">Previous: {metric.previous}%</p>
                <TrendBadge trend={metric.trend} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RECENT REPORTS */}

      <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-6">Recent Reports</h2>

        <div className="space-y-4">
          {reports.map((report) => (
            <div key={report.id} className="border-b border-[#26263a] pb-4 last:border-b-0 last:pb-0 hover:bg-[#1a1a2e]/50 p-3 rounded transition">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-lg">{report.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">Period: {report.period}</p>
                  <div className="flex gap-4 mt-3 text-sm">
                    <span className="text-gray-400">Generated: {report.date}</span>
                    <span className={`px-2 py-1 rounded ${
                      report.status === "Completed" ? "bg-green-600/20 text-green-400" : "bg-blue-600/20 text-blue-400"
                    }`}>
                      {report.status}
                    </span>
                  </div>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition text-sm">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>

  );
}