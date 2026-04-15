import { Card } from "@/components/ui/card";
import { Calendar, Clock, Users, Zap } from "lucide-react";
import { useState } from "react";

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: string;
  color: string;
  description: string;
  isBootcamp?: boolean;
}

const events: CalendarEvent[] = [
  {
    id: "1",
    title: "Friday Team Meeting",
    date: "2026-03-28",
    time: "2:00 PM - 3:00 PM",
    type: "Meeting",
    color: "bg-blue-100 border-l-4 border-blue-600",
    description: "Weekly team roundtable and wins presentation",
  },
  {
    id: "2",
    title: "Monday Sales Training",
    date: "2026-03-31",
    time: "10:00 AM - 11:30 AM",
    type: "Training",
    color: "bg-green-100 border-l-4 border-green-600",
    description: "Sales techniques and best practices",
  },
  {
    id: "3",
    title: "Wednesday Sales Training",
    date: "2026-04-02",
    time: "10:00 AM - 11:30 AM",
    type: "Training",
    color: "bg-green-100 border-l-4 border-green-600",
    description: "Advanced sales strategies",
  },
  {
    id: "4",
    title: "Q1 Review Meeting",
    date: "2026-04-05",
    time: "1:00 PM - 2:30 PM",
    type: "Review",
    color: "bg-purple-100 border-l-4 border-purple-600",
    description: "Quarterly performance review and planning",
  },
  {
    id: "5",
    title: "🚀 Effortless Business Bootcamp - Kick-off Call",
    date: "2026-04-20",
    time: "11:30 AM - 1:00 PM",
    type: "AI Bootcamp",
    color: "bg-orange-200 border-l-4 border-orange-600 ring-2 ring-orange-400 shadow-lg",
    description: "The New AI Business Model for Founders & Leaders - Kick-off session. Why we're attending: Transform our business operations with AI-driven solutions to enhance efficiency, scale operations, and stay competitive in the evolving real estate market.",
    isBootcamp: true,
  },
  {
    id: "6",
    title: "🚀 Effortless Business Bootcamp - Session 1",
    date: "2026-04-21",
    time: "11:30 AM - 1:00 PM",
    type: "AI Bootcamp",
    color: "bg-orange-200 border-l-4 border-orange-600 ring-2 ring-orange-400 shadow-lg",
    description: "Build AI Employees and Lead the Company You Actually Wanted to Build. Why we're attending: Learn how to implement AI systems to automate lead management, disposition tracking, and client communications while maintaining our high service standards.",
    isBootcamp: true,
  },
  {
    id: "7",
    title: "🚀 Effortless Business Bootcamp - Session 2",
    date: "2026-04-23",
    time: "11:30 AM - 1:00 PM",
    type: "AI Bootcamp",
    color: "bg-orange-200 border-l-4 border-orange-600 ring-2 ring-orange-400 shadow-lg",
    description: "Advanced AI strategies for business scaling. Why we're attending: Discover how to leverage AI for data analysis, predictive modeling, and strategic decision-making to accelerate our growth and market expansion.",
    isBootcamp: true,
  },
  {
    id: "8",
    title: "🚀 Effortless Business Bootcamp - Session 3",
    date: "2026-04-28",
    time: "11:30 AM - 1:00 PM",
    type: "AI Bootcamp",
    color: "bg-orange-200 border-l-4 border-orange-600 ring-2 ring-orange-400 shadow-lg",
    description: "Final bootcamp session with action planning. Why we're attending: Develop a concrete AI implementation roadmap for DewClaw Land, identifying quick wins and long-term initiatives to revolutionize our business model.",
    isBootcamp: true,
  },
];

export default function EventsCalendar() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const upcomingEvents = events.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const selectedEvents = selectedDate
    ? upcomingEvents.filter((e) => e.date === selectedDate)
    : upcomingEvents.slice(0, 4);

  return (
    <div className="space-y-6">
      {/* Bootcamp Poster Banner */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img 
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663323712485/ZZPxW7fzGxpa2CPHvC9bdx/Screenshot2026-03-24at3.19.16AM_58a9e16e.png" 
          alt="The Effortless Business Bootcamp - Begins April 21st" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Bootcamp Highlight Banner */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg p-6 text-white shadow-lg">
        <div className="flex items-start gap-4">
          <Zap className="w-8 h-8 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl font-bold mb-2">🚀 AI Bootcamp: Transform DewClaw Land</h3>
            <p className="mb-3 text-orange-50">
              We're attending the Effortless Business Bootcamp to revolutionize how we operate. Here's why it matters:
            </p>
            <ul className="space-y-2 text-sm text-orange-50">
              <li>✓ <strong>Automate Lead Management:</strong> AI-powered systems to handle lead intake and disposition</li>
              <li>✓ <strong>Scale Operations:</strong> Reduce manual work and increase team productivity</li>
              <li>✓ <strong>Data-Driven Decisions:</strong> Advanced analytics for market insights and pricing strategies</li>
              <li>✓ <strong>Competitive Edge:</strong> Stay ahead in the fast-evolving real estate tech landscape</li>
              <li>✓ <strong>Build AI Employees:</strong> Implement intelligent systems that work 24/7 for our clients</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Upcoming Events</h3>

        {/* Events List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Events Display */}
          <div className="lg:col-span-2 space-y-4">
            {selectedEvents.length > 0 ? (
              selectedEvents.map((event) => (
                <Card
                  key={event.id}
                  className={`p-4 ${event.color} hover:shadow-md transition-shadow cursor-pointer ${
                    event.isBootcamp ? 'transform hover:scale-105' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          event.isBootcamp 
                            ? 'bg-orange-600 text-white' 
                            : 'text-slate-600 bg-white'
                        }`}>
                          {event.type}
                        </span>
                        {event.isBootcamp && (
                          <span className="text-xs font-bold text-orange-700 bg-orange-300 px-2 py-1 rounded">
                            FEATURED
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {event.title}
                      </h4>
                      <p className="text-sm text-slate-700 mb-3">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </div>
                      </div>
                    </div>
                    <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
                      Add to Calendar
                    </button>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-8 text-slate-500">
                No events scheduled for this date
              </div>
            )}
          </div>

          {/* Calendar Sidebar */}
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <h4 className="font-bold text-slate-900 mb-4">Event Categories</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded cursor-pointer">
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                <span className="text-sm text-slate-700">Meetings</span>
              </div>
              <div className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded cursor-pointer">
                <div className="w-3 h-3 rounded-full bg-green-600"></div>
                <span className="text-sm text-slate-700">Training</span>
              </div>
              <div className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded cursor-pointer">
                <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                <span className="text-sm text-slate-700">Reviews</span>
              </div>
              <div className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded cursor-pointer bg-orange-100 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-orange-600"></div>
                <span className="text-sm font-semibold text-orange-700">AI Bootcamp</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <h4 className="font-bold text-slate-900 mb-3">All Events</h4>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    onClick={() => setSelectedDate(event.date)}
                    className={`p-2 hover:bg-slate-100 rounded cursor-pointer text-sm ${
                      event.isBootcamp ? 'bg-orange-100 border-l-2 border-orange-600' : ''
                    }`}
                  >
                    <div className="font-semibold text-slate-900">
                      {event.title}
                    </div>
                    <div className="text-xs text-slate-500">
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
