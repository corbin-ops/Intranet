import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface SOP {
  id: string;
  title: string;
  description: string;
  driveLink: string;
  lastUpdated: string;
}

const sopLinks: SOP[] = [
  {
    id: "acquisition-manager",
    title: "Acquisition Manager (AM)",
    description: "Standard procedures for acquisition managers",
    driveLink: "https://drive.google.com/drive/folders/1CTpF_1ysVe19greZJmsTnAsUa6vbppN1?usp=drive_link",
    lastUpdated: "2025-08-03",
  },
  {
    id: "cold-calling",
    title: "Cold Calling",
    description: "Best practices and procedures for cold calling",
    driveLink: "https://drive.google.com/drive/folders/17q49P6wlaKW_tUadGmHvNAr6lKKpvG_G?usp=drive_link",
    lastUpdated: "2025-07-23",
  },
  {
    id: "data-aggregation",
    title: "Data Aggregation",
    description: "Guidelines for data collection and aggregation",
    driveLink: "https://drive.google.com/drive/folders/17eUp_AO2NiZnynbp70xnixiUn6eMaIHB?usp=drive_link",
    lastUpdated: "2025-11-04",
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    description: "Procedures and responsibilities for data analysts",
    driveLink: "https://drive.google.com/drive/folders/1tpJ5w1tKXzdy4lRrTiHgkIYDkQbGfO8_?usp=drive_link",
    lastUpdated: "2026-02-21",
  },
  {
    id: "disposition-manager",
    title: "Disposition Manager",
    description: "Standard operating procedures for disposition managers",
    driveLink: "https://drive.google.com/drive/folders/1oylvrLm3O-nDl78oRue8Tdcjfnx5mNIf?usp=drive_link",
    lastUpdated: "2025-07-02",
  },
  {
    id: "future-goals",
    title: "Future Goals of Land Business",
    description: "Strategic goals and vision for the land business",
    driveLink: "https://drive.google.com/drive/folders/1GbMUpANp9m4hPeweVx3XQpo6_2DzlXZk?usp=drive_link",
    lastUpdated: "2025-06-01",
  },
  {
    id: "lead-manager",
    title: "Lead Manager",
    description: "Procedures for managing leads and lead generation",
    driveLink: "https://drive.google.com/drive/folders/1YbmGWBrpKgvaM2uUzjnT1pPgeqwQRjVn?usp=drive_link",
    lastUpdated: "2026-02-18",
  },
  {
    id: "texters",
    title: "Texters",
    description: "Guidelines for text communication and messaging",
    driveLink: "https://drive.google.com/drive/folders/1YpA4Vjta9anuoCGzAjwPQV4QhXwbGoiO?usp=drive_link",
    lastUpdated: "2025-06-02",
  },
];

export default function SOPSection() {
  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-900">
          📄 All SOPs are stored in our shared Google Drive folders. Click on any SOP below to access the specific folder.
        </p>
      </div>

      {sopLinks.map((sop) => (
        <Card
          key={sop.id}
          className="overflow-hidden border border-slate-200 hover:shadow-md transition-shadow duration-200"
        >
          <a
            href={sop.driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-5 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors block"
          >
            <div className="text-left flex-1">
              <h3 className="font-semibold text-slate-900">{sop.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{sop.description}</p>
              <p className="text-xs text-slate-500 mt-2">
                Last updated: {new Date(sop.lastUpdated).toLocaleDateString()}
              </p>
            </div>
            <ExternalLink className="w-5 h-5 text-blue-600 flex-shrink-0 ml-4" />
          </a>
        </Card>
      ))}
    </div>
  );
}
