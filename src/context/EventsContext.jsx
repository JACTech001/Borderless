import { useState } from 'react';
import { events as initialEventsData } from '../mock/eventsData';
import { EventsContext } from '../hooks/useEvents';

// Process initial data to add 'type' and 'url' for consistency
const processedInitialEvents = initialEventsData.map(event => {
  const isVirtual = event.location.startsWith('http') || event.location.toLowerCase().includes('zoom');
  if (isVirtual) {
    return { ...event, type: 'virtual', url: event.location, location: 'Online' };
  }
  return { ...event, type: 'physical', url: '' };
});

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState(processedInitialEvents);

  const addEvent = (newEvent) => {
    const eventToAdd = {
      ...newEvent,
      id: Date.now(),
      attendees: 0,
      status: 'Upcoming',
      host: 'Borderless Tech',
      location: newEvent.type === 'physical' ? newEvent.location : 'Online',
      url: newEvent.type === 'virtual' ? newEvent.url : '',
      // Add properties expected by EventCard on public page
      image: '🎉',
      tags: [newEvent.category],
    };

    setEvents(prevEvents => [eventToAdd, ...prevEvents]);
  };

  return (
    <EventsContext.Provider value={{ events, addEvent }}>
      {children}
    </EventsContext.Provider>
  );
};