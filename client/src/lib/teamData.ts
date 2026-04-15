export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: string;
  photo: string;
  reportsTo?: string;
  department: string;
}

export const teamData: TeamMember[] = [
  {
    id: "corbin",
    name: "Corbin",
    title: "CEO/President",
    role: "Executive Leadership",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323712485/ZZPxW7fzGxpa2CPHvC9bdx/corbin_6d45898c.jpg",
    department: "Executive",
  },
  {
    id: "hugo",
    name: "Hugo",
    title: "Vice President - Disposition",
    role: "Disposition Leadership",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323712485/ZZPxW7fzGxpa2CPHvC9bdx/hugo_60694398.jpg",
    reportsTo: "corbin",
    department: "Disposition",
  },
  {
    id: "alerie",
    name: "Alerie",
    title: "COO",
    role: "Chief Operating Officer",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323712485/ZZPxW7fzGxpa2CPHvC9bdx/alerie_e456e219.jpg",
    reportsTo: "corbin",
    department: "Operations",
  },
  {
    id: "marie",
    name: "Marie",
    title: "Lead Intake Manager",
    role: "Sales Management",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323712485/ZZPxW7fzGxpa2CPHvC9bdx/marie_556933f0.jpg",
    reportsTo: "corbin",
    department: "Sales",
  },
  {
    id: "taa",
    name: "Taa",
    title: "Lead Intake Representative",
    role: "Sales Operations",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323712485/ZZPxW7fzGxpa2CPHvC9bdx/taa_1c2011aa.jpg",
    reportsTo: "corbin",
    department: "Sales",
  },
  {
    id: "chenge",
    name: "Chenge",
    title: "Data Analyst",
    role: "Analytics & Insights",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323712485/ZZPxW7fzGxpa2CPHvC9bdx/chenge_4708aa59.jpg",
    reportsTo: "corbin",
    department: "Analytics",
  },
  {
    id: "jow",
    name: "Jow",
    title: "AI Implementation Specialist",
    role: "AI & Automation",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323712485/ZZPxW7fzGxpa2CPHvC9bdx/pasted_file_gLGkLG_image_39b74318.png",
    reportsTo: "corbin",
    department: "Technology",
  },
  {
    id: "emma",
    name: "Emma",
    title: "Comper",
    role: "Sales Operations",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323712485/ZZPxW7fzGxpa2CPHvC9bdx/pasted_file_1F17yd_image_cae803fe.png",
    reportsTo: "corbin",
    department: "Sales",
  },
];

export const companyInfo = {
  name: "DewClaw Land",
  logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323712485/ZZPxW7fzGxpa2CPHvC9bdx/logo_3032f3ca.webp",
  primaryColor: "#1B4B7C",
  accentColor: "#D4AF37",
};

export const holidaysByRegion = {
  philippines: [
    { date: "2026-01-01", name: "New Year's Day", type: "Public Holiday" },
    { date: "2026-02-17", name: "Lunar New Year's Day", type: "Public Holiday" },
    { date: "2026-04-02", name: "Maundy Thursday", type: "Public Holiday" },
    { date: "2026-04-03", name: "Good Friday", type: "Public Holiday" },
    { date: "2026-04-04", name: "Black Saturday", type: "Public Holiday" },
    { date: "2026-04-09", name: "The Day of Valor", type: "Public Holiday" },
    { date: "2026-05-01", name: "Labor Day", type: "Public Holiday" },
    { date: "2026-06-12", name: "Independence Day", type: "Public Holiday" },
    { date: "2026-08-31", name: "National Heroes Day", type: "Public Holiday" },
    { date: "2026-11-30", name: "Bonifacio Day", type: "Public Holiday" },
    { date: "2026-12-25", name: "Christmas Day", type: "Public Holiday" },
    { date: "2026-12-30", name: "Rizal Day", type: "Public Holiday" },
  ],
  egypt: [
    { date: "2026-01-07", name: "Coptic Christmas Day", type: "Public Holiday" },
    { date: "2026-01-25", name: "Revolution Day", type: "Public Holiday" },
    { date: "2026-03-19", name: "Eid al-Fitr Holiday", type: "Public Holiday" },
    { date: "2026-03-20", name: "Eid al-Fitr Holiday", type: "Public Holiday" },
    { date: "2026-03-21", name: "Eid al-Fitr Holiday", type: "Public Holiday" },
    { date: "2026-03-22", name: "Eid al-Fitr Holiday", type: "Public Holiday" },
    { date: "2026-03-23", name: "Eid al-Fitr Holiday", type: "Public Holiday" },
    { date: "2026-04-13", name: "Spring Festival", type: "Public Holiday" },
    { date: "2026-04-25", name: "Sinai Liberation Day", type: "Public Holiday" },
    { date: "2026-05-01", name: "Labor Day", type: "Public Holiday" },
    { date: "2026-05-26", name: "Eid al-Adha Holiday", type: "Public Holiday" },
    { date: "2026-05-27", name: "Eid al-Adha Holiday", type: "Public Holiday" },
    { date: "2026-05-28", name: "Eid al-Adha Holiday", type: "Public Holiday" },
    { date: "2026-05-29", name: "Eid al-Adha Holiday", type: "Public Holiday" },
    { date: "2026-06-30", name: "June 30 Revolution", type: "Public Holiday" },
    { date: "2026-07-23", name: "Revolution Day July 23", type: "Public Holiday" },
    { date: "2026-10-06", name: "Armed Forces Day", type: "Public Holiday" },
  ],
  us: [
    { date: "2026-01-01", name: "New Year's Day", type: "Federal Holiday" },
    { date: "2026-01-19", name: "Martin Luther King Jr. Day", type: "Federal Holiday" },
    { date: "2026-02-16", name: "Presidents' Day", type: "Federal Holiday" },
    { date: "2026-05-25", name: "Memorial Day", type: "Federal Holiday" },
    { date: "2026-06-19", name: "Juneteenth", type: "Federal Holiday" },
    { date: "2026-07-04", name: "Independence Day", type: "Federal Holiday" },
    { date: "2026-09-07", name: "Labor Day", type: "Federal Holiday" },
    { date: "2026-10-12", name: "Columbus Day", type: "Federal Holiday" },
    { date: "2026-11-11", name: "Veterans Day", type: "Federal Holiday" },
    { date: "2026-11-26", name: "Thanksgiving Day", type: "Federal Holiday" },
    { date: "2026-12-25", name: "Christmas Day", type: "Federal Holiday" },
  ],
  africa: [
    { date: "2026-01-01", name: "New Year's Day", type: "Public Holiday" },
    { date: "2026-03-21", name: "Human Rights Day", type: "Public Holiday" },
    { date: "2026-04-03", name: "Good Friday", type: "Public Holiday" },
    { date: "2026-04-06", name: "Family Day", type: "Public Holiday" },
    { date: "2026-04-27", name: "Freedom Day", type: "Public Holiday" },
    { date: "2026-05-01", name: "Workers' Day", type: "Public Holiday" },
    { date: "2026-06-16", name: "Youth Day", type: "Public Holiday" },
    { date: "2026-08-09", name: "National Women's Day", type: "Public Holiday" },
    { date: "2026-09-24", name: "Heritage Day", type: "Public Holiday" },
    { date: "2026-12-16", name: "Day of Reconciliation", type: "Public Holiday" },
    { date: "2026-12-25", name: "Christmas Day", type: "Public Holiday" },
    { date: "2026-12-26", name: "Day of Goodwill", type: "Public Holiday" },
  ],
};
