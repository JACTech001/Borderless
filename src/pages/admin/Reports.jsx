import { DownloadIcon, Eye, Trash2, Filter, FileText, TrendingUp, X } from "lucide-react";
import { reports, analyticsData } from "../../mock/reportsData";
import { useState, Fragment } from "react";

export default function ReportsManagement() {
  const [filter, setFilter] = useState("all");
   // Report Generation options state
  const [reportType, setReportType] = useState("full");
  const [dateRange, setDateRange] = useState("lastMonth");
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewingReport, setViewingReport] = useState(null);

  const filteredReports = filter === "all"
    ? reports
    : reports.filter(r => r.status.toLowerCase () === filter.toLowerCase());

  const handleAction = (action, report) => {
    if (action === "View") {
      setViewingReport(report);
      setShowViewModal(true);
    } else {
      alert(`${action} report: ${report.title}`);
    }
  };

  const handleGenerateReport = (e) => {
    e.preventDefault();
    alert(`Generating ${reportType} report for ${dateRange}...`);
    setShowGenerateModal(false);
  };

  const completedReports = reports.filter(r => r.status === "Completed").length;
  const inProgressReports = reports.filter(r => r.status === "In Progress").length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Reports Management</h1>
        <p className="text-gray-400 mt-2">View, generate, and manage community reports</p>
      </div>

      {/* REPORT STATS */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <div className="flex items-center gap-3">
            <FileText className="text-purple-500" size={24} />
            <div>
              <p className="text-gray-400 text-sm">Total Reports</p>
              <p className="text-2xl font-bold">{reports.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-green-500" size={24} />
            <div>
              <p className="text-gray-400 text-sm">Completed</p>
              <p className="text-2xl font-bold">{completedReports}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <div className="flex items-center gap-3">
            <Filter className="text-blue-500" size={24} />
            <div>
              <p className="text-gray-400 text-sm">In Progress</p>
              <p className="text-2xl font-bold">{inProgressReports}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-cyan-600/20 flex items-center justify-center text-cyan-400 text-sm">
              📈
            </div>
            <div>
              <p className="text-gray-400 text-sm">Avg Metrics</p>
              <p className="text-2xl font-bold">{Math.round(analyticsData.reduce((sum, a) => sum + a.current, 0) / analyticsData.length)}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* FILTERS & ACTIONS */}
      <div className="flex gap-4 items-center flex-wrap">
        {["all", "completed", "in progress"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              filter === f
                ? "bg-purple-600 text-white"
                : "bg-[#151521] border border-[#26263a] text-gray-400 hover:border-purple-500/50"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
        <button
          onClick={() => setShowGenerateModal(true)}
          className="ml-auto bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition font-medium"
        >
          Generate Report
        </button>
      </div>

      {/* REPORTS LIST */}
      <div className="space-y-4">
        {filteredReports.map((report) => (
          <div
            key={report.id}
            className="bg-[#151521] border border-[#26263a] rounded-xl p-6 hover:border-purple-500/50 transition"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="text-purple-500" size={20} />
                  <h3 className="text-lg font-semibold">{report.title}</h3>
                </div>
                <p className="text-sm text-gray-400 mb-3">{report.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-gray-500">Period: <span className="text-gray-300">{report.period}</span></span>
                  <span className="text-gray-500">Generated: <span className="text-gray-300">{report.date}</span></span>
                  <span className={`px-2 py-1 rounded-lg ${
                    report.status === "Completed" 
                      ? "bg-green-600/20 text-green-400 border border-green-600/30"
                      : "bg-blue-600/20 text-blue-400 border border-blue-600/30"
                  }`}>
                    {report.status}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleAction("View", report)}
                  className="p-2 hover:bg-[#26263a] rounded-lg transition"
                  title="View"
                >
                  <Eye size={18} className="text-blue-400" />
                </button>
                <button
                  onClick={() => handleAction("Download", report)}
                  className="p-2 hover:bg-[#26263a] rounded-lg transition"
                  title="Download"
                >
                  <DownloadIcon size={18} className="text-green-400" />
                </button>
                <button
                  onClick={() => handleAction("Delete", report)}
                  className="p-2 hover:bg-[#26263a] rounded-lg transition"
                  title="Delete"
                >
                  <Trash2 size={18} className="text-red-500" />
                </button>
              </div>
            </div>

            {/* METRICS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-[#26263a]">
              {Object.entries(report.metrics).map(([key, value]) => (
                <div key={key}>
                  <p className="text-xs text-gray-500 mb-1">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                  <p className="text-lg font-semibold text-purple-400">
                    {typeof value === "boolean" ? (value ? "✓ Yes" : "✗ No") : value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ANALYTICS OVERVIEW */}
      <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-6">Platform Performance Metrics</h2>

        <div className="space-y-4">
          {analyticsData.map((metric, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium">{metric.category}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Current: {metric.current}%</span>
                  <span className={`text-sm font-medium ${metric.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                    Previous: {metric.previous}%
                  </span>
                </div>
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

      {/* Generate Report Modal */}
      {showGenerateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-[#151521] border border-[#26263a] rounded-xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Generate New Report</h2>
            <form className="space-y-4" onSubmit={handleGenerateReport}>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Report Type</label>
                <select
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                  className="w-full p-2 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-500 outline-none transition"
                >
                  <option value="full">Full Report</option>
                  <option value="summary">Summary</option>
                  <option value="tasks">Tasks Only</option>
                  <option value="members">Members Only</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Date Range</label>
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="w-full p-2 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-500 outline-none transition"
                >
                  <option value="lastWeek">Last 7 Days</option>
                  <option value="lastMonth">Last 30 Days</option>
                  <option value="lastQuarter">Last Quarter</option>
                  <option value="allTime">All Time</option>
                </select>
              </div>
              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg text-gray-300 border border-[#26263a] hover:border-purple-500/50 transition"
                  onClick={() => setShowGenerateModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
                >
                  Generate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Report Modal */}
      {showViewModal && viewingReport && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#151521] border border-[#26263a] rounded-xl p-8 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{viewingReport.title}</h2>
              <button onClick={() => setShowViewModal(false)} className="p-2 rounded-full hover:bg-[#26263a]">
                <X className="text-gray-400" size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <p className="text-gray-400">{viewingReport.description || 'No description available.'}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                <div><span className="text-gray-500">Period:</span> <span className="text-gray-200">{viewingReport.period}</span></div>
                <div><span className="text-gray-500">Generated:</span> <span className="text-gray-200">{viewingReport.date}</span></div>
                <div>
                  <span className="text-gray-500">Status:</span>
                  <span className={`ml-2 px-2 py-1 rounded-lg text-xs font-medium ${
                    viewingReport.status === "Completed" 
                      ? "bg-green-600/20 text-green-400 border border-green-600/30"
                      : "bg-blue-600/20 text-blue-400 border border-blue-600/30"
                  }`}>
                    {viewingReport.status}
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-[#26263a]">
                <h4 className="font-semibold mb-2">Metrics</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {Object.entries(viewingReport.metrics).map(([key, value]) => (
                    <div key={key} className="bg-[#1a1a2e] p-3 rounded-lg">
                      <p className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                      <p className="text-lg font-bold text-purple-400">{typeof value === "boolean" ? (value ? "✓ Yes" : "✗ No") : value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
