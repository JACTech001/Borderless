import { Clock, LogIn, LogOut, CheckCircle } from "lucide-react";
import { attendanceHistory } from "../../mock/attendanceData";

export default function Attendance() {

  const handleSignIn = () => {
    alert("Signed in at " + new Date().toLocaleTimeString());
  };

  const handleSignOut = () => {
    alert("Signed out at " + new Date().toLocaleTimeString());
  };

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">Attendance</h1>

      {/* ACTION BUTTONS */}

      <div className="flex flex-col sm:flex-row gap-4">

        <button 
          onClick={handleSignIn}
          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg transition font-medium"
        >
          <LogIn size={18}/>
          Sign In
        </button>

        <button 
          onClick={handleSignOut}
          className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-3 rounded-lg transition font-medium"
        >
          <LogOut size={18}/>
          Sign Out
        </button>

      </div>

      {/* ATTENDANCE SUMMARY */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-500" size={24} />
            <div>
              <p className="text-gray-400 text-sm">This Week</p>
              <p className="text-2xl font-bold">4/5 Days</p>
            </div>
          </div>
        </div>

        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <div className="flex items-center gap-3">
            <Clock className="text-blue-500" size={24} />
            <div>
              <p className="text-gray-400 text-sm">Hours Logged</p>
              <p className="text-2xl font-bold">41h 36m</p>
            </div>
          </div>
        </div>

        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <div className="flex items-center gap-3">
            <LogIn className="text-purple-500" size={24} />
            <div>
              <p className="text-gray-400 text-sm">Attendance Rate</p>
              <p className="text-2xl font-bold">80%</p>
            </div>
          </div>
        </div>
      </div>

      {/* ATTENDANCE HISTORY TABLE */}
      <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Attendance History</h2>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-[#26263a] text-gray-400">
              <tr>
                <th className="pb-3">Day</th>
                <th className="pb-3">Date</th>
                <th className="pb-3">Sign In</th>
                <th className="pb-3">Sign Out</th>
                <th className="pb-3">Hours</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {attendanceHistory.map((record) => (
                <tr key={record.id} className="border-b border-[#26263a] hover:bg-[#1a1a2e]/50 transition">
                  <td className="py-4 font-medium">{record.day}</td>
                  <td className="py-4 text-gray-400">{record.date}</td>
                  <td className="py-4 text-green-400">{record.signIn}</td>
                  <td className="py-4 text-red-400">{record.signOut}</td>
                  <td className="py-4">{record.hours}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                      record.status === "Present" ? "bg-green-600/20 text-green-400 border border-green-600/30" :
                      record.status === "Late" ? "bg-yellow-600/20 text-yellow-400 border border-yellow-600/30" :
                      "bg-gray-600/20 text-gray-400 border border-gray-600/30"
                    }`}>
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {attendanceHistory.map((record) => (
            <div key={record.id} className="bg-[#1a1a2e] border border-[#26263a] rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{record.day}, {record.date}</span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  record.status === "Present" ? "bg-green-600/20 text-green-400 border border-green-600/30" :
                  record.status === "Late" ? "bg-yellow-600/20 text-yellow-400 border border-yellow-600/30" :
                  "bg-gray-600/20 text-gray-400 border border-gray-600/30"
                }`}>
                  {record.status}
                </span>
              </div>
              <div className="text-sm text-gray-400 space-y-1">
                <div>Sign In: <span className="text-green-400">{record.signIn}</span></div>
                <div>Sign Out: <span className="text-red-400">{record.signOut}</span></div>
                <div>Hours: {record.hours}</div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}