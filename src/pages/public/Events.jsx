import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, ArrowRight, Link as LinkIcon } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useEvents } from "../../hooks/useEvents";

const Events = () => {
  const { events } = useEvents();
  const upcomingEvents = events.filter(e => e.status === "Upcoming");
  const pastEvents = events.filter(e => e.status === "Past");

  const EventCard = ({ event }) => (
    <div className="bg-[#151521] border border-[#26263a] rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-sm text-gray-400 mb-4 line-clamp-2">{event.description}</p>
          </div>
          <div className="text-2xl ml-2">{event.image}</div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <Calendar size={16} className="text-indigo-400" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            {event.type === 'virtual' ? (
              <LinkIcon size={16} className="text-purple-400" />
            ) : (
              <MapPin size={16} className="text-purple-400" />
            )}
            {event.type === 'virtual' && event.url ? (
              <a href={event.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{event.location}</a>
            ) : (
              <span>{event.location}</span>
            )}
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <Users size={16} className="text-green-400" />
            <span>{event.attendees} / {event.maxAttendees} attending</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2 flex-wrap">
            {event.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-xs font-medium text-gray-400">{event.category}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#26263a]">
          <p className="text-sm text-gray-400">By {event.host}</p>
          <button className="px-4 py-2 rounded-lg bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 transition text-sm font-medium">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen text-white bg-[radial-gradient(ellipse_at_top,_#1e1b4b_0%,_#0f0c29_40%,_#0a0a1f_100%)]">
        {/* HERO SECTION */}
        <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
          <div className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_80px_rgba(99,102,241,0.15)] px-10 py-20 text-center">
            <div className="mb-6">
              <span className="text-xs tracking-widest px-4 py-1 rounded-full bg-white/5 border border-white/10">
                COMMUNITY EVENTS
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Join Our{" "}
              <span className="bg-gradient-to-r from-white via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Community Events
              </span>
            </h1>

            <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
              Connect with fellow tech professionals, learn new skills, and grow your
              network through our upcoming workshops, meetups, and community events.
            </p>
          </div>
        </section>

        {/* UPCOMING EVENTS */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-400">
              {upcomingEvents.length} events scheduled. Reserve your spot today!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        {/* PAST EVENTS */}
        {pastEvents.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 py-20 border-t border-[#26263a]">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Past Events</h2>
              <p className="text-gray-400">
                {pastEvents.length} events completed. Check out what you missed!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <div key={event.id} className="opacity-60">
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA SECTION */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="bg-[#0f172a]/70 border border-white/10 backdrop-blur-xl rounded-2xl px-10 py-16 text-center shadow-[0_0_60px_rgba(99,102,241,0.15)]">
            <h2 className="text-4xl font-bold mb-4">Don't Miss Out</h2>

            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of tech professionals attending our events. Register now
              to secure your spot and stay updated with the latest happenings.
            </p>

            <div className="flex justify-center gap-4">
              <Link
                to="/signup"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 transition shadow-lg shadow-indigo-500/30 flex items-center gap-2"
              >
                Join Community <ArrowRight size={18} />
              </Link>

              <button className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
                View Calendar
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Events;
