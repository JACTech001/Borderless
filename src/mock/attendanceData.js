export const today = new Date().toISOString().split('T')[0];

const yesterdayDate = new Date();
yesterdayDate.setDate(yesterdayDate.getDate() - 1);
export const yesterday = yesterdayDate.toISOString().split('T')[0];

const dayBeforeDate = new Date();
dayBeforeDate.setDate(dayBeforeDate.getDate() - 2);
export const dayBefore = dayBeforeDate.toISOString().split('T')[0];

// Mock data for admin attendance sheet
export const initialMockAttendance = {
  [today]: [
    { id: 1, date: today, name: 'Alice Johnson', email: 'alice@example.com', phone: '111-222-3333', sex: 'Female', checkInTime: new Date(new Date().setHours(9, 5, 0)).toISOString() },
    { id: 2, date: today, name: 'Bob Williams', email: 'bob@example.com', phone: '444-555-6666', sex: 'Male', checkInTime: new Date(new Date().setHours(9, 15, 0)).toISOString() },
    { id: 7, date: today, name: 'Grace Lee', email: 'grace@example.com', phone: '321-654-0987', sex: 'Female', checkInTime: new Date(new Date().setHours(9, 25, 0)).toISOString() },
  ],
  [yesterday]: [
    { id: 3, date: yesterday, name: 'Charlie Brown', email: 'charlie@example.com', phone: '777-888-9999', sex: 'Male', checkInTime: new Date(new Date(yesterday).setHours(9, 2, 0)).toISOString() },
    { id: 4, date: yesterday, name: 'Diana Prince', email: 'diana@example.com', phone: '123-456-7890', sex: 'Female', checkInTime: new Date(new Date(yesterday).setHours(10, 30, 0)).toISOString() },
  ],
  [dayBefore]: [
    { id: 5, date: dayBefore, name: 'Eve Adams', email: 'eve@example.com', phone: '123-123-1234', sex: 'Female', checkInTime: new Date(new Date(dayBefore).setHours(8, 58, 0)).toISOString() },
    { id: 6, date: dayBefore, name: 'Frank Miller', email: 'frank@example.com', phone: '456-456-4567', sex: 'Male', checkInTime: new Date(new Date(dayBefore).setHours(9, 45, 0)).toISOString() },
  ]
};