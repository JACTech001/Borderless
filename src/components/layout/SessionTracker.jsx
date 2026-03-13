import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Timer } from 'lucide-react';

const formatDuration = (ms) => {
  if (ms < 0) ms = 0;
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor(ms / (1000 * 60 * 60));
  return [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0'),
  ].join(':');
};

export default function SessionTracker() {
  const { user } = useAuth();
  const [duration, setDuration] = useState(() =>
    user?.loginTime ? Date.now() - user.loginTime : 0
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setDuration(Date.now() - (user?.loginTime || Date.now()));
    }, 1000);

    return () => clearInterval(timer);
  }, [user]);

  if (!user?.loginTime) {
    return null;
  }

  return (
    <div className="bg-[#0f0f1a] border border-[#26263a] rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Timer size={20} /> Session Duration</h3>
      <p className="text-3xl font-mono text-cyan-400">
        {formatDuration(duration)}
      </p>
      <p className="text-xs text-gray-400 mt-1">You have been logged in for this amount of time.</p>
    </div>
  );
}