import { useLocation } from "wouter";
import OrgChart from "@/components/OrgChart";
import SOPSection from "@/components/SOPSection";
import OnboardingSection from "@/components/OnboardingSection";
import ReportsSection from "@/components/ReportsSection";
import HolidayCalendar from "@/components/HolidayCalendar";
import NewsSection from "@/components/NewsSection";
import EventsCalendar from "@/components/EventsCalendar";
import StaffHandbook from "@/components/StaffHandbook";

import ContactAdminModal from "@/components/ContactAdminModal";
import { companyInfo } from "@/lib/teamData";
import { Users, Target, Award, Heart } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("home");
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const coreValues = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Customer First",
      description: "We prioritize our clients' needs and deliver exceptional service",
      color: "text-red-600",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do",
      color: "text-blue-600",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Teamwork",
      description: "We succeed together through collaboration and support",
      color: "text-green-600",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Innovation",
      description: "We embrace new ideas and continuously improve our processes",
      color: "text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      {/* Fixed Header with Top Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663323712485/ZZPxW7fzGxpa2CPHvC9bdx/logo-1_1a03f169.png" alt="DewClaw Land Logo" className="h-8 sm:h-10 flex-shrink-0" />
              <div className="hidden sm:block">
                <p className="text-xs text-slate-400">Employee Portal</p>
              </div>
            </div>

            {/* Navigation Tabs - Scrollable on mobile */}
            <div className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto flex-1 justify-end">
              <button
                onClick={() => setActiveTab("home")}
                className={`px-2 sm:px-4 py-3 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === "home"
                    ? "border-blue-400 text-blue-400"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
                style={activeTab === "home" ? { borderColor: '#2c5aa0', color: '#2c5aa0' } : {}}
              >
                🏠 <span className="hidden sm:inline">Home</span>
              </button>

              <button
                onClick={() => setActiveTab("events")}
                className={`px-2 sm:px-4 py-3 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === "events"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
                style={activeTab === "events" ? { borderColor: '#2c5aa0', color: '#2c5aa0' } : {}}
              >
                📅 <span className="hidden sm:inline">Events</span>
              </button>
              <button
                onClick={() => setActiveTab("sops")}
                className={`px-2 sm:px-4 py-3 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === "sops"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
                style={activeTab === "sops" ? { borderColor: '#2c5aa0', color: '#2c5aa0' } : {}}
              >
                📋 <span className="hidden sm:inline">SOPs</span>
              </button>
              <button
                onClick={() => setActiveTab("onboarding")}
                className={`px-2 sm:px-4 py-3 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === "onboarding"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
                style={activeTab === "onboarding" ? { borderColor: '#2c5aa0', color: '#2c5aa0' } : {}}
              >
                🎓 <span className="hidden sm:inline">Onboarding</span>
              </button>
              <button
                onClick={() => setActiveTab("reports")}
                className={`px-2 sm:px-4 py-3 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === "reports"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
                style={activeTab === "reports" ? { borderColor: '#2c5aa0', color: '#2c5aa0' } : {}}
              >
                📊 <span className="hidden sm:inline">Reports</span>
              </button>

              <button
                onClick={() => setActiveTab("holidays")}
                className={`px-2 sm:px-4 py-3 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === "holidays"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
                style={activeTab === "holidays" ? { borderColor: '#2c5aa0', color: '#2c5aa0' } : {}}
              >
                🗓️ <span className="hidden sm:inline">Holidays</span>
              </button>

              <button
                onClick={() => setActiveTab("contractors")}
                className={`px-2 sm:px-4 py-3 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === "contractors"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
                style={activeTab === "contractors" ? { borderColor: '#2c5aa0', color: '#2c5aa0' } : {}}
              >
                📖 <span className="hidden sm:inline">Staff Handbook</span>
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 sm:pt-32">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 pb-12">          {/* HOME TAB */}
          {activeTab === "home" && (
            <div className="space-y-8">
              {/* Welcome Section */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-6 text-white mb-6" style={{ background: 'linear-gradient(to right, #2c5aa0, #3a6bb8)' }}>
                <h2 className="text-3xl font-bold mb-2">Welcome to DewClaw Land</h2>
                <p className="text-blue-100 text-sm">Service in every action — building tomorrow's landscapes today</p>
              </div>

              {/* About the Company - Side by Side */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl border-0 p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-white mb-3">Who We Are</h3>
                  <p className="text-white text-sm mb-3">
                    DewClaw Land is a forward-thinking land investment company specializing in fast, transparent, and customer-friendly real estate transactions.
                  </p>
                  <ul className="space-y-1 text-white text-sm">
                    <li className="flex gap-2">
                      <span className="text-white font-bold flex-shrink-0">✓</span>
                      <span><strong>Speed:</strong> 7-30 days</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-700 font-bold flex-shrink-0">✓</span>
                      <span><strong>Transparency:</strong> Zero hidden fees</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-700 font-bold flex-shrink-0">✓</span>
                      <span><strong>Excellence:</strong> 100% satisfaction</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-700 font-bold flex-shrink-0">✓</span>
                      <span><strong>Support:</strong> 24/7 available</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl border-0 p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-white mb-3">Our Mission</h3>
                  <p className="text-white text-sm">
                    To revolutionize the land investment industry by providing fair, fast, and transparent transactions while building a team of passionate professionals who genuinely care about our clients' success.
                  </p>
                </div>
              </div>

              {/* Camera Reminder Banner */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 border-r-2 border-r-orange-400 p-4 rounded-lg mb-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="text-2xl animate-pulse flex-shrink-0">📹</div>
                  <div>
                    <h3 className="font-bold text-orange-900 mb-1 text-sm">🎥 Meeting Reminder: Cameras ON</h3>
                    <p className="text-orange-800 text-xs font-medium">
                      For all team meetings, one-on-ones, and client calls, please keep your camera ON.
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Values - Compact */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Our Core Values</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {coreValues.map((value, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg border-0 p-4 hover:shadow-md transition-shadow">
                      <div className={`${value.color} mb-2 text-lg`}>
                        {value.icon}
                      </div>
                      <h4 className="font-semibold text-white text-sm mb-1">{value.title}</h4>
                      <p className="text-xs text-white">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Announcements */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">📢 Company Announcements</h3>
                <NewsSection />
              </div>

              {/* Leadership Team */}
              <div>
                <h3 className="text-lg font-bold text-slate-200 mb-3">Our Leadership Team</h3>
                <p className="text-slate-300 text-sm mb-4">Meet the talented leaders guiding DewClaw Land forward</p>
                <OrgChart />
              </div>
            </div>
          )}

          {/* SOPS TAB */}
          {activeTab === "sops" && (
            <div className="bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-700">
              <SOPSection />
            </div>
          )}

          {/* ONBOARDING TAB */}
          {activeTab === "onboarding" && (
            <div className="bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-700">
              <OnboardingSection />
            </div>
          )}


          {/* REPORTS TAB */}
          {activeTab === "reports" && (
            <div className="bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-700">
              <ReportsSection />
            </div>
          )}

          {/* HOLIDAYS TAB */}
          {activeTab === "holidays" && (
            <div className="bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-700">
              <HolidayCalendar />
            </div>
          )}

          {/* STAFF HANDBOOK TAB */}
          {activeTab === "contractors" && (
            <div className="bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-700">
              <StaffHandbook />
            </div>
          )}

          {activeTab === "events" && (
            <div className="bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-700">
              <EventsCalendar />
            </div>
          )}

          {/* NEWS TAB - HIDDEN, kept for reference */}
          {/* News section is now integrated into the home page */}

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white mt-12 py-12 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">DewClaw Land</h3>
              <p className="text-slate-400 text-sm">Employee Portal © 2026</p>
              <p className="text-slate-500 text-xs mt-2">Service in every action — building tomorrow's landscapes today</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-300">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Events</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Onboarding</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-300">Support</h4>
              <button onClick={() => setContactModalOpen(true)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                Contact Admin
              </button>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700 text-center text-slate-400 text-sm">
            <p>Made with ❤️ for our amazing team</p>
          </div>
        </div>
      </footer>

      {/* Contact Admin Modal */}
      <ContactAdminModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
  );
}
