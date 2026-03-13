import { useState } from 'react';
import { Calendar, UserPlus, Trash2, FileDown } from 'lucide-react';
import { initialMockAttendance, today } from '../../mock/attendanceData';

// Helper to format time
const formatTime = (isoString) => {
  if (!isoString) return '';
  return new Date(isoString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const formatDateForDisplay = (dateString) => {
  if (!dateString) return '';
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export default function AdminAttendance() {
  const [selectedDate, setSelectedDate] = useState(today);
  // State now holds an array of records per date, initialized with mock data
  const [attendance, setAttendance] = useState(initialMockAttendance);
  // State for the new member form
  const [newMember, setNewMember] = useState({ name: '', email: '', phone: '', sex: '' });

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleNewMemberChange = (e) => {
    const { name, value } = e.target;
    setNewMember(prev => ({ ...prev, [name]: value }));
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    if (!newMember.name) {
      alert("Member name is required.");
      return;
    }

    const newRecord = {
      ...newMember,
      id: Date.now(), // simple unique id for mock
      date: selectedDate,
      checkInTime: new Date().toISOString(),
    };

    setAttendance(prev => {
      const dateRecords = prev[selectedDate] || [];
      return {
        ...prev,
        [selectedDate]: [...dateRecords, newRecord],
      };
    });

    // Reset form
    setNewMember({ name: '', email: '', phone: '', sex: '' });
  };

  const handleDeleteMember = (memberId) => {
    setAttendance(prev => {
      const dateRecords = prev[selectedDate] || [];
      return {
        ...prev,
        [selectedDate]: dateRecords.filter(member => member.id !== memberId),
      };
    });
  };

  const handleExportAll = () => {
    const allRecords = Object.values(attendance).flat();
    if (allRecords.length === 0) {
      alert("No attendance records to export.");
      return;
    }

    const csvRows = [
      "Date,Name,Email,Phone,Sex,Check-in Time"
    ];

    for (const record of allRecords) {
      const values = [
        record.date,
        record.name,
        record.email,
        record.phone,
        record.sex,
        formatTime(record.checkInTime)
      ].map(value => {
        const strValue = String(value || '');
        if (strValue.includes('"') || strValue.includes(',') || strValue.includes('\n')) {
          return `"${strValue.replace(/"/g, '""')}"`;
        }
        return strValue;
      });
      csvRows.push(values.join(','));
    }

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });

    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `full-attendance-report.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleExport = () => {
    if (dailyRecords.length === 0) {
      alert("No attendance records to export for this date.");
      return;
    }

    const csvRows = [
      "Date,Name,Email,Phone,Sex,Check-in Time"
    ];

    for (const record of dailyRecords) {
      const values = [
        record.date,
        record.name,
        record.email,
        record.phone,
        record.sex,
        formatTime(record.checkInTime)
      ].map(value => {
        const strValue = String(value || '');
        if (strValue.includes('"') || strValue.includes(',') || strValue.includes('\n')) {
          return `"${strValue.replace(/"/g, '""')}"`;
        }
        return strValue;
      });
      csvRows.push(values.join(','));
    }

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });

    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `attendance-${selectedDate}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const dailyRecords = attendance[selectedDate] || [];
  const hasAnyRecords = Object.values(attendance).flat().length > 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
            <Calendar size={28} /> Member Attendance
          </h1>
          <p className="text-gray-400 mt-1">Viewing records for {formatDateForDisplay(selectedDate)}</p>
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="attendance-date" className="font-semibold">Date:</label>
          <input
            type="date"
            id="attendance-date"
            value={selectedDate}
            onChange={handleDateChange}
            className="bg-[#1a1a2e] border border-[#26263a] rounded-md px-3 py-1.5 text-white"
          />
          <button
            onClick={handleExport}
            disabled={dailyRecords.length === 0}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center gap-2 disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            <FileDown size={18} />
            Export for Date
          </button>
          <button
            onClick={handleExportAll}
            disabled={!hasAnyRecords}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center gap-2 disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            <FileDown size={18} />
            Export All
          </button>
        </div>
      </div>

      {/* Form to add new member */}
      <form onSubmit={handleAddMember} className="bg-[#0f0f1a] border border-[#26263a] rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><UserPlus size={22}/> Add New Attendance Record</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          <input type="text" name="name" value={newMember.name} onChange={handleNewMemberChange} placeholder="Full Name" required className="bg-[#1a1a2e] border border-[#26263a] rounded-md px-3 py-2 text-white w-full"/>
          <input type="email" name="email" value={newMember.email} onChange={handleNewMemberChange} placeholder="Email Address" className="bg-[#1a1a2e] border border-[#26263a] rounded-md px-3 py-2 text-white w-full"/>
          <input type="tel" name="phone" value={newMember.phone} onChange={handleNewMemberChange} placeholder="Phone Number" className="bg-[#1a1a2e] border border-[#26263a] rounded-md px-3 py-2 text-white w-full"/>
          <select name="sex" value={newMember.sex} onChange={handleNewMemberChange} className="bg-[#1a1a2e] border border-[#26263a] rounded-md px-3 py-2 text-white w-full">
            <option value="">Select Sex...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <button type="submit" className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-md flex items-center justify-center gap-2 h-full">
            <UserPlus size={18} /> Mark Attendance
          </button>
        </div>
      </form>

      {/* Attendance List */}
      <div className="bg-[#0f0f1a] border border-[#26263a] rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#1a1a2e]">
              <tr>
                <th className="p-4 font-semibold">Date</th>
                <th className="p-4 font-semibold">Name</th>
                <th className="p-4 font-semibold">Email</th>
                <th className="p-4 font-semibold">Phone</th>
                <th className="p-4 font-semibold">Sex</th>
                <th className="p-4 font-semibold">Check-in Time</th>
                <th className="p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dailyRecords.length > 0 ? (
                dailyRecords.map(member => (
                  <tr key={member.id} className="border-t border-[#26263a]">
                    <td className="p-4 text-gray-400">
                      {new Date(member.date.replace(/-/g, '/')).toLocaleDateString()}
                    </td>
                    <td className="p-4 font-medium">{member.name}</td>
                    <td className="p-4 text-gray-400">{member.email}</td>
                    <td className="p-4 text-gray-400">{member.phone}</td>
                    <td className="p-4 text-gray-400">{member.sex}</td>
                    <td className="p-4 text-gray-400">{formatTime(member.checkInTime)}</td>
                    <td className="p-4">
                      <button onClick={() => handleDeleteMember(member.id)} className="text-red-500 hover:text-red-400 p-1" title="Delete Record">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center p-8 text-gray-500">
                    No attendance records for this date.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}