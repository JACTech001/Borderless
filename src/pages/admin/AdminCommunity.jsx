import { useState } from 'react';
import { socialPlatforms as initialPlatforms } from '../../mock/communityData';
import { Link2, Save, Globe } from 'lucide-react';

export default function AdminCommunity() {
  const [platforms, setPlatforms] = useState(initialPlatforms.filter(p => p.url.startsWith('http')));
  const [isSaved, setIsSaved] = useState(false);

  const handleUrlChange = (id, newUrl) => {
    setPlatforms(currentPlatforms =>
      currentPlatforms.map(p => (p.id === id ? { ...p, url: newUrl } : p))
    );
    setIsSaved(false);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend to be saved.
    // For this mock setup, we'll just log it and show a confirmation message.
    console.log('Saving updated platforms:', platforms);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
    alert('Community links have been updated! (This is a simulation, changes are not persisted)');
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold flex items-center gap-3"><Globe /> Community Settings</h1>
        <p className="text-gray-400 mt-2">Update the links for your community platforms.</p>
      </div>

      <form onSubmit={handleSaveChanges} className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-6">Platform Links</h2>
        <div className="space-y-6">
          {platforms.map(platform => {
            const Icon = platform.icon;
            return (
              <div key={platform.id}>
                <label htmlFor={platform.id} className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <Icon size={18} className="text-gray-400" />
                  {platform.name} URL
                </label>
                <div className="relative">
                  <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />
                  <input
                    id={platform.id}
                    type="url"
                    value={platform.url}
                    onChange={(e) => handleUrlChange(platform.id, e.target.value)}
                    placeholder={`https://...`}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1a1a2e] border border-[#26263a] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-all"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex justify-end items-center gap-4">
          {isSaved && <p className="text-green-400 text-sm">✓ Changes saved successfully!</p>}
          <button type="submit" className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:bg-gray-500">
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}