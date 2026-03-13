import { createContext, useContext } from 'react';

export const EventsContext = createContext(null);

export const useEvents = () => {
  const context = useContext(EventsContext);
  if (context === undefined || context === null) {
    throw new Error('useEvents must be used within an EventsProvider');
  }
  return context;
};