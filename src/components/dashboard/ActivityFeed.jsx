import { activities } from "../../mock/dashboardData"

import {
  LogIn,
  LogOut,
  CheckCircle,
  Vote
} from "../../icons"

export default function ActivityFeed() {
  return (
    <div className="bg-[#151521] border border-[#26263a] rounded-xl p-5">

      <h3 className="text-lg font-semibold mb-4">
        On-Chain Activity
      </h3>

      <div className="space-y-3">

        {activities.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center text-sm text-gray-300"
          >

            <div className="flex items-center gap-2">

              {item.type === "login" && <LogIn size={16} />}
              {item.type === "logout" && <LogOut size={16} />}
              {item.type === "task" && <CheckCircle size={16} />}
              {item.type === "vote" && <Vote size={16} />}

              <span>{item.action}</span>

            </div>

            <span className="text-gray-500">
              {item.time}
            </span>

          </div>
        ))}

      </div>

    </div>
  )
}