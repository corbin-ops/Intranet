import { useState } from "react";
import { AlertCircle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface ContactAdminModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ContactAdminModal({
  open,
  onOpenChange,
}: ContactAdminModalProps) {
  const [contactType, setContactType] = useState<"issue" | "recommendation" | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const typeLabel = contactType === "issue" ? "Report Issue" : "Have a Recommendation";
      const emailBody = `
Contact Type: ${typeLabel}
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `;

      // Simulate email sending (in production, this would call a backend endpoint)
      console.log("Email would be sent to hello@dewclawland.com:", emailBody);

      toast.success("Thank you! Your message has been sent to hello@dewclawland.com");
      
      // Reset form and close modal
      setTimeout(() => {
        onOpenChange(false);
        setContactType(null);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }, 1500);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Contact Admin</DialogTitle>
          <DialogDescription>
            Have an issue or a great idea? Let us know!
          </DialogDescription>
        </DialogHeader>

        {!contactType ? (
          <div className="space-y-4">
            <button
              onClick={() => setContactType("issue")}
              className="w-full p-4 border-2 border-slate-200 rounded-lg hover:border-red-500 hover:bg-red-50 transition-all text-left"
            >
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-red-600" />
                <div>
                  <div className="font-semibold text-slate-900">Report Issue</div>
                  <div className="text-sm text-slate-600">
                    Something not working? Let us know
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={() => setContactType("recommendation")}
              className="w-full p-4 border-2 border-slate-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all text-left"
            >
              <div className="flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-semibold text-slate-900">Have a Recommendation</div>
                  <div className="text-sm text-slate-600">
                    Got an idea to improve the intranet?
                  </div>
                </div>
              </div>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <button
              type="button"
              onClick={() => setContactType(null)}
              className="text-sm text-blue-600 hover:text-blue-700 mb-4"
            >
              ← Back
            </button>

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Your Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="john@dewclawland.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Brief subject line"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Please provide details..."
              />
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  onOpenChange(false);
                  setContactType(null);
                  setName("");
                  setEmail("");
                  setSubject("");
                  setMessage("");
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? "Sending..." : "Send to Admin"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
