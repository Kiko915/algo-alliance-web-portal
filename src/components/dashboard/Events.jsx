"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Clock } from "lucide-react";

export function EventsWidget({ events }) {
  const onRsvp = (id) => {
    // Placeholder handler
    alert(`RSVP clicked for event ${id}`);
  };

  return (
    <Card className="rounded-xl shadow relative overflow-hidden">
      <CardHeader>
        <CardTitle className="text-base">Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 blur-sm">
        {events.length === 0 ? (
          <p className="text-sm text-gray-500">No upcoming events.</p>
        ) : (
          events.slice(0, 2).map((ev) => (
            <div key={ev.id} className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-gray-900">{ev.title}</p>
                <p className="text-xs text-gray-500">{ev.date}{ev.location ? ` • ${ev.location}` : ""}</p>
              </div>
              <Button size="sm" onClick={() => onRsvp(ev.id)}>RSVP</Button>
            </div>
          ))
        )}
      </CardContent>
      
      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center">
        <div className="text-center">
          <Clock className="h-8 w-8 text-gray-500 mx-auto mb-2" />
          <p className="text-lg font-semibold text-gray-700">Coming Soon</p>
          <p className="text-sm text-gray-500 mt-1">Events feature will be available soon</p>
        </div>
      </div>
    </Card>
  );
}