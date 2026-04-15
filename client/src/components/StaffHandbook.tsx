import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function StaffHandbook() {
  const [expandedSection, setExpandedSection] = useState<string | null>('getting-started');

  const sections = [
    {
      id: 'getting-started',
      title: '📋 Getting Started',
      content: `
        <h3 class="font-bold text-lg mb-3">Your First Week</h3>
        <p class="mb-3"><strong>Day 1-2: Onboarding</strong></p>
        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
          <li>Complete all required paperwork and agreements</li>
          <li>Receive access to communication platforms and tools</li>
          <li>Schedule introductory call with your project manager</li>
          <li>Review project scope and deliverables</li>
          <li>Set up your remote workspace</li>
        </ul>
        
        <p class="mb-3"><strong>Day 3-5: Orientation</strong></p>
        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
          <li>Attend team introduction meetings</li>
          <li>Complete required training modules</li>
          <li>Familiarize yourself with company processes</li>
          <li>Ask questions and clarify expectations</li>
          <li>Submit your first status update</li>
        </ul>

        <h3 class="font-bold text-lg mb-3 mt-4">Key Contacts</h3>
        <ul class="space-y-2 text-sm">
          <li><strong>Project Manager:</strong> Your primary point of contact for project-related questions</li>
          <li><strong>HR Coordinator:</strong> For administrative, payment, and policy questions</li>
          <li><strong>Technical Support:</strong> For IT and tool-related issues</li>
          <li><strong>Compliance Officer:</strong> For legal and confidentiality concerns</li>
        </ul>
      `
    },
    {
      id: 'work-environment',
      title: '💻 Work Environment & Setup',
      content: `
        <h3 class="font-bold text-lg mb-3">Home Office Essentials</h3>
        <p class="mb-3"><strong>Physical Setup</strong></p>
        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
          <li>Dedicated workspace with a desk and ergonomic chair</li>
          <li>Reliable internet connection (minimum 25 Mbps download, 5 Mbps upload)</li>
          <li>Quiet area free from distractions and background noise</li>
          <li>Proper lighting to reduce eye strain</li>
          <li>Backup power source or UPS for internet router</li>
        </ul>

        <p class="mb-3"><strong>Equipment Requirements</strong></p>
        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
          <li>Computer (laptop or desktop) meeting minimum specifications</li>
          <li>Webcam and microphone (built-in or external)</li>
          <li>Headphones for calls and focus work</li>
          <li>Phone for emergency contact</li>
          <li>Backup internet option (mobile hotspot or secondary connection)</li>
        </ul>

        <h3 class="font-bold text-lg mb-3 mt-4">Ergonomics & Health</h3>
        <p class="mb-3"><strong>Proper Desk Setup</strong></p>
        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
          <li>Monitor at eye level, 20-26 inches away</li>
          <li>Keyboard and mouse at elbow height</li>
          <li>Feet flat on floor or footrest</li>
          <li>Chair supporting natural spine curve</li>
          <li>Desk height allowing 90-degree arm angle</li>
        </ul>
      `
    },
    {
      id: 'communication',
      title: '💬 Communication Standards',
      content: `
        <h3 class="font-bold text-lg mb-3">Primary Communication Tool: Slack</h3>
        <p class="mb-4 text-sm">Slack is our main communication platform. We use it for all team collaboration, quick questions, daily updates, and real-time discussions.</p>

        <h3 class="font-bold text-lg mb-3">Response Times</h3>
        <table class="w-full text-sm mb-4 border-collapse">
          <tr class="border-b">
            <td class="py-2 font-semibold">Urgent Slack messages</td>
            <td class="py-2">Within 1 hour</td>
          </tr>
          <tr class="border-b">
            <td class="py-2 font-semibold">Regular Slack messages</td>
            <td class="py-2">Within 4 business hours</td>
          </tr>
          <tr class="border-b">
            <td class="py-2 font-semibold">Email</td>
            <td class="py-2">Within 24 business hours</td>
          </tr>
          <tr>
            <td class="py-2 font-semibold">Project updates</td>
            <td class="py-2">As scheduled (typically weekly)</td>
          </tr>
        </table>

        <h3 class="font-bold text-lg mb-3">Communication Channels</h3>
        <ul class="space-y-2 text-sm">
          <li><strong>Slack:</strong> Primary tool for all team communication, quick questions, daily updates, and team chat</li>
          <li><strong>Email:</strong> For formal communications, documentation, records, and external communications</li>
          <li><strong>Video Calls:</strong> For meetings, complex discussions, and relationship building (scheduled via Slack)</li>
          <li><strong>Project Management Tool:</strong> For task tracking and deliverable updates</li>
        </ul>

        <h3 class="font-bold text-lg mb-3 mt-4">Meeting Etiquette</h3>
        <p class="mb-2"><strong>Before the Meeting</strong></p>
        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
          <li>Join 2-3 minutes early</li>
          <li>Test your audio and video</li>
          <li>Minimize distractions</li>
          <li>Have relevant materials ready</li>
          <li>Ensure good lighting on your face</li>
        </ul>

        <p class="mb-2"><strong>During the Meeting</strong></p>
        <ul class="list-disc list-inside space-y-1 text-sm">
          <li>Keep camera on (unless otherwise stated)</li>
          <li>Mute when not speaking</li>
          <li>Avoid multitasking</li>
          <li>Take notes</li>
          <li>Participate actively</li>
        </ul>
      `
    },
    {
      id: 'time-management',
      title: '⏰ Time Management & Productivity',
      content: `
        <h3 class="font-bold text-lg mb-3">Recommended Work Schedule</h3>
        <p class="mb-3"><strong>Standard Hours</strong></p>
        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
          <li>Monday-Friday, 7 AM - 5 PM Arizona Time (AZ)</li>
          <li>Flexibility for time zone differences coordinated with your manager</li>
          <li>Coordinate with your project manager for non-standard hours</li>
        </ul>

        <h3 class="font-bold text-lg mb-3">Productivity Tips</h3>
        <p class="mb-2"><strong>Creating a Routine</strong></p>
        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
          <li>Start work at the same time each day</li>
          <li>Dress professionally (even at home)</li>
          <li>Eat breakfast before work</li>
          <li>Have a morning ritual to transition into work mode</li>
          <li>End work at a consistent time</li>
        </ul>

        <p class="mb-2"><strong>Staying Focused</strong></p>
        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
          <li>Use the Pomodoro Technique (25 min work, 5 min break)</li>
          <li>Turn off non-essential notifications</li>
          <li>Use website blockers for distracting sites during work</li>
          <li>Keep your desk organized</li>
          <li>Use background music or white noise if helpful</li>
        </ul>


      `
    },
    {
      id: 'technology',
      title: '💻 Technology & Tools',
      content: `
        <h3 class="font-bold text-lg mb-3">Required Software</h3>
        <p class="mb-2"><strong>Communication</strong></p>
        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
          <li>Slack/Microsoft Teams</li>
          <li>Zoom or Google Meet</li>
          <li>Email client</li>
        </ul>

        <p class="mb-2"><strong>Project Management</strong></p>
        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
          <li>Asana, Monday.com, or similar tool</li>
          <li>Document collaboration (Google Docs, Microsoft 365)</li>
          <li>File storage (Google Drive, Dropbox, OneDrive)</li>
        </ul>

        <h3 class="font-bold text-lg mb-3">Technical Support</h3>
        <p class="mb-3"><strong>Getting Help</strong></p>
        <ol class="list-decimal list-inside space-y-1 mb-4 text-sm">
          <li>Check the help documentation first</li>
          <li>Search for solutions online</li>
          <li>Contact technical support with detailed information</li>
        </ol>

        <h3 class="font-bold text-lg mb-3">Data Backup</h3>
        <ul class="list-disc list-inside space-y-1 text-sm">
          <li>Back up important files daily</li>
          <li>Use cloud storage for automatic backup</li>
          <li>Keep local backups on external drive</li>
          <li>Test your backup system monthly</li>
          <li>Maintain 3-2-1 backup strategy (3 copies, 2 different media, 1 offsite)</li>
        </ul>
      `
    },
    {
      id: 'security',
      title: '🔐 Security & Confidentiality',
      content: `
        <h3 class="font-bold text-lg mb-3">Information Security</h3>
        <p class="mb-3"><strong>Protecting Company Data</strong></p>
        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
          <li>Never share passwords or access credentials</li>
          <li>Use strong, unique passwords (minimum 12 characters)</li>
          <li>Enable two-factor authentication on all accounts</li>
          <li>Lock your computer when away from desk</li>
          <li>Use VPN on public WiFi</li>
          <li>Don't discuss confidential information in public spaces</li>
        </ul>

        <p class="mb-3"><strong>Device Security</strong></p>
        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
          <li>Keep operating system updated</li>
          <li>Install and maintain antivirus software</li>
          <li>Enable firewall protection</li>
          <li>Disable automatic WiFi connections</li>
          <li>Use full-disk encryption</li>
          <li>Set up automatic lock after 5 minutes of inactivity</li>
        </ul>

        <h3 class="font-bold text-lg mb-3">Confidentiality Agreement</h3>
        <p class="mb-3">As a contractor, you agree to:</p>
        <ul class="list-disc list-inside space-y-1 text-sm">
          <li>Keep all company information confidential</li>
          <li>Not disclose client information</li>
          <li>Not share project details on social media</li>
          <li>Return all company materials upon contract end</li>
          <li>Respect intellectual property rights</li>
          <li>Not compete during contract period</li>
          <li>Maintain privacy of other contractors</li>
        </ul>
      `
    },
    {
      id: 'payment',
      title: '💰 Payment & Invoicing',
      content: `
        <h3 class="font-bold text-lg mb-3">Payment Terms</h3>
        <ul class="space-y-2 text-sm mb-4">
          <li><strong>Payment Frequency:</strong> Specified in your contract</li>
          <li><strong>Payment Method:</strong> Direct deposit, Check, or PayPal</li>
          <li><strong>Invoice Deadline:</strong> Submit by agreed date</li>
          <li><strong>Currency:</strong> USD</li>
        </ul>

        <h3 class="font-bold text-lg mb-3">Invoicing Requirements</h3>
        <p class="mb-3"><strong>What to Include</strong></p>
        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
          <li>Invoice number (sequential)</li>
          <li>Invoice date</li>
          <li>Your name and contact information</li>
          <li>Company name and address</li>
          <li>Itemized list of work completed</li>
          <li>Hours worked (if hourly)</li>
          <li>Rate and total amount due</li>
          <li>Payment terms and due date</li>
        </ul>

        <p class="mb-3"><strong>Submission Process</strong></p>
        <ol class="list-decimal list-inside space-y-1 mb-4 text-sm">
          <li>Create invoice with all required information</li>
          <li>Save as PDF with filename: "Invoice_YourName_Date"</li>
          <li>Email invoice to: <strong>hello@dewclawland.com</strong> and <strong>Corbin</strong></li>
          <li>Keep copy for your records</li>
          <li>Follow up if payment is late</li>
        </ol>
        
        <p class="mb-2 text-sm"><strong>Invoice Recipients:</strong></p>
        <ul class="list-disc list-inside space-y-1 text-sm">
          <li><strong>Email:</strong> hello@dewclawland.com (primary accounts contact)</li>
          <li><strong>CC:</strong> Corbin (CEO/President - final approval)</li>
        </ul>
      `
    },
    {
      id: 'health-wellness',
      title: '❤️ Health & Wellness',
      content: `
        <h3 class="font-bold text-lg mb-3">Mental Health & Wellbeing</h3>
        <p class="mb-3"><strong>Preventing Burnout</strong></p>
        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
          <li>Maintain clear work-life boundaries</li>
          <li>Take regular breaks throughout the day</li>
          <li>Use your full lunch break away from desk</li>
          <li>Don't work on weekends unless necessary</li>
          <li>Take vacation time to recharge</li>
          <li>Maintain social connections</li>
        </ul>

        <p class="mb-3"><strong>Isolation Prevention</strong></p>
        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
          <li>Schedule regular video calls</li>
          <li>Participate in team virtual events</li>
          <li>Join online communities</li>
          <li>Work from coffee shops occasionally</li>
          <li>Maintain friendships outside work</li>
          <li>Consider co-working spaces</li>
        </ul>

        <h3 class="font-bold text-lg mb-3">Physical Health</h3>
        <p class="mb-3"><strong>Daily Movement</strong></p>
        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
          <li>Stand and stretch every hour</li>
          <li>Take a 15-30 minute walk during lunch</li>
          <li>Do light exercises or yoga</li>
          <li>Use stairs instead of elevator</li>
          <li>Maintain good posture</li>
          <li>Stay hydrated throughout day</li>
        </ul>

        <h3 class="font-bold text-lg mb-3">Work-Life Balance</h3>
        <p class="mb-3"><strong>Setting Boundaries</strong></p>
        <ul class="list-disc list-inside space-y-1 text-sm">
          <li>Define clear work hours</li>
          <li>Create physical separation from work area</li>
          <li>Communicate your availability</li>
          <li>Respect others' boundaries</li>
        </ul>
      `
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">📖 Staff Handbook</h2>
        <p className="text-blue-50 text-lg">Everything you need to know about working with DewClaw Land</p>
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="border border-slate-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors bg-slate-50"
            >
              <h3 className="text-lg font-semibold text-slate-900">{section.title}</h3>
              <ChevronDown
                className={`w-5 h-5 text-slate-600 transition-transform ${
                  expandedSection === section.id ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSection === section.id && (
              <div className="p-6 border-t border-slate-200 bg-white">
                <div
                  className="prose prose-sm max-w-none text-slate-700"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <p className="text-sm text-blue-900">
          <strong>Questions?</strong> Contact your Project Manager or HR Coordinator for clarifications about any handbook policies or procedures.
        </p>
      </div>
    </div>
  );
}
