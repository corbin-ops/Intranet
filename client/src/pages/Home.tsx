import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ChevronLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrgChart from "@/components/OrgChart";
import SOPSection from "@/components/SOPSection";
import OnboardingSection from "@/components/OnboardingSection";
import ReportsSection from "@/components/ReportsSection";
import HolidayCalendar from "@/components/HolidayCalendar";
import { companyInfo } from "@/lib/teamData";
import { useState } from "react";

export default function Home() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("org-chart");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Fixed Header with Tabs */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo and Back Button */}
          <div className="flex items-center justify-between py-3 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLocation("/")}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <img
                src={companyInfo.logo}
                alt="DEWCLAW Holdings"
                className="h-8 w-auto"
              />
              <div>
                <h1 className="text-lg font-bold text-slate-900">
                  {companyInfo.name}
                </h1>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-1 overflow-x-auto">
            <button
              onClick={() => setActiveTab("org-chart")}
              className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors border-b-2 ${
                activeTab === "org-chart"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              👥 Organization
            </button>
            <button
              onClick={() => setActiveTab("sops")}
              className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors border-b-2 ${
                activeTab === "sops"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              📋 SOPs
            </button>
            <button
              onClick={() => setActiveTab("onboarding")}
              className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors border-b-2 ${
                activeTab === "onboarding"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              🎓 Onboarding
            </button>
            <button
              onClick={() => setActiveTab("reports")}
              className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors border-b-2 ${
                activeTab === "reports"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              📊 Reports
            </button>
            <button
              onClick={() => setActiveTab("holidays")}
              className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors border-b-2 ${
                activeTab === "holidays"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              🗓️ Holidays
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - with top padding for fixed header */}
      <div className="pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {activeTab === "org-chart" && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Organization Structure
                </h2>
                <OrgChart />
              </div>
            )}

            {activeTab === "sops" && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Standard Operating Procedures
                </h2>
                <SOPSection />
              </div>
            )}

            {activeTab === "onboarding" && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  New Employee Onboarding
                </h2>
                <OnboardingSection />
              </div>
            )}

            {activeTab === "reports" && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Reports & Analytics
                </h2>
                <ReportsSection />
              </div>
            )}

            {activeTab === "holidays" && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Staff Holiday Calendar
                </h2>
                <HolidayCalendar />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
