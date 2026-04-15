import { useEffect, useState } from "react";
import { Eye, BarChart3, TrendingUp, Clock } from "lucide-react";

interface PageView {
  page: string;
  views: number;
  timestamp: number;
}

interface Analytics {
  totalViews: number;
  pageViews: Record<string, number>;
  lastUpdated: number;
}

const STORAGE_KEY = "intranet_analytics";

export function useAnalytics(pageName: string) {
  useEffect(() => {
    // Get existing analytics
    const stored = localStorage.getItem(STORAGE_KEY);
    const analytics: Analytics = stored
      ? JSON.parse(stored)
      : { totalViews: 0, pageViews: {}, lastUpdated: Date.now() };

    // Increment page view
    analytics.totalViews += 1;
    analytics.pageViews[pageName] = (analytics.pageViews[pageName] || 0) + 1;
    analytics.lastUpdated = Date.now();

    // Save back to storage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(analytics));
  }, [pageName]);
}

export function getAnalytics(): Analytics {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored
    ? JSON.parse(stored)
    : { totalViews: 0, pageViews: {}, lastUpdated: Date.now() };
}

export default function AnalyticsTracker() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);

  useEffect(() => {
    const data = getAnalytics();
    setAnalytics(data);

    // Update every 10 seconds
    const interval = setInterval(() => {
      setAnalytics(getAnalytics());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  if (!analytics) return null;

  const topPages = Object.entries(analytics.pageViews)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  return (
    <div className="space-y-4">
      {/* Compact Landscape Analytics Cards */}
      <div className="flex flex-wrap gap-3">
        {/* Total Views */}
        <div className="flex-1 min-w-[180px] bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-blue-100">Total Views</div>
              <div className="text-2xl font-bold mt-1">{analytics.totalViews}</div>
            </div>
            <Eye className="w-6 h-6 text-blue-200" />
          </div>
        </div>

        {/* Unique Pages */}
        <div className="flex-1 min-w-[180px] bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-green-100">Unique Pages</div>
              <div className="text-2xl font-bold mt-1">{Object.keys(analytics.pageViews).length}</div>
            </div>
            <BarChart3 className="w-6 h-6 text-green-200" />
          </div>
        </div>

        {/* Most Viewed */}
        <div className="flex-1 min-w-[180px] bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-purple-100">Most Viewed</div>
              <div className="text-sm font-bold mt-1 truncate">{topPages[0]?.[0] || "N/A"}</div>
            </div>
            <TrendingUp className="w-6 h-6 text-purple-200" />
          </div>
        </div>

        {/* Last Updated */}
        <div className="flex-1 min-w-[180px] bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-4 text-white shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-orange-100">Last Updated</div>
              <div className="text-sm font-bold mt-1">{new Date(analytics.lastUpdated).toLocaleTimeString()}</div>
            </div>
            <Clock className="w-6 h-6 text-orange-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
