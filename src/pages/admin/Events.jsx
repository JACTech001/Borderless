import { useState } from "react";
import { Plus, Edit, Trash2, Eye, Calendar, MapPin, Users, X, Link as LinkIcon } from "lucide-react";
import { useEvents } from "../../hooks/useEvents";

const StatBox = ({ label, value, color }) => (
  <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6 hover:border-purple-500/50 transition">
    <p className="text-gray-400 text-sm mb-2">{label}</p>
    <p className="text-3xl font-bold">{value}</p>
    <div className={`w-1 h-1 rounded-full ${color} mt-3`} />
  </div>
);

export default function AdminEvents() {
  const { events, addEvent } = useEvents();
  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewingEvent, setViewingEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    type: "physical",
    location: "",
    url: "",
    category: "Meetup",
    maxAttendees: 100,
  });

  const filteredEvents =
    filter === "all"
      ? events
      : events.filter((e) => e.status.toLowerCase() === filter.toLowerCase());

  const handleAddEvent = () => {
    addEvent(newEvent);
    alert(`Event "${newEvent.title}" created successfully!`);
    setShowModal(false);
    setNewEvent({
      title: "",
      description: "",
      date: "",
      time: "",
      type: "physical",
      location: "",
      url: "",
      category: "Meetup",
      maxAttendees: 100,
    });
  };

  const handleAction = (action, event) => {
    if (action === "View") {
      setViewingEvent(event);
      setShowViewModal(true);
    } else {
      alert(`${action} event: ${event.title}`);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Events Management</h1>
          <p className="text-gray-400 mt-2">Create, manage, and track community events</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition font-medium flex items-center gap-2"
        >
          <Plus size={20} />
          Create Event
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatBox label="Total Events" value={events.length} color="bg-blue-500" />
        <StatBox
          label="Upcoming"
          value={events.filter((e) => e.status === "Upcoming").length}
          color="bg-green-500"
        />
        <StatBox
          label="Past Events"
          value={events.filter((e) => e.status === "Past").length}
          color="bg-yellow-500"
        />
        <StatBox
          label="Total Attendees"
          value={events.reduce((sum, e) => sum + (e.attendees || 0), 0)}
          color="bg-purple-500"
        />
      </div>

      {/* FILTERS */}
      <div className="flex gap-4">
        {["all", "upcoming", "past"].map((f) => (
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

      {/* EVENTS TABLE */}
      <div className="bg-[#151521] border border-[#26263a] rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#1a1a2e] border-b border-[#26263a]">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">Event</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Date & Time</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Location</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Attendees</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((event) => (
              <tr key={event.id} className="border-b border-[#26263a] hover:bg-[#1a1a2e]/50 transition">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium">{event.title}</p>
                    <p className="text-xs text-gray-500">{event.host}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">
                    <p className="text-gray-300">{event.date}</p>
                    <p className="text-xs text-gray-500">{event.time}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {event.type === 'virtual' && event.url ? (
                    <a href={event.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-purple-400 hover:underline">
                      <LinkIcon size={14} />
                      Virtual Event
                    </a>
                  ) : (
                    <p className="text-sm text-gray-300">{event.location}</p>
                  )}
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-medium">
                    {event.attendees}/{event.maxAttendees}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-xs font-medium">
                    {event.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.status === "Upcoming"
                        ? "bg-green-600/20 text-green-400"
                        : "bg-gray-600/20 text-gray-400"
                    }`}
                  >
                    {event.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleAction("View", event)}
                      className="p-2 hover:bg-[#26263a] rounded-lg transition"
                      title="View"
                    >
                      <Eye size={16} className="text-blue-400" />
                    </button>
                    <button
                      onClick={() => handleAction("Edit", event)}
                      className="p-2 hover:bg-[#26263a] rounded-lg transition"
                      title="Edit"
                    >
                      <Edit size={16} className="text-yellow-400" />
                    </button>
                    <button
                      onClick={() => handleAction("Delete", event)}
                      className="p-2 hover:bg-[#26263a] rounded-lg transition"
                      title="Delete"
                    >
                      <Trash2 size={16} className="text-red-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CREATE EVENT MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#151521] border border-[#26263a] rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6">Create New Event</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Event Title</label>
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-600 outline-none transition"
                  placeholder="Enter event title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  value={newEvent.description}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, description: e.target.value })
                  }
                  className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-600 outline-none transition h-24 resize-none"
                  placeholder="Event description"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <input
                    type="text"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-600 outline-none transition"
                    placeholder="e.g., March 15, 2026"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Time</label>
                  <input
                    type="text"
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                    className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-600 outline-none transition"
                    placeholder="e.g., 6:00 PM - 8:00 PM"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Event Type</label>
                <div className="flex gap-4">
                    <button type="button" onClick={() => setNewEvent({ ...newEvent, type: 'physical' })} className={`px-4 py-2 rounded-lg font-medium transition ${newEvent.type === 'physical' ? 'bg-purple-600 text-white' : 'bg-[#1a1a2e] border border-[#26263a]'}`}>Physical</button>
                    <button type="button" onClick={() => setNewEvent({ ...newEvent, type: 'virtual' })} className={`px-4 py-2 rounded-lg font-medium transition ${newEvent.type === 'virtual' ? 'bg-purple-600 text-white' : 'bg-[#1a1a2e] border border-[#26263a]'}`}>Virtual</button>
                </div>
              </div>

              {newEvent.type === 'physical' ? (
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <input
                    type="text"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-600 outline-none transition"
                    placeholder="Enter physical address"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium mb-2">Meeting URL</label>
                  <input
                    type="url"
                    value={newEvent.url}
                    onChange={(e) => setNewEvent({ ...newEvent, url: e.target.value })}
                    className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-600 outline-none transition"
                    placeholder="https://zoom.us/j/..."
                  />
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    value={newEvent.category}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, category: e.target.value })
                    }
                    className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-600 outline-none transition"
                  >
                    <option>Meetup</option>
                    <option>Workshop</option>
                    <option>Webinar</option>
                    <option>Panel</option>
                    <option>Hackathon</option>
                    <option>Networking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Max Attendees</label>
                  <input
                    type="number"
                    value={newEvent.maxAttendees}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, maxAttendees: parseInt(e.target.value) })
                    }
                    className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-600 outline-none transition"
                    placeholder="100"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handleAddEvent}
                className="flex-1 bg-purple-600 hover:bg-purple-700 px-4 py-3 rounded-lg transition font-medium"
              >
                Create Event
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-[#1a1a2e] hover:bg-[#1e1e32] border border-[#26263a] px-4 py-3 rounded-lg transition font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW EVENT MODAL */}
      {showViewModal && viewingEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#151521] border border-[#26263a] rounded-xl p-8 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{viewingEvent.title}</h2>
              <button onClick={() => setShowViewModal(false)} className="p-2 rounded-full hover:bg-[#26263a]">
                <X className="text-gray-400" size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <p className="text-gray-400">{viewingEvent.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm pt-4 border-t border-[#26263a]">
                <div>
                  <div className="flex items-center gap-2 text-gray-500"><Calendar size={14} /> Date & Time</div>
                  <p className="text-gray-200 mt-1">{viewingEvent.date} at {viewingEvent.time}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-500"><MapPin size={14} /> Location</div>
                  {viewingEvent.type === 'virtual' && viewingEvent.url ? (
                    <a href={viewingEvent.url} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline mt-1 block truncate">{viewingEvent.url}</a>
                  ) : (
                    <p className="text-gray-200 mt-1">{viewingEvent.location}</p>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-500"><Users size={14} /> Attendees</div>
                  <p className="text-gray-200 mt-1">{viewingEvent.attendees} / {viewingEvent.maxAttendees}</p>
                </div>
                <div>
                  <div className="text-gray-500 font-medium">Category</div>
                  <p className="text-gray-200 mt-1">{viewingEvent.category}</p>
                </div>
                <div>
                  <div className="text-gray-500 font-medium">Status</div>
                  <span
                    className={`mt-1 inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      viewingEvent.status === "Upcoming"
                        ? "bg-green-600/20 text-green-400"
                        : "bg-gray-600/20 text-gray-400"
                    }`}
                  >
                    {viewingEvent.status}
                  </span>
                </div>
                 <div>
                  <div className="text-gray-500 font-medium">Host</div>
                  <p className="text-gray-200 mt-1">{viewingEvent.host}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
