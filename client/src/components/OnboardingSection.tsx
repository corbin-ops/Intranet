import { Card } from "@/components/ui/card";
import { CheckCircle2, FileText, Users, Zap, Calendar, Video, BookOpen, Play, Heart, Lightbulb, Target } from "lucide-react";
import { useState } from "react";

interface OnboardingStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
  color: string;
}

const onboardingSteps: OnboardingStep[] = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Pre-Onboarding",
    description: "Complete these steps before your first day",
    items: [
      "Review company handbook and policies",
      "Complete background check and verification",
      "Sign employment and confidentiality agreements",
      "Arrange IT equipment and access credentials",
    ],
    color: "from-blue-50 to-cyan-50 border-blue-200",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "First Week",
    description: "Meet the team and understand your role",
    items: [
      "Meet with your direct manager and team",
      "Complete company orientation and training",
      "Set up your workspace and technology",
      "Review your job description and expectations",
    ],
    color: "from-purple-50 to-pink-50 border-purple-200",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "First Month",
    description: "Get up to speed with processes and systems",
    items: [
      "Complete role-specific training modules",
      "Shadow team members on key processes",
      "Understand company systems and tools",
      "Establish working relationships with colleagues",
    ],
    color: "from-orange-50 to-amber-50 border-orange-200",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "First 90 Days",
    description: "Achieve key milestones and demonstrate competency",
    items: [
      "Complete all required certifications",
      "Deliver first independent project or task",
      "Receive feedback from manager and team",
      "Schedule 90-day review meeting",
    ],
    color: "from-green-50 to-emerald-50 border-green-200",
  },
];

export default function OnboardingSection() {
  const [expandedTab, setExpandedTab] = useState<string>("overview");

  return (
    <div className="space-y-6">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 text-white shadow-xl">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-3">🎉 Welcome to DewClaw Land!</h2>
          <p className="text-lg text-blue-50 mb-4">
            We're thrilled to have you join our team. This guide will help you succeed and feel at home from day one.
          </p>
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              <span>We Care About You</span>
            </div>
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              <span>We Support Growth</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              <span>We Aim High</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 border-b-2 border-slate-200 pb-4">
        <button
          onClick={() => setExpandedTab("overview")}
          className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
            expandedTab === "overview"
              ? "bg-blue-600 text-white shadow-lg scale-105"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          📋 Overview
        </button>
        <button
          onClick={() => setExpandedTab("timeoff")}
          className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
            expandedTab === "timeoff"
              ? "bg-emerald-600 text-white shadow-lg scale-105"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          🌴 Time Off Policy
        </button>
        <button
          onClick={() => setExpandedTab("culture")}
          className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
            expandedTab === "culture"
              ? "bg-purple-600 text-white shadow-lg scale-105"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          🌍 Company Culture
        </button>
      </div>

      {/* Overview Tab */}
      {expandedTab === "overview" && (
        <div className="space-y-8">
          {/* Onboarding Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Your Onboarding Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {onboardingSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${step.color} border-2 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">{step.icon}</div>
                    <div>
                      <div className="inline-block bg-white px-3 py-1 rounded-full text-xs font-semibold text-slate-700 mb-2">
                        Phase {idx + 1}
                      </div>
                      <h4 className="font-bold text-slate-900 text-lg">{step.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{step.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {step.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-sm text-slate-700">
                        <span className="text-lg mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Tips */}
          <Card className="p-8 border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 shadow-lg">
            <div className="flex gap-6">
              <div className="text-6xl flex-shrink-0">💡</div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 mb-4 text-lg">Pro Tips for Success</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex gap-3">
                    <span className="text-2xl">🎯</span>
                    <p className="text-sm text-slate-700"><strong>Ask Questions:</strong> We encourage learning and curiosity</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">🤝</span>
                    <p className="text-sm text-slate-700"><strong>Build Relationships:</strong> Connect with team members early</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">📝</span>
                    <p className="text-sm text-slate-700"><strong>Document Learning:</strong> Keep notes for future reference</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">📹</span>
                    <p className="text-sm text-slate-700"><strong>Cameras ON:</strong> Stay visible and connected in meetings</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Time Off Policy Tab */}
      {expandedTab === "timeoff" && (
        <div className="space-y-8">
          {/* Work-Life Balance Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-8 text-white shadow-xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <div className="flex gap-4 items-start">
                <div className="text-6xl flex-shrink-0">🌴</div>
                <div>
                  <h3 className="font-bold text-2xl mb-2">We Support Work-Life Balance</h3>
                  <p className="text-emerald-50 text-lg">
                    A well-rested team is a productive team. We're committed to supporting your wellbeing while ensuring our clients always have the coverage they need.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PTO Breakdown */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">📊 Paid Time Off (PTO) Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="text-4xl mb-3">⏳</div>
                <p className="font-bold text-red-900 mb-2 text-lg">First 3 Months</p>
                <p className="text-sm text-red-800 font-semibold mb-2">0 paid days</p>
                <p className="text-xs text-red-700">Probationary period—focus on onboarding and learning</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="text-4xl mb-3">✅</div>
                <p className="font-bold text-green-900 mb-2 text-lg">After 3 Months</p>
                <p className="text-sm text-green-800 font-semibold mb-2">10 paid days/year</p>
                <p className="text-xs text-green-700">Accrued monthly (0.83 days per month)</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="text-4xl mb-3">➕</div>
                <p className="font-bold text-blue-900 mb-2 text-lg">Additional Days</p>
                <p className="text-sm text-blue-800 font-semibold mb-2">Unpaid (if approved)</p>
                <p className="text-xs text-blue-700">Any time beyond 10 paid days requires manager approval</p>
              </div>
            </div>
          </div>

          {/* Time Off Request Process */}
          <Card className="p-8 border-2 border-slate-200 shadow-lg">
            <h4 className="font-bold text-slate-900 mb-6 text-lg">📝 Time Off Request Process</h4>
            <div className="space-y-4">
              {[
                { num: "1", title: "Submit Request 14 Days in Advance", desc: "Provide your manager with at least 14 days' notice before your planned time off" },
                { num: "2", title: "Discuss Coverage", desc: "Work with your manager to ensure your responsibilities are covered during your absence" },
                { num: "3", title: "Get Approval", desc: "Your manager will confirm approval once work is on track and coverage is arranged" },
                { num: "4", title: "Update Calendar", desc: "Mark your time off on the shared calendar so the team knows you'll be away" },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 pb-4 border-b border-slate-200 last:border-b-0">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center font-bold text-lg">
                    {step.num}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{step.title}</p>
                    <p className="text-sm text-slate-600 mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Key Principles */}
          <Card className="p-8 border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50 shadow-lg">
            <h4 className="font-bold text-slate-900 mb-6 text-lg">🎯 Our Time Off Philosophy</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:shadow-lg transition-all">
                <p className="text-3xl mb-3">⚡</p>
                <p className="font-bold text-slate-900 mb-2">Work First</p>
                <p className="text-sm text-slate-600">Your projects and responsibilities are your priority. Time off is approved when your work is on track.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:shadow-lg transition-all">
                <p className="text-3xl mb-3">🤝</p>
                <p className="font-bold text-slate-900 mb-2">Coverage Matters</p>
                <p className="text-sm text-slate-600">We ensure that your absence doesn't leave your team hanging. Coordination is essential.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:shadow-lg transition-all">
                <p className="text-3xl mb-3">😊</p>
                <p className="font-bold text-slate-900 mb-2">Balance Valued</p>
                <p className="text-sm text-slate-600">We genuinely want you to recharge. A balanced team member is a happy and productive one.</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Company Culture Tab */}
      {expandedTab === "culture" && (
        <div className="space-y-8">
          {/* Culture Video */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="DewClaw Land Culture"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4 bg-slate-800 text-white">
              <h3 className="font-semibold">Our Culture in Action</h3>
              <p className="text-sm text-slate-300">See how we work together and support each other</p>
            </div>
          </div>

          {/* Culture Values */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <p className="text-4xl mb-3">❤️</p>
                <h4 className="font-bold text-slate-900 mb-2 text-lg">Customer First</h4>
                <p className="text-sm text-slate-700">We prioritize our clients' needs and deliver exceptional service in every interaction.</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <p className="text-4xl mb-3">⭐</p>
                <h4 className="font-bold text-slate-900 mb-2 text-lg">Excellence</h4>
                <p className="text-sm text-slate-700">We strive for the highest standards in everything we do, no exceptions.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <p className="text-4xl mb-3">🤝</p>
                <h4 className="font-bold text-slate-900 mb-2 text-lg">Teamwork</h4>
                <p className="text-sm text-slate-700">We succeed together through collaboration, support, and mutual respect.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <p className="text-4xl mb-3">💡</p>
                <h4 className="font-bold text-slate-900 mb-2 text-lg">Innovation</h4>
                <p className="text-sm text-slate-700">We embrace new ideas and continuously improve our processes and solutions.</p>
              </div>
            </div>
          </div>

          {/* Remote Work Etiquette */}
          <Card className="p-8 border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50 shadow-lg">
            <h4 className="font-bold text-slate-900 mb-6 text-lg">🏠 Remote Work Etiquette</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <p className="text-2xl mb-3">📹</p>
                <p className="font-semibold text-slate-900 mb-2">Cameras ON</p>
                <p className="text-sm text-slate-600">Keep your camera on during team meetings and client calls to stay connected and professional.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <p className="text-2xl mb-3">🎧</p>
                <p className="font-semibold text-slate-900 mb-2">Quiet Space</p>
                <p className="text-sm text-slate-600">Find a quiet, professional background for meetings to minimize distractions.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <p className="text-2xl mb-3">⏰</p>
                <p className="font-semibold text-slate-900 mb-2">Be On Time</p>
                <p className="text-sm text-slate-600">Join meetings a few minutes early to test your audio and video setup.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <p className="text-2xl mb-3">💬</p>
                <p className="font-semibold text-slate-900 mb-2">Communicate Clearly</p>
                <p className="text-sm text-slate-600">Use clear communication and ask clarifying questions to avoid misunderstandings.</p>
              </div>
            </div>
          </Card>

          {/* Diversity & Inclusion */}
          <Card className="p-8 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg">
            <h4 className="font-bold text-slate-900 mb-4 text-lg">🌈 Diversity & Inclusion</h4>
            <p className="text-slate-700 mb-4">
              At DewClaw Land, we celebrate diversity and believe that different perspectives make us stronger. We're committed to creating an inclusive workplace where everyone feels valued, respected, and empowered to contribute their best work.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <p className="font-semibold text-slate-900 mb-2">✓ Equal Opportunity</p>
                <p className="text-xs text-slate-600">We provide equal opportunities for all employees regardless of background.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <p className="font-semibold text-slate-900 mb-2">✓ Open Dialogue</p>
                <p className="text-xs text-slate-600">We encourage open conversations about diversity and inclusion topics.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <p className="font-semibold text-slate-900 mb-2">✓ Zero Tolerance</p>
                <p className="text-xs text-slate-600">We have zero tolerance for discrimination or harassment of any kind.</p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
