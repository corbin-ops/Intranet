import { Card } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, FileText, PieChart, Calendar } from "lucide-react";

interface Report {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  frequency: string;
  url: string;
}

const reports: Report[] = [
  {
    id: "lead-dashboard",
    title: "Lead Dashboard",
    description: "Comprehensive view of all leads, conversion metrics, and pipeline status",
    icon: <BarChart3 className="w-6 h-6" />,
    category: "Operations",
    frequency: "Real-time",
    url: "https://leaddash-9g5vjs9w.manus.space/",
  },
  {
    id: "eod-report",
    title: "EOD Report",
    description: "End of day summary with key metrics and activities",
    icon: <TrendingUp className="w-6 h-6" />,
    category: "Operations",
    frequency: "Daily",
    url: "https://claude.ai/public/artifacts/64e087a1-3e72-43a4-92c8-21a53b054cc4",
  },
  {
    id: "sales-fub-report",
    title: "Sales Fub Report",
    description: "Sales follow-up and business metrics dashboard",
    icon: <BarChart3 className="w-6 h-6" />,
    category: "Finance",
    frequency: "Real-time",
    url: "https://sales-fub.onrender.com/login",
  },
  {
    id: "sc-report",
    title: "SC Report",
    description: "Sales and conversion metrics report",
    icon: <BarChart3 className="w-6 h-6" />,
    category: "Finance",
    frequency: "Weekly",
    url: "#",
  },
  {
    id: "pl-report",
    title: "P&L Report",
    description: "Profit and Loss statement and financial performance",
    icon: <TrendingUp className="w-6 h-6" />,
    category: "Finance",
    frequency: "Monthly",
    url: "#",
  },
  {
    id: "sold-pipeline",
    title: "Sold Pipeline",
    description: "Pipeline of sold deals and revenue forecast",
    icon: <PieChart className="w-6 h-6" />,
    category: "Finance",
    frequency: "Weekly",
    url: "#",
  },
  {
    id: "conservative-pipeline",
    title: "Conservative Pipeline",
    description: "Conservative forecast of potential deals and revenue",
    icon: <PieChart className="w-6 h-6" />,
    category: "Finance",
    frequency: "Weekly",
    url: "#",
  },
];

const categoryColors: Record<string, { bg: string; text: string; dot: string }> = {
  Operations: { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
  Finance: { bg: "bg-green-50", text: "text-green-700", dot: "bg-green-500" },
  Analytics: { bg: "bg-purple-50", text: "text-purple-700", dot: "bg-purple-500" },
  HR: { bg: "bg-pink-50", text: "text-pink-700", dot: "bg-pink-500" },
  Compliance: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
};

export default function ReportsSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => {
          const colors = categoryColors[report.category] || categoryColors.Operations;

          return (
            <Card
              key={report.id}
              className={`p-5 border-l-4 cursor-pointer transition-all duration-200 hover:shadow-lg ${colors.bg}`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`text-slate-700 flex-shrink-0`}>
                  {report.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-slate-900 text-sm">
                    {report.title}
                  </h4>
                  <span className={`inline-block text-xs font-medium mt-1 px-2 py-1 rounded ${colors.text} bg-white`}>
                    {report.category}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-700 mb-4">
                {report.description}
              </p>

              <div className="flex items-center justify-between text-xs text-slate-600 border-t border-slate-200 pt-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{report.frequency}</span>
                </div>
              </div>

              <a
                href={report.url}
                target={report.url.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="mt-4 w-full py-2 px-3 bg-white text-slate-700 text-sm font-medium rounded border border-slate-300 hover:bg-slate-50 transition-colors inline-block text-center"
              >
                {report.url === "#" ? "Coming Soon" : "View Report"}
              </a>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
