import { Timer } from "lucide-react";
import SessionTracker from "../../components/layout/SessionTracker";

export default function Attendance() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
          <Timer size={30} />
          Session Activity
        </h1>
        <p className="text-gray-400">
          This page tracks the duration of your current session on the platform.
        </p>
      </div>
      <SessionTracker />
    </div>
  );
}