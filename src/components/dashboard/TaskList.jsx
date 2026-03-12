import { tasks } from "../../mock/dashboardData"
import {
  ClipboardList,
  AlertCircle
} from "../../icons"

export default function TaskList() {
  return (
    <div className="bg-[#151521] border border-[#26263a] rounded-xl p-5">

      <div className="flex items-center gap-2 mb-4">
        <ClipboardList size={20} className="text-purple-500" />
        <h3 className="text-lg font-semibold">My Assigned Tasks</h3>
      </div>

      <div className="space-y-4">

        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-center border-b border-[#26263a] pb-3"
          >

            <div>
              <p className="font-medium">{task.title}</p>

              <p className="text-xs text-gray-400 flex items-center gap-1">
                <AlertCircle size={14} />
                {task.category} • {task.deadline}
              </p>
            </div>

            <span className="text-xs bg-purple-600 px-2 py-1 rounded">
              {task.priority}
            </span>

          </div>
        ))}

      </div>

    </div>
  )
}