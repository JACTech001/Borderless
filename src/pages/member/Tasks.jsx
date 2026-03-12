import { tasks } from "../../mock/tasksData"
import { CheckCircle, Clock, AlertCircle } from "lucide-react"

const StatusBadge = ({ status }) => {
  const statusStyles = {
    "Completed": "bg-green-600/20 text-green-400 border border-green-600/30",
    "In Progress": "bg-blue-600/20 text-blue-400 border border-blue-600/30",
    "Pending": "bg-yellow-600/20 text-yellow-400 border border-yellow-600/30",
    "Not Started": "bg-gray-600/20 text-gray-400 border border-gray-600/30"
  }
  
  return (
    <span className={`px-3 py-1 rounded-lg text-xs font-medium ${statusStyles[status] || statusStyles["Pending"]}`}>
      {status}
    </span>
  )
}

const PriorityBadge = ({ priority }) => {
  const priorityStyles = {
    "High": "bg-red-600/20 text-red-400 border border-red-600/30",
    "Medium": "bg-yellow-600/20 text-yellow-400 border border-yellow-600/30",
    "Low": "bg-green-600/20 text-green-400 border border-green-600/30"
  }
  
  return (
    <span className={`px-3 py-1 rounded-lg text-xs font-medium ${priorityStyles[priority] || priorityStyles["Medium"]}`}>
      {priority}
    </span>
  )
}

export default function Tasks() {
  return (
    <div className="space-y-6">

      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold">My Tasks</h1>
        <p className="text-gray-400">
          Manage and track your assigned tasks
        </p>
      </div>

      {/* Tasks Table */}
      <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">

        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="w-full text-left">

            <thead className="border-b border-[#26263a] text-sm text-gray-400">
              <tr>
                <th className="pb-3">Task</th>
                <th className="pb-3">Category</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Priority</th>
                <th className="pb-3">Deadline</th>
                <th className="pb-3">Progress</th>
                <th className="pb-3">Action</th>
              </tr>
            </thead>

            <tbody>

              {tasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-b border-[#26263a] hover:bg-[#1a1a2e]/50 transition"
                >
                  <td className="py-4">
                    <div>
                      <p className="font-medium">{task.title}</p>
                      <p className="text-xs text-gray-500 mt-1">{task.description}</p>
                    </div>
                  </td>

                  <td className="py-4 text-gray-400 text-sm">
                    {task.category}
                  </td>

                  <td className="py-4">
                    <StatusBadge status={task.status} />
                  </td>

                  <td className="py-4">
                    <PriorityBadge priority={task.priority} />
                  </td>

                  <td className="py-4 text-gray-400 text-sm">
                    {task.dueDate}
                  </td>

                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-[#26263a] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-purple-600 rounded-full"
                          style={{ width: `${task.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400">{task.progress}%</span>
                    </div>
                  </td>

                  <td className="py-4">
                    <button className="bg-purple-600 hover:bg-purple-700 px-3 py-1 text-sm rounded transition">
                      Update
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-[#1a1a2e] border border-[#26263a] rounded-lg p-4"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="font-medium text-white">{task.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{task.description}</p>
                </div>
                <StatusBadge status={task.status} />
              </div>

              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-gray-400">{task.category}</span>
                <PriorityBadge priority={task.priority} />
              </div>

              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-gray-400">Due: {task.dueDate}</span>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-2 bg-[#26263a] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-purple-600 rounded-full"
                      style={{ width: `${task.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-400">{task.progress}%</span>
                </div>
              </div>

              <button className="w-full px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm transition">
                Update Task
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Task Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-500" />
            <div>
              <p className="text-gray-400 text-sm">Completed</p>
              <p className="text-2xl font-bold">{tasks.filter(t => t.status === "Completed").length}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <div className="flex items-center gap-3">
            <Clock className="text-blue-500" />
            <div>
              <p className="text-gray-400 text-sm">In Progress</p>
              <p className="text-2xl font-bold">{tasks.filter(t => t.status === "In Progress").length}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <div className="flex items-center gap-3">
            <AlertCircle className="text-yellow-500" />
            <div>
              <p className="text-gray-400 text-sm">Pending</p>
              <p className="text-2xl font-bold">{tasks.filter(t => t.status === "Pending").length}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}