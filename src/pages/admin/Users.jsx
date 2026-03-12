import { Users, Trash2, Edit, MessageSquare, Ban, CheckCircle, Eye, X } from "lucide-react";
import { members } from "../../mock/membersData";
import { useState, Fragment } from "react";

export default function UsersManagement() {
  const [filter, setFilter] = useState("all");
   // Add Member Modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: "Member",
    status: "Active",
  });
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewingMember, setViewingMember] = useState(null);

  const filteredMembers = filter === "all" 
    ? members 
    : members.filter(m => m.status.toLowerCase() === filter.toLowerCase());

  const handleAction = (action, member) => {
    if (action === "View") {
      setViewingMember(member);
      setShowViewModal(true);
    } else {
      alert(`${action} user: ${member.name}`);
    }
  };

  const handleAddMember = () => {
    setShowAddModal(true);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Adding member: ${newMember.name}`);
    setShowAddModal(false);
    // Reset form
    setNewMember({
      name: "",
      email: "",
      role: "Member",
      status: "Active",
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Users Management</h1>
        <p className="text-gray-400 mt-2">Manage all community members</p>
      </div>

      {/* FILTERS & ACTIONS */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex flex-wrap gap-2">
          {["all", "active", "present", "absent"].map((f) => (
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
        <button onClick={handleAddMember} className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition font-medium w-full sm:w-auto sm:ml-auto">
          Add Member
        </button>
     </div>

      {/* USERS TABLE */}
      <div className="bg-[#151521] border border-[#26263a] rounded-xl overflow-hidden">

        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="w-full">
            <thead className="bg-[#1a1a2e] border-b border-[#26263a]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Role</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Tasks</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Tokens</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member) => (
                <tr
                  key={member.id}
                  className="border-b border-[#26263a] hover:bg-[#1a1a2e]/50 transition"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
                        <span className="font-semibold text-sm">{member.name[0]}</span>
                      </div>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-xs text-gray-500">{member.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-400">{member.role}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                      member.status === "Active" ? "bg-green-600/20 text-green-400 border border-green-600/30" :
                      member.status === "Present" ? "bg-blue-600/20 text-blue-400 border border-blue-600/30" :
                      "bg-red-600/20 text-red-400 border border-red-600/30"
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium">{member.tasksCompleted}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium">{member.tokensEarned} HUB</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleAction("View", member)}
                        className="p-2 hover:bg-[#26263a] rounded-lg transition"
                        title="View"
                      >
                        <Eye size={16} className="text-gray-400" />
                      </button>
                      <button 
                        onClick={() => handleAction("Edit", member)}
                        className="p-2 hover:bg-[#26263a] rounded-lg transition"
                        title="Edit"
                      >
                        <Edit size={16} className="text-blue-400" />
                      </button>
                      <button 
                        onClick={() => handleAction("Message", member)}
                        className="p-2 hover:bg-[#26263a] rounded-lg transition"
                        title="Message"
                      >
                        <MessageSquare size={16} className="text-purple-400" />
                      </button>
                      <button 
                        onClick={() => handleAction("Ban", member)}
                        className="p-2 hover:bg-[#26263a] rounded-lg transition"
                        title="Ban User"
                      >
                        <Ban size={16} className="text-red-400" />
                      </button>
                      <button 
                        onClick={() => handleAction("Delete", member)}
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
          {filteredMembers.map((member) => (
            <div key={member.id} className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <span className="font-semibold text-sm">{member.name[0]}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium">{member.name}</p>
                  <p className="text-xs text-gray-500">{member.email}</p>
                </div>
                <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                  member.status === "Active" ? "bg-green-600/20 text-green-400 border border-green-600/30" :
                  member.status === "Present" ? "bg-blue-600/20 text-blue-400 border border-blue-600/30" :
                  "bg-red-600/20 text-red-400 border border-red-600/30"
                }`}>
                  {member.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                <div>
                  <span className="text-gray-400">Role:</span> {member.role}
                </div>
                <div>
                  <span className="text-gray-400">Tasks:</span> {member.tasksCompleted}
                </div>
                <div>
                  <span className="text-gray-400">Tokens:</span> {member.tokensEarned} HUB
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAction("View", member)}
                  className="flex-1 p-2 bg-gray-600/20 text-gray-300 rounded-lg text-sm font-medium"
                >
                  View
                </button>
                <button 
                  onClick={() => handleAction("Edit", member)}
                  className="flex-1 p-2 bg-blue-600/20 text-blue-400 rounded-lg text-sm font-medium"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleAction("Message", member)}
                  className="flex-1 p-2 bg-purple-600/20 text-purple-400 rounded-lg text-sm font-medium"
                >
                  Message
                </button>
                <button 
                  onClick={() => handleAction("Ban", member)}
                  className="flex-1 p-2 bg-red-600/20 text-red-400 rounded-lg text-sm font-medium"
                >
                  Ban
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* SUMMARY STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <div className="flex items-center gap-3">
            <Users className="text-blue-500" size={24} />
            <div>
              <p className="text-gray-400 text-sm">Total Members</p>
              <p className="text-2xl font-bold">{members.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-500" size={24} />
            <div>
              <p className="text-gray-400 text-sm">Active</p>
              <p className="text-2xl font-bold">{members.filter(m => m.status === "Active").length}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-yellow-600/20 flex items-center justify-center text-yellow-400 text-sm">
              •
            </div>
            <div>
              <p className="text-gray-400 text-sm">Avg Tasks/Member</p>
              <p className="text-2xl font-bold">{Math.round(members.reduce((sum, m) => sum + m.tasksCompleted, 0) / members.length)}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400 text-sm">
              $
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Tokens Paid</p>
              <p className="text-2xl font-bold">{members.reduce((sum, m) => sum + m.tokensEarned, 0).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    
    {/* Add Member Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-[#151521] border border-[#26263a] rounded-xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Add New Member</h2>
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newMember.name}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-500 outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={newMember.email}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-500 outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Role</label>
                <select
                  name="role"
                  value={newMember.role}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-500 outline-none transition"
                >
                  <option>Member</option>
                  <option>Admin</option>
                  <option>Moderator</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
                <select
                  name="status"
                  value={newMember.status}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-500 outline-none transition"
                >
                  <option>Active</option>
                  <option>Present</option>
                  <option>Absent</option>
                </select>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg text-gray-300 border border-[#26263a] hover:border-purple-500/50 transition"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Member Modal */}
      {showViewModal && viewingMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#151521] border border-[#26263a] rounded-xl p-8 max-w-lg w-full">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center text-2xl font-semibold">
                  {viewingMember.name[0]}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{viewingMember.name}</h2>
                  <p className="text-gray-400">{viewingMember.email}</p>
                </div>
              </div>
              <button onClick={() => setShowViewModal(false)} className="p-2 rounded-full hover:bg-[#26263a]">
                <X className="text-gray-400" size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                <div><span className="text-gray-500">Role:</span> <span className="text-gray-200">{viewingMember.role}</span></div>
                <div><span className="text-gray-500">Join Date:</span> <span className="text-gray-200">{viewingMember.joinDate}</span></div>
                <div>
                  <span className="text-gray-500">Status:</span>
                  <span className={`ml-2 px-2 py-1 rounded-lg text-xs font-medium ${
                    viewingMember.status === "Active" ? "bg-green-600/20 text-green-400 border border-green-600/30" :
                    viewingMember.status === "Present" ? "bg-blue-600/20 text-blue-400 border border-blue-600/30" :
                    "bg-red-600/20 text-red-400 border border-red-600/30"
                  }`}>
                    {viewingMember.status}
                  </span>
                </div>
                <div><span className="text-gray-500">Tasks Completed:</span> <span className="font-semibold text-purple-400">{viewingMember.tasksCompleted}</span></div>
                <div><span className="text-gray-500">Tokens Earned:</span> <span className="font-semibold text-purple-400">{viewingMember.tokensEarned} HUB</span></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
