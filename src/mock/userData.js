export const userData = {
  avatar: "https://i.pravatar.cc/150?u=alex",
  fullName: "Alex Johnson",
  role: "Admin",
  email: "alex.j@example.com",
  location: "San Francisco, CA",
  bio: "Lead Developer and Community Admin at Borderless Tech Hub. Passionate about Web3 and open-source collaboration.",
  joinDate: "2023-01-15",
  walletAddress: "0x8a3B...29f1",
  tasksCompleted: 15,
  tokensEarned: 1250,
};

export const userSettings = {
  notifications: {
    taskAssignments: true,
    eventReminders: true,
    communityAnnouncements: true,
    walletTransactions: false,
  },
  privacy: {
    profileVisibility: "Public",
    showActivityStatus: true,
    allowDirectMessages: true,
  },
  security: {
    twoFactorEnabled: true,
    lastPasswordChange: "2024-06-01",
  },
};

export const activityLog = [
  {
    id: 1,
    action: "Logged In",
    device: "Chrome on macOS",
    ip: "192.168.1.101",
    time: "2 hours ago",
  },
  {
    id: 2,
    action: "Updated Profile",
    device: "Chrome on macOS",
    ip: "192.168.1.101",
    time: "1 day ago",
  },
  {
    id: 3,
    action: "Password Changed",
    device: "iPhone App",
    ip: "73.22.10.5",
    time: "30 days ago",
  },
];