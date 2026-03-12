import { Wallet, Coins, Copy, Send } from "lucide-react";
import { walletData, transactions, tokenStats } from "../../mock/walletData";

export default function WalletPage() {

  const copyAddress = () => {
    navigator.clipboard.writeText(walletData.walletAddress);
    alert("Address copied to clipboard!");
  };

  return (

    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">Wallet</h1>

      {/* BALANCE CARD */}

      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-600/30 rounded-xl p-8">

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Coins size={32} className="text-purple-500"/>
            <h2 className="text-2xl font-semibold">
              HUB Token Balance
            </h2>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition flex items-center gap-2">
            <Send size={16} />
            Send
          </button>
        </div>

        <div className="space-y-2 mb-6">
          <p className="text-4xl font-bold">{walletData.balance} HUB</p>
          <p className="text-gray-400">Total Earned: {walletData.totalEarned} HUB</p>
        </div>

        <div className="bg-[#151521]/50 border border-[#26263a] rounded-lg p-4">
          <p className="text-xs text-gray-400 mb-2">Wallet Address</p>
          <div className="flex items-center justify-between">
            <p className="font-mono text-sm">{walletData.walletAddress}</p>
            <button 
              onClick={copyAddress}
              className="bg-[#26263a] hover:bg-[#2a2a3a] p-2 rounded transition"
            >
              <Copy size={16} />
            </button>
          </div>
        </div>

      </div>

      {/* EARNING STATS */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <p className="text-gray-400 text-sm mb-2">Daily Earning</p>
          <p className="text-2xl font-bold">{tokenStats.dailyEarning} HUB</p>
          <p className="text-xs text-green-400 mt-2">↑ Average</p>
        </div>

        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <p className="text-gray-400 text-sm mb-2">Weekly Earning</p>
          <p className="text-2xl font-bold">{tokenStats.weeklyEarning} HUB</p>
          <p className="text-xs text-green-400 mt-2">↑ 12% from last week</p>
        </div>

        <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">
          <p className="text-gray-400 text-sm mb-2">Monthly Earning</p>
          <p className="text-2xl font-bold">{tokenStats.monthlyEarning} HUB</p>
          <p className="text-xs text-green-400 mt-2">↑ On track</p>
        </div>
      </div>

      {/* TRANSACTIONS */}

      <div className="bg-[#151521] border border-[#26263a] rounded-xl p-6">

        <h2 className="font-semibold mb-6 text-lg">Transaction History</h2>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <div className="space-y-2">
            <div className="grid grid-cols-5 gap-4 pb-4 border-b border-[#26263a] text-xs text-gray-400">
              <span>Type</span>
              <span>Description</span>
              <span>Amount</span>
              <span>Date</span>
              <span>Hash</span>
            </div>

            {transactions.map((tx) => (
              <div key={tx.id} className="grid grid-cols-5 gap-4 py-4 border-b border-[#26263a] last:border-b-0 text-sm hover:bg-[#1a1a2e]/50 px-2 rounded transition">
                <span className="font-medium">
                  <span className={`px-2 py-1 rounded text-xs ${
                    tx.type === "Reward" ? "bg-green-600/20 text-green-400" :
                    tx.type === "Attendance" ? "bg-blue-600/20 text-blue-400" :
                    "bg-purple-600/20 text-purple-400"
                  }`}>
                    {tx.type}
                  </span>
                </span>

                <span className="text-gray-400">{tx.description}</span>

                <span className="text-green-400 font-semibold">{tx.amount}</span>

                <span className="text-gray-400">
                  <div>{tx.date}</div>
                  <div className="text-xs">{tx.time}</div>
                </span>

                <span className="text-gray-500 font-mono text-xs truncate hover:text-gray-300 cursor-pointer" title={tx.hash}>
                  {tx.hash.slice(0, 10)}...
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {transactions.map((tx) => (
            <div key={tx.id} className="bg-[#1a1a2e] border border-[#26263a] rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  tx.type === "Reward" ? "bg-green-600/20 text-green-400" :
                  tx.type === "Attendance" ? "bg-blue-600/20 text-blue-400" :
                  "bg-purple-600/20 text-purple-400"
                }`}>
                  {tx.type}
                </span>
                <span className="text-green-400 font-semibold">{tx.amount}</span>
              </div>
              <div className="text-sm text-gray-400 mb-2">{tx.description}</div>
              <div className="text-xs text-gray-500">
                {tx.date} at {tx.time}
              </div>
              <div className="text-xs text-gray-600 font-mono mt-1 truncate" title={tx.hash}>
                {tx.hash.slice(0, 10)}...
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>

  );
}