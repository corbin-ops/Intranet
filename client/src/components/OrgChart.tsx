import { teamData, TeamMember } from "@/lib/teamData";
import { Card } from "@/components/ui/card";

export default function OrgChart() {
  const ceo = teamData.find((m) => m.id === "corbin");
  const directReports = teamData.filter((m) => m.reportsTo === "corbin" && m.id !== "corbin");

  const TeamCard = ({ member }: { member: TeamMember }) => (
    <Card className="p-4 text-center hover:shadow-lg transition-shadow duration-300 bg-white border border-slate-200">
      <div className="mb-3 flex justify-center">
        <img
          src={member.photo}
          alt={member.name}
          className="w-20 h-20 rounded-full object-cover border-4 border-blue-100 hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-bold text-slate-900 text-sm">{member.name}</h3>
      <p className="text-xs text-slate-600 font-medium mt-1">{member.title}</p>
      <p className="text-xs text-slate-500 mt-1">{member.department}</p>
    </Card>
  );

  return (
    <div className="space-y-12">
      {/* CEO Level */}
      <div className="flex justify-center">
        <div className="w-48">
          {ceo && <TeamCard member={ceo} />}
        </div>
      </div>

      {/* Connecting line from CEO */}
      <div className="flex justify-center">
        <div className="w-1 h-8 bg-blue-500"></div>
      </div>

      {/* Horizontal line connecting all direct reports */}
      <div className="relative flex justify-center" style={{ height: "2px" }}>
        <div 
          className="absolute bg-blue-500" 
          style={{ 
            height: "2px",
            width: `${Math.max(directReports.length * 220, 500)}px`,
            top: "0"
          }}
        ></div>
      </div>

      {/* Direct Reports Level */}
      <div className="flex justify-center gap-8 flex-wrap">
        {directReports.map((report) => (
          <div key={report.id} className="flex flex-col items-center relative">
            {/* Vertical line from horizontal line to card */}
            <div 
              className="absolute bg-blue-500" 
              style={{ 
                width: "2px",
                height: "24px",
                top: "-24px",
                left: "50%",
                transform: "translateX(-50%)"
              }}
            ></div>
            <div className="w-48 pt-2">
              <TeamCard member={report} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
