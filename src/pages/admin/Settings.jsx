import { Settings, Lock, Database, BellIcon, Shield, Key, Save } from "lucide-react";
import { useState } from "react";

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    platformName: "Borderless Tech",
    description: "A community-driven platform for tech collaboration",
    maintenanceMode: false,
    autoBackup: true,
    emailNotifications: true,
    tokenRewardsEnabled: true,
    maxTasksPerMember: 10,
    defaultTokenReward: 25,
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    alert("Settings saved successfully!");
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Admin Settings</h1>
        <p className="text-gray-400 mt-2">Configure platform settings and preferences</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* MAIN SETTINGS */}
        <div className="lg:col-span-2 space-y-6">
          {/* GENERAL SETTINGS */}
          <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Settings className="text-purple-500" />
              <h2 className="text-xl font-semibold">General Settings</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Platform Name</label>
                <input
                  type="text"
                  value={settings.platformName}
                  onChange={(e) => handleChange("platformName", e.target.value)}
                  className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-600 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Platform Description</label>
                <textarea
                  value={settings.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-600 outline-none transition h-24 resize-none"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-[#1a1a2e] rounded-lg">
                <div>
                  <p className="font-medium">Maintenance Mode</p>
                  <p className="text-sm text-gray-500">Disable platform access for maintenance</p>
                </div>
                <button
                  onClick={() => handleChange("maintenanceMode", !settings.maintenanceMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.maintenanceMode ? "bg-red-600" : "bg-gray-600"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.maintenanceMode ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* FEATURE SETTINGS */}
          <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Database className="text-blue-500" />
              <h2 className="text-xl font-semibold">Feature Management</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#1a1a2e] rounded-lg">
                <div>
                  <p className="font-medium">Auto Backup</p>
                  <p className="text-sm text-gray-500">Automatically backup platform data</p>
                </div>
                <button
                  onClick={() => handleChange("autoBackup", !settings.autoBackup)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.autoBackup ? "bg-green-600" : "bg-gray-600"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.autoBackup ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-[#1a1a2e] rounded-lg">
                <div>
                  <p className="font-medium">Token Rewards</p>
                  <p className="text-sm text-gray-500">Enable token reward system</p>
                </div>
                <button
                  onClick={() => handleChange("tokenRewardsEnabled", !settings.tokenRewardsEnabled)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.tokenRewardsEnabled ? "bg-green-600" : "bg-gray-600"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.tokenRewardsEnabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* LIMITS & REWARDS */}
          <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <BellIcon className="text-orange-500" />
              <h2 className="text-xl font-semibold">Limits & Rewards</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Max Tasks Per Member</label>
                <input
                  type="number"
                  value={settings.maxTasksPerMember}
                  onChange={(e) => handleChange("maxTasksPerMember", parseInt(e.target.value))}
                  className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-600 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Default Token Reward</label>
                <input
                  type="number"
                  value={settings.defaultTokenReward}
                  onChange={(e) => handleChange("defaultTokenReward", parseInt(e.target.value))}
                  className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-[#26263a] focus:border-purple-600 outline-none transition"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-[#1a1a2e] rounded-lg">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-gray-500">Send email notifications to admins</p>
                </div>
                <button
                  onClick={() => handleChange("emailNotifications", !settings.emailNotifications)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.emailNotifications ? "bg-green-600" : "bg-gray-600"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.emailNotifications ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
          {/* QUICK ACTIONS */}
          <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>

            <div className="space-y-3">
              <button className="w-full bg-purple-600 hover:bg-purple-700 px-4 py-3 rounded-lg transition font-medium flex items-center gap-2">
                <Save size={18} />
                Save Changes
              </button>

              <button className="w-full bg-[#1a1a2e] hover:bg-[#1e1e32] border border-[#26263a] px-4 py-3 rounded-lg transition font-medium flex items-center gap-2">
                <Database size={18} />
                Backup Now
              </button>

              <button className="w-full bg-[#1a1a2e] hover:bg-[#1e1e32] border border-[#26263a] px-4 py-3 rounded-lg transition font-medium flex items-center gap-2">
                <Shield size={18} />
                Security Audit
              </button>
            </div>
          </div>

          {/* SECURITY */}
          <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Security</h2>

            <div className="space-y-3">
              <button className="w-full bg-[#1a1a2e] hover:bg-[#1e1e32] border border-[#26263a] px-4 py-3 rounded-lg transition font-medium flex items-center gap-2 text-left">
                <Key size={18} className="text-blue-400" />
                Change Password
              </button>

              <button className="w-full bg-[#1a1a2e] hover:bg-[#1e1e32] border border-[#26263a] px-4 py-3 rounded-lg transition font-medium flex items-center gap-2 text-left">
                <Lock size={18} className="text-green-400" />
                2FA Settings
              </button>
            </div>
          </div>

          {/* STATUS */}
          {saved && (
            <div className="bg-green-600/20 border border-green-600/30 rounded-xl p-4">
              <p className="text-green-400 text-sm font-medium text-center">✓ Settings saved successfully!</p>
            </div>
          )}

          <button
            onClick={handleSave}
            className="w-full bg-green-600 hover:bg-green-700 px-6 py-4 rounded-lg transition font-bold text-lg flex items-center justify-center gap-2"
          >
            <Save size={20} />
            Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
}
