import { Settings, Bell, Lock, Eye, ChevronRight } from "lucide-react";
import { userData, userSettings, activityLog } from "../../mock/userData";
import { useState } from "react";

const ToggleSwitch = ({ enabled, onChange }) => {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        enabled ? "bg-purple-600" : "bg-gray-600"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
};

export default function SettingsPage() {

  const [settings, setSettings] = useState(userSettings);
  const [profdata, setProfData] = useState(userData);
  const [activeTab, setActiveTab] = useState("profile");

  const handleSaveProfile = () => {
    alert("Profile changes saved!");
  };

  const handleToggle = (path, value) => {
    const keys = path.split(".");
    const newSettings = { ...settings };
    let current = newSettings;
    
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    setSettings(newSettings);
  };

  return (

    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">Settings</h1>

      {/* TABS */}
      <div className="flex gap-4 border-b border-[#26263a]">
        {["profile", "notifications", "privacy", "security"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 font-medium transition-colors capitalize ${
              activeTab === tab
                ? "border-b-2 border-purple-600 text-purple-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* PROFILE TAB */}
      {activeTab === "profile" && (
        <div className="space-y-6">
          {/* PROFILE INFO */}
          <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6 space-y-4">
            <h2 className="font-semibold text-lg">Profile Information</h2>

            <div className="flex items-center gap-4 pb-6 border-b border-[#26263a]">
              <img 
                src={profdata.avatar} 
                alt={profdata.fullName}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="font-medium">{profdata.fullName}</p>
                <p className="text-sm text-gray-400">{profdata.role}</p>
              </div>
              <button className="ml-auto bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm transition">
                Change Avatar
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  value={profdata.fullName}
                  onChange={(e) => setProfData({...profdata, fullName: e.target.value})}
                  className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-600 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  value={profdata.email}
                  onChange={(e) => setProfData({...profdata, email: e.target.value})}
                  className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-600 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Role</label>
                <input
                  type="text"
                  value={profdata.role}
                  disabled
                  className="w-full p-3 rounded-lg bg-[#1a1a2e]/50 border border-[#26263a] opacity-50"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Location</label>
                <input
                  type="text"
                  value={profdata.location}
                  onChange={(e) => setProfData({...profdata, location: e.target.value})}
                  className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-600 outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Bio</label>
              <textarea
                value={profdata.bio}
                onChange={(e) => setProfData({...profdata, bio: e.target.value})}
                className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-600 outline-none transition h-24 resize-none"
              />
            </div>

            <button 
              onClick={handleSaveProfile}
              className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition font-medium"
            >
              Save Changes
            </button>
          </div>

          {/* USER STATS */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
              <p className="text-gray-400 text-sm mb-2">Join Date</p>
              <p className="text-lg font-medium">{profdata.joinDate}</p>
            </div>
            <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
              <p className="text-gray-400 text-sm mb-2">Wallet Address</p>
              <p className="font-mono text-sm truncate">{profdata.walletAddress}</p>
            </div>
            <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
              <p className="text-gray-400 text-sm mb-2">Tasks Completed</p>
              <p className="text-2xl font-bold">{profdata.tasksCompleted}</p>
            </div>
            <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
              <p className="text-gray-400 text-sm mb-2">Tokens Earned</p>
              <p className="text-2xl font-bold">{profdata.tokensEarned}</p>
            </div>
          </div>
        </div>
      )}

      {/* NOTIFICATIONS TAB */}
      {activeTab === "notifications" && (
        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6 space-y-6">
          <h2 className="font-semibold text-lg">Notification Preferences</h2>

          {Object.entries(settings.notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between pb-4 border-b border-[#26263a] last:border-b-0 last:pb-0">
              <div className="flex items-center gap-3">
                <Bell size={18} className="text-purple-500" />
                <div>
                  <p className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                  <p className="text-xs text-gray-400">Control when you receive notifications</p>
                </div>
              </div>
              <ToggleSwitch 
                enabled={value} 
                onChange={(val) => handleToggle(`notifications.${key}`, val)}
              />
            </div>
          ))}
        </div>
      )}

      {/* PRIVACY TAB */}
      {activeTab === "privacy" && (
        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6 space-y-6">
          <h2 className="font-semibold text-lg">Privacy Settings</h2>

          {Object.entries(settings.privacy).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between pb-4 border-b border-[#26263a] last:border-b-0 last:pb-0">
              <div className="flex items-center gap-3">
                <Eye size={18} className="text-blue-500" />
                <div>
                  <p className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                  <p className="text-xs text-gray-400">Manage your privacy</p>
                </div>
              </div>
              {typeof value === "boolean" ? (
                <ToggleSwitch 
                  enabled={value} 
                  onChange={(val) => handleToggle(`privacy.${key}`, val)}
                />
              ) : (
                <select 
                  value={value}
                  onChange={(e) => handleToggle(`privacy.${key}`, e.target.value)}
                  className="bg-[#1a1a2e] border border-[#26263a] rounded-lg px-3 py-1 text-sm"
                >
                  <option>Public</option>
                  <option>Private</option>
                </select>
              )}
            </div>
          ))}
        </div>
      )}

      {/* SECURITY TAB */}
      {activeTab === "security" && (
        <div className="space-y-6">
          {/* SECURITY SETTINGS */}
          <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6 space-y-6">
            <h2 className="font-semibold text-lg">Security</h2>

            <div className="flex items-center justify-between pb-4 border-b border-[#26263a]">
              <div className="flex items-center gap-3">
                <Lock size={18} className="text-green-500" />
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-xs text-gray-400">Add extra security to your account</p>
                </div>
              </div>
              <ToggleSwitch 
                enabled={settings.security.twoFactorEnabled} 
                onChange={() => handleToggle("security.twoFactorEnabled", !settings.security.twoFactorEnabled)}
              />
            </div>

            <div className="pb-4 border-b border-[#26263a]">
              <p className="font-medium mb-2">Change Password</p>
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm transition">
                Update Password
              </button>
            </div>

            <div>
              <p className="font-medium mb-4">Last Password Change</p>
              <p className="text-gray-400">{settings.security.lastPasswordChange}</p>
            </div>
          </div>

          {/* ACTIVITY LOG */}
          <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
            <h2 className="font-semibold text-lg mb-4">Activity Log</h2>

            <div className="space-y-3">
              {activityLog.map((log) => (
                <div key={log.id} className="flex items-center justify-between pb-3 border-b border-[#26263a] last:border-b-0 last:pb-0">
                  <div>
                    <p className="font-medium">{log.action}</p>
                    <p className="text-xs text-gray-400">{log.device} • {log.ip}</p>
                  </div>
                  <span className="text-sm text-gray-400">{log.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>

  );
}