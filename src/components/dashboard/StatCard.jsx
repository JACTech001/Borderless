import {
  Clock,
  CheckCircle,
  Coins
} from "../../icons";

import React from "react"

export default function StatCard({ title, value, Icon }) {
  return (
    <div className="bg-[#151521] border border-[#26263a] rounded-xl p-5 flex items-center justify-between">

      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <h2 className="text-2xl font-bold mt-2">{value}</h2>
      </div>

      {Icon && (
        <div className="bg-[#1e293b] p-3 rounded-lg">
          <Icon size={22} className="text-purple-500" />
        </div>
      )}

    </div>
  )
}