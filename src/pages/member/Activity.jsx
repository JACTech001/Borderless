import { CheckCircle, LogIn, LogOut, Vote, Award } from "lucide-react";
import { activities } from "../../mock/dashboardData";

const getActivityIcon = (type) => {
  switch(type) {
    case "checkin":
      return <LogIn className="text-green-500" size={18} />;
    case "task":
      return <CheckCircle className="text-blue-500" size={18} />;
    case "vote":
      return <Vote className="text-purple-500" size={18} />;
    case "reward":
      return <Award className="text-yellow-500" size={18} />;
    default:
      return <LogIn className="text-gray-500" size={18} />;
  }
};

export default function Activity() {

  return (

    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">Blockchain Activity</h1>

      {/* ACTIVITY FEED */}
      <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">

        <h2 className="font-semibold mb-6 text-lg">On-Chain Events</h2>

        <div className="space-y-4">

          {activities.map((log) => (

            <div key={log.id} className="flex items-start gap-4 pb-4 border-b border-[#26263a] last:border-b-0 last:pb-0">

              <div className="mt-2">
                {getActivityIcon(log.type)}
              </div>

              <div className="flex-1">
                <p className="font-medium">{log.action}</p>
                <p className="text-xs text-gray-500 mt-1">{log.time}</p>
              </div>

              <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-600/30">
                Verified
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* TRANSACTION STATS */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <div className="flex items-center gap-3">
            <LogIn className="text-green-500" size={24} />
            <div>
              <p className="text-gray-400 text-sm">Check-ins</p>
              <p className="text-2xl font-bold">287</p>
            </div>
          </div>
        </div>

        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-blue-500" size={24} />
            <div>
              <p className="text-gray-400 text-sm">Tasks Completed</p>
              <p className="text-2xl font-bold">45</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}