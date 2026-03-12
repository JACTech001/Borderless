import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

import { Calendar } from "../../icons"

const data = [
  { day: "Mon", hours: 6 },
  { day: "Tue", hours: 7 },
  { day: "Wed", hours: 8 },
  { day: "Thu", hours: 5 },
  { day: "Fri", hours: 6 },
]

export default function AttendanceChart() {
  return (
    <div className="bg-[#151521] border border-[#26263a] rounded-xl p-5">

      <div className="flex items-center gap-2 mb-4">
        <Calendar size={20} className="text-purple-500" />
        <h3 className="text-lg font-semibold">
          Weekly Attendance
        </h3>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="day" stroke="#aaa" />
          <Tooltip />
          <Bar dataKey="hours" fill="#7c3aed" radius={[4,4,0,0]} />
        </BarChart>
      </ResponsiveContainer>

    </div>
  )
}