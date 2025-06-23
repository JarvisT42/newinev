// pages/sample.tsx

import { useEffect, useState } from 'react';
import SplashCursor from '@/components/SplashCursor/SplashCursor';
import EventCard from '@/components/w-event-card';

export default function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/sample') // 👈 Replace this with your actual endpoint
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div className="p-4 space-y-6">
      <SplashCursor />
      <h1>Welcome to My App</h1>

      {events.map((event: any, index: number) => (
        <EventCard
          key={index}
          date={event.event_date}
          title={event.title}
       
          description={event.description}
        />
      ))}
    </div>
  );
}
