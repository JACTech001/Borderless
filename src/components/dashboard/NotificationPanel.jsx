import { useState } from "react"
import { notifications } from "../../mock/dashboardData"
import { Bell } from "../../icons"

export default function NotificationPanel() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#151521] border border-[#26263a] rounded-xl p-5 w-full hover:border-purple-500/50 transition-colors"
      >
        <Bell size={20} className="text-purple-500" />
        <h3 className="text-lg font-semibold">
          Notifications
        </h3>
        <span className="ml-auto text-xs text-gray-400">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#151521] border border-[#26263a] rounded-xl p-5 space-y-3 z-50 shadow-lg">

          {notifications.map((note) => (
            <div key={note.id} className="text-sm text-gray-300 pb-3 border-b border-[#26263a] last:border-b-0">

              <p>{note.message}</p>

              <span className="text-xs text-gray-500">
                {note.time}
              </span>

            </div>
          ))}

        </div>
      )}

    </div>
  )
}