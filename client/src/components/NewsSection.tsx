import { Card } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  category: string;
  link?: string;
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Q1 2026 Business Results Announced",
    description: "Strong performance across all departments with record-breaking sales numbers this quarter.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    author: "Corbin Garcia",
    date: "2026-03-20",
    category: "Business Update",
    link: "https://app.slack.com/client/T091NSKGP5Y/C095YT0NEQ7",
  },
  {
    id: "2",
    title: "New Team Member Onboarding Program",
    description: "Introducing our revamped onboarding process to help new employees succeed faster.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    author: "Alerie",
    date: "2026-03-18",
    category: "HR",
    link: "onboarding",
  },
  {
    id: "3",
    title: "Company Culture Initiative Launch",
    description: "Join us for our new company culture events designed to strengthen team bonds.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    author: "HR Team",
    date: "2026-03-15",
    category: "Culture",
    link: "culture",
  },
];

export default function NewsSection() {
  return (
    <div className="space-y-8">
      {/* Featured News Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">
              Stay Updated with DewClaw Land News!
            </h2>
            <p className="text-blue-100 mb-6">
              Check out the latest company updates, announcements, and important information.
            </p>
            <a
              href="https://app.slack.com/client/T091NSKGP5Y/C095YT0NEQ7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Join Discussion on Slack →
            </a>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
              alt="Company News"
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-6">News & Announcements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => {
            const handleClick = () => {
              if (item.link) {
                if (item.link === 'onboarding') {
                  // Open onboarding guide in a modal or new tab
                  const content = `🎉 Welcome to DewClaw Land - Your 90-Day Adventure Starts Now!\n\nPlease view the full onboarding guide in the Onboarding tab for the complete experience with all sections, checklists, and resources.`;
                  alert(content);
                  // Alternatively, you could navigate to the onboarding tab
                } else if (item.link === 'culture') {
                  // Open culture guide in a modal or new tab
                  const content = `🌍 DewClaw Land Company Culture\n\nPlease view the full company culture guide in the Onboarding tab for the complete experience with all sections on diversity, remote work etiquette, and team values.`;
                  alert(content);
                } else {
                  window.open(item.link, '_blank');
                }
              }
            };
            return (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-white"
              onClick={handleClick}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2 line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {item.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
