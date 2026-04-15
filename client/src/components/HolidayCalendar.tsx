import { useState } from "react";
import { holidaysByRegion } from "@/lib/teamData";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Heart, Zap, CheckCircle2 } from "lucide-react";

interface Holiday {
  date: string;
  name: string;
  type: string;
}

const regionColors = {
  philippines: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", dot: "bg-amber-500" },
  egypt: { bg: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-700", dot: "bg-cyan-500" },
  us: { bg: "bg-red-50", border: "border-red-200", text: "text-red-700", dot: "bg-red-500" },
  africa: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", dot: "bg-emerald-500" },
};

export default function HolidayCalendar() {
  const [expandedHoliday, setExpandedHoliday] = useState<string | null>(null);

  const WorkLifeBalanceInfo = () => (
    <div className="space-y-6 mb-8">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-8 text-white shadow-xl">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <div className="flex gap-4 items-start mb-4">
            <Heart className="w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold mb-2">We Value Your Time Off</h2>
              <p className="text-lg text-pink-50">
                A well-rested team is a productive and happy team. We're committed to supporting your work-life balance and celebrating important cultural moments with you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Requirements */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6 hover:shadow-lg transition-all">
          <div className="text-4xl mb-3">📅</div>
          <h3 className="font-bold text-emerald-900 mb-2 text-lg">14 Days Notice</h3>
          <p className="text-sm text-emerald-800">
            Submit your time off requests at least 14 days in advance. This gives us time to plan coverage and ensure smooth operations.
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-all">
          <div className="text-4xl mb-3">🤝</div>
          <h3 className="font-bold text-blue-900 mb-2 text-lg">Coverage Planning</h3>
          <p className="text-sm text-blue-800">
            Work with your manager to coordinate coverage for your responsibilities. Team coordination is essential for success.
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 hover:shadow-lg transition-all">
          <div className="text-4xl mb-3">✨</div>
          <h3 className="font-bold text-purple-900 mb-2 text-lg">Recharge & Enjoy</h3>
          <p className="text-sm text-purple-800">
            Take your time off to recharge, celebrate with family, and come back refreshed and ready to do your best work.
          </p>
        </div>
      </div>

      {/* Time Off Request Process */}
      <Card className="p-8 border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50 shadow-lg">
        <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center gap-2">
          <Zap className="w-5 h-5" />
          How to Request Time Off
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { 
              num: "1", 
              title: "Plan Ahead", 
              desc: "Think 14+ days ahead",
              icon: "📅"
            },
            { 
              num: "2", 
              title: "Talk to Manager", 
              desc: "Coordinate coverage",
              icon: "💬"
            },
            { 
              num: "3", 
              title: "Get Approval", 
              desc: "Work is on track",
              icon: "✅"
            },
            { 
              num: "4", 
              title: "Update Calendar", 
              desc: "Mark it shared",
              icon: "📍"
            },
          ].map((step, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200 text-center hover:shadow-md transition-all">
              <div className="text-3xl mb-2">{step.icon}</div>
              <p className="font-semibold text-slate-900 text-sm mb-1">{step.title}</p>
              <p className="text-xs text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const HolidayList = ({ holidays, region }: { holidays: Holiday[]; region: keyof typeof regionColors }) => {
    const colors = regionColors[region];
    const sortedHolidays = [...holidays].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const regionEmojis = {
      us: "🇺🇸",
      philippines: "🇵🇭",
      egypt: "🇪🇬",
      africa: "🌍",
    };

    return (
      <div>
        <div className={`mb-6 p-6 bg-gradient-to-r ${colors.bg} border-2 ${colors.border} rounded-xl`}>
          <p className="text-sm font-semibold text-slate-900 mb-2">
            {regionEmojis[region]} {region.charAt(0).toUpperCase() + region.slice(1)} Holidays
          </p>
          <p className="text-sm text-slate-700">
            Celebrating important cultural moments and giving you time to recharge with family and loved ones.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedHolidays.map((holiday, idx) => {
            const date = new Date(holiday.date);
            const formattedDate = date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            });
            const uniqueKey = `${region}-${idx}`;
            const isExpanded = expandedHoliday === uniqueKey;

            return (
              <Card
                key={uniqueKey}
                className={`p-5 border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${colors.bg} ${colors.border} ${
                  isExpanded ? "ring-2 ring-offset-2 ring-blue-500" : ""
                }`}
                onClick={() =>
                  setExpandedHoliday(expandedHoliday === uniqueKey ? null : uniqueKey)
                }
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl flex-shrink-0">🎉</div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-bold text-sm ${colors.text}`}>
                      {holiday.name}
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 font-semibold">
                      {formattedDate}
                    </p>
                    {isExpanded && (
                      <p className="text-xs text-slate-700 mt-2 bg-white bg-opacity-50 rounded px-2 py-1">
                        {holiday.type}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full space-y-8">
      <WorkLifeBalanceInfo />

      {/* Important Reminders */}
      <Card className="p-6 border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg">
        <div className="flex gap-4 items-start">
          <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-amber-900 text-lg mb-3">⚠️ Important Reminders</h3>
            <ul className="space-y-2">
              <li className="flex gap-2 text-sm text-amber-800">
                <span className="font-bold flex-shrink-0">•</span>
                <span><strong>Submit early:</strong> Give at least 14 days' notice for proper planning</span>
              </li>
              <li className="flex gap-2 text-sm text-amber-800">
                <span className="font-bold flex-shrink-0">•</span>
                <span><strong>Coordinate coverage:</strong> Work with your manager to ensure your team is covered</span>
              </li>
              <li className="flex gap-2 text-sm text-amber-800">
                <span className="font-bold flex-shrink-0">•</span>
                <span><strong>Update calendar:</strong> Mark your time off on the shared calendar</span>
              </li>
              <li className="flex gap-2 text-sm text-amber-800">
                <span className="font-bold flex-shrink-0">•</span>
                <span><strong>Enjoy your time:</strong> Recharge and come back ready to do your best work!</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Holiday Calendar Tabs */}
      <div>
        <h3 className="text-2xl font-bold text-slate-200 mb-6">🌍 Holiday Calendar by Region</h3>
        <Tabs defaultValue="us" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-700 border-2 border-slate-600 rounded-lg p-1 mb-6">
            <TabsTrigger value="us" className="text-xs sm:text-sm font-semibold text-slate-300 data-[state=active]:text-slate-100">
              🇺🇸 USA
            </TabsTrigger>
            <TabsTrigger value="philippines" className="text-xs sm:text-sm font-semibold text-slate-300 data-[state=active]:text-slate-100">
              🇵🇭 Philippines
            </TabsTrigger>
            <TabsTrigger value="egypt" className="text-xs sm:text-sm font-semibold text-slate-300 data-[state=active]:text-slate-100">
              🇪🇬 Egypt
            </TabsTrigger>
            <TabsTrigger value="africa" className="text-xs sm:text-sm font-semibold text-slate-300 data-[state=active]:text-slate-100">
              🌍 Africa
            </TabsTrigger>
          </TabsList>

          <TabsContent value="us" className="mt-6">
            <HolidayList holidays={holidaysByRegion.us} region="us" />
          </TabsContent>

          <TabsContent value="philippines" className="mt-6">
            <HolidayList
              holidays={holidaysByRegion.philippines}
              region="philippines"
            />
          </TabsContent>

          <TabsContent value="egypt" className="mt-6">
            <HolidayList holidays={holidaysByRegion.egypt} region="egypt" />
          </TabsContent>

          <TabsContent value="africa" className="mt-6">
            <HolidayList holidays={holidaysByRegion.africa} region="africa" />
          </TabsContent>
        </Tabs>
      </div>

      {/* Closing Message */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center">
        <p className="text-4xl mb-3">😊</p>
        <h3 className="font-bold text-green-900 text-xl mb-2">We Want You to Thrive</h3>
        <p className="text-green-800 max-w-2xl mx-auto text-sm">
          Your wellbeing is important to us. By planning ahead, coordinating with your team, and respecting the 14-day notice requirement, you can enjoy your time off knowing everything is covered. Take care of yourself and come back refreshed and ready to deliver your best work!
        </p>
      </div>
    </div>
  );
}
