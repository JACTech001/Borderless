import { CheckCircle, Clock, AlertCircle, Trash2, Edit, Plus, Eye, X } from "lucide-react";
import { tasks } from "../../mock/tasksData";
import { useState, Fragment } from "react";

export default function TasksManagement() {
  const [filter, setFilter] = useState("all");
   // Create Task Modal state
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    category: "",
    status: "Pending",
    priority: "Medium",
    progress: 0,
    assignee: "",
    dueDate: "",
  });
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewingTask, setViewingTask] = useState(null);

  const filteredTasks = filter === "all"
    ? tasks
    : tasks.filter(t => t.status.toLowerCase().includes(filter.toLowerCase()));

  const handleAction = (action, task) => {
    if (action === "View") {
      setViewingTask(task);
      setShowViewModal(true);
    } else {
      alert(`${action} task: ${task.title}`);
    }
  };

  const handleCreateTask = () => {
    setShowCreateModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Creating task: ${newTask.title}`);
    setShowCreateModal(false);
    // Reset form
    setNewTask({
      title: "",
      category: "",
      status: "Pending",
      priority: "Medium",
      assignee: "",
      dueDate: "",
    });
  };

  const completedCount = tasks.filter(t => t.status === "Completed").length;
  const inProgressCount = tasks.filter(t => t.status === "In Progress").length;
  const pendingCount = tasks.filter(t => t.status === "Pending").length;

  return (
    <Fragment>
      <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Tasks Management</h1>
        <p className="text-gray-400 mt-2">Monitor and manage all community tasks</p>
      </div>

      {/* TASK STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-500" size={24} />
            <div>
              <p className="text-gray-400 text-sm">Completed</p>
              <p className="text-2xl font-bold">{completedCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <div className="flex items-center gap-3">
            <Clock className="text-blue-500" size={24} />
            <div>
              <p className="text-gray-400 text-sm">In Progress</p>
              <p className="text-2xl font-bold">{inProgressCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <div className="flex items-center gap-3">
            <AlertCircle className="text-yellow-500" size={24} />
            <div>
              <p className="text-gray-400 text-sm">Pending</p>
              <p className="text-2xl font-bold">{pendingCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400 text-sm">
              📊
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Tasks</p>
              <p className="text-2xl font-bold">{tasks.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* FILTERS & ACTIONS */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center flex-wrap">
        <div className="flex flex-wrap gap-2">
          {["all", "completed", "in progress", "pending"].map((f) => (
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
        </div>
        <button onClick={handleCreateTask} className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition font-medium flex items-center gap-2 w-full sm:w-auto sm:ml-auto">
          <Plus size={18} />
          Create Task
        </button>
      </div>

      {/* TASKS TABLE */}
      <div className="bg-[#151521] border border-[#26263a] rounded-xl overflow-hidden">

        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="w-full">
            <thead className="bg-[#1a1a2e] border-b border-[#26263a]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Priority</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Progress</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Assignee</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Due Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-b border-[#26263a] hover:bg-[#1a1a2e]/50 transition"
                >
                  <td className="px-6 py-4">
                    <p className="font-medium">{task.title}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-400">{task.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      task.status === "Completed" ? "bg-green-600/20 text-green-400" :
                      task.status === "In Progress" ? "bg-blue-600/20 text-blue-400" :
                      "bg-yellow-600/20 text-yellow-400"
                    }`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      task.priority === "High" ? "bg-red-600/20 text-red-400" :
                      task.priority === "Medium" ? "bg-yellow-600/20 text-yellow-400" :
                      "bg-green-600/20 text-green-400"
                    }`}>
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
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
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-400">{task.assignee}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-400">{task.dueDate}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleAction("View", task)}
                        className="p-2 hover:bg-[#26263a] rounded-lg transition"
                        title="View"
                      >
                        <Eye size={16} className="text-gray-400" />
                      </button>
                      <button
                        onClick={() => handleAction("Edit", task)}
                        className="p-2 hover:bg-[#26263a] rounded-lg transition"
                        title="Edit"
                      >
                        <Edit size={16} className="text-blue-400" />
                      </button>
                      <button
                        onClick={() => handleAction("Delete", task)}
                        className="p-2 hover:bg-[#26263a] rounded-lg transition"
                        title="Delete"
                      >
                        <Trash2 size={16} className="text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden divide-y divide-[#26263a]">
          {filteredTasks.map((task) => (
            <div key={task.id} className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="font-medium text-white">{task.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{task.category}</p>
                </div>
                <div className="flex gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    task.status === "Completed" ? "bg-green-600/20 text-green-400" :
                    task.status === "In Progress" ? "bg-blue-600/20 text-blue-400" :
                    "bg-yellow-600/20 text-yellow-400"
                  }`}>
                    {task.status}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    task.priority === "High" ? "bg-red-600/20 text-red-400" :
                    task.priority === "Medium" ? "bg-yellow-600/20 text-yellow-400" :
                    "bg-green-600/20 text-green-400"
                  }`}>
                    {task.priority}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                <div>
                  <span className="text-gray-400">Assignee:</span> {task.assignee}
                </div>
                <div>
                  <span className="text-gray-400">Due:</span> {task.dueDate}
                </div>
              </div>
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-400">Progress</span>
                  <span className="text-xs text-gray-400">{task.progress}%</span>
                </div>
                <div className="w-full h-2 bg-[#26263a] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-600 rounded-full"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAction("View", task)}
                  className="flex-1 p-2 bg-gray-600/20 text-gray-300 rounded-lg text-sm font-medium"
                >
                  View
                </button>
                <button
                  onClick={() => handleAction("Edit", task)}
                  className="flex-1 p-2 bg-blue-600/20 text-blue-400 rounded-lg text-sm font-medium"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleAction("Delete", task)}
                  className="flex-1 p-2 bg-red-600/20 text-red-400 rounded-lg text-sm font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
      </div>

    {/* Create Task Modal */}
    {showCreateModal && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Create New Task</h2>
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={newTask.title}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-500 outline-none transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
              <input
                type="text"
                name="category"
                value={newTask.category}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
              <select
                name="status"
                value={newTask.status}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-500 outline-none transition"
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Priority</label>
              <select
                name="priority"
                value={newTask.priority}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-500 outline-none transition"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Assignee</label>
              <input
                type="text"
                name="assignee"
                value={newTask.assignee}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={newTask.dueDate}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-500 outline-none transition"
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="px-4 py-2 rounded-lg text-gray-300 border border-[#26263a] hover:border-purple-500/50 transition"
                onClick={() => setShowCreateModal(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    )}

    {/* View Task Modal */}
    {showViewModal && viewingTask && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-8 max-w-2xl w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{viewingTask.title}</h2>
            <button onClick={() => setShowViewModal(false)} className="p-2 rounded-full hover:bg-[#26263a]">
              <X className="text-gray-400" size={20} />
            </button>
          </div>
          <div className="space-y-4">
            <p className="text-gray-400">{viewingTask.description}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <div><span className="text-gray-500">Assignee:</span> <span className="text-gray-200">{viewingTask.assignee}</span></div>
              <div><span className="text-gray-500">Due Date:</span> <span className="text-gray-200">{viewingTask.dueDate}</span></div>
              <div><span className="text-gray-500">Category:</span> <span className="text-gray-200">{viewingTask.category}</span></div>
              <div>
                <span className="text-gray-500">Status:</span>
                <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
                  viewingTask.status === "Completed" ? "bg-green-600/20 text-green-400" :
                  viewingTask.status === "In Progress" ? "bg-blue-600/20 text-blue-400" :
                  "bg-yellow-600/20 text-yellow-400"
                }`}>
                  {viewingTask.status}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Priority:</span>
                <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
                  viewingTask.priority === "High" ? "bg-red-600/20 text-red-400" :
                  viewingTask.priority === "Medium" ? "bg-yellow-600/20 text-yellow-400" :
                  "bg-green-600/20 text-green-400"
                }`}>
                  {viewingTask.priority}
                </span>
              </div>
            </div>
            <div className="pt-4">
              <span className="text-sm text-gray-400">Progress</span>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-full h-2 bg-[#26263a] rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600 rounded-full" style={{ width: `${viewingTask.progress}%` }}></div>
                </div>
                <span className="text-xs text-gray-400">{viewingTask.progress}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </Fragment>
  );
}
