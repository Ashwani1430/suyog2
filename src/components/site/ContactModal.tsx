import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  CheckCircle2,
  Loader2,
  Lock,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import { PRIMARY_PHONE, PRIMARY_TEL } from "@/data/suyog";
import { sendEnquiryEmail } from "@/lib/send-enquiry";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Global event name
export const OPEN_CONTACT_MODAL_EVENT = "suyog:open-contact-modal";

// Global helper function callable anywhere
export function openContactModal(solutionName?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(OPEN_CONTACT_MODAL_EVENT, {
        detail: { solution: solutionName },
      }),
    );
  }
}

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    solution: "TallyPrime Licensing & Upgrades",
    message: "",
  });

  // Listen for the open event globally
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ solution?: string }>;
      if (customEvent.detail?.solution) {
        setFormData((prev) => ({
          ...prev,
          solution: customEvent.detail.solution || prev.solution,
        }));
      }
      setOpen(true);
    };

    window.addEventListener(OPEN_CONTACT_MODAL_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_CONTACT_MODAL_EVENT, handleOpen);
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await sendEnquiryEmail({
        data: {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          solution: formData.solution,
          message: formData.message.trim() || `Consultation requested for ${formData.solution}`,
        },
      });
      setSubmitting(false);
      setFormSubmitted(true);
      toast.success("Enquiry sent successfully! Our team will contact you shortly.");
    } catch (err: unknown) {
      console.error(err);
      setSubmitting(false);
      const msg = err instanceof Error ? err.message : "Failed to send request. Please try again.";
      toast.error(msg);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg rounded-3xl border border-blue-100 bg-white p-6 sm:p-8 shadow-2xl">
        <DialogHeader className="text-left space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 w-fit border border-blue-200/60">
            <ShieldCheck className="size-3.5 text-blue-600" />
            <span>Authorized Tally 5-Star Partner</span>
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
            Get in Touch with SUYOG
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-slate-500">
            Speak directly with our senior Tally consultants for licenses, deployment, customizations, or support.
          </DialogDescription>
        </DialogHeader>

        {/* Direct Phone Assistance Banner */}
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-blue-50/70 p-3 border border-blue-100 text-xs text-slate-700">
          <span className="font-semibold text-slate-700">Need instant assistance?</span>
          <a
            href={`tel:${PRIMARY_TEL}`}
            className="inline-flex items-center gap-1.5 font-bold text-blue-700 hover:text-blue-800 hover:underline"
          >
            <Phone className="size-3.5 text-blue-600" />
            <span>{PRIMARY_PHONE}</span>
          </a>
        </div>

        {formSubmitted ? (
          <div className="flex flex-col items-center justify-center py-8 text-center space-y-3">
            <div className="grid size-14 place-items-center rounded-2xl bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="size-8" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Thank You! Inquiry Received</h4>
            <p className="text-xs text-slate-500 max-w-sm">
              Our senior Tally consultant will review your requirements and reach out to you within 2 business hours.
            </p>
            <button
              type="button"
              onClick={() => {
                setFormSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  mobile: "",
                  solution: "TallyPrime Licensing & Upgrades",
                  message: "",
                });
              }}
              className="mt-2 text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="space-y-3.5 mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98891 07777"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Required Solution
                </label>
                <select
                  value={formData.solution}
                  onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer"
                >
                  <option value="TallyPrime Licensing & Upgrades">TallyPrime Licensing & Upgrades</option>
                  <option value="Tally on Cloud (Anywhere Access)">Tally on Cloud (Anywhere Access)</option>
                  <option value="TallyPrime Server (High Concurrency)">TallyPrime Server (High Concurrency)</option>
                  <option value="TallyPrime with WhatsApp">TallyPrime with WhatsApp</option>
                  <option value="TallyDrive Cloud Backup">TallyDrive Cloud Backup</option>
                  <option value="TallyIra AI Accounting & Invoice OCR">TallyIra AI Accounting & Invoice OCR</option>
                  <option value="TSS Renewal & Enterprise Support">TSS Renewal & Enterprise Support</option>
                  <option value="Custom TDL & ERP API Integration">Custom TDL & API Integration</option>
                  <option value="Industry Solution (EduSoft, BuildSoft, etc.)">Industry Specific Software</option>
                  <option value="General Consultation">General Consultation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                How can we help you?
              </label>
              <textarea
                rows={3}
                placeholder="Share details about your users, requirements or business needs..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <Lock className="size-3 text-emerald-500" />
                Your information is strictly confidential
              </span>
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer active:scale-95 disabled:opacity-60 transition-all"
              >
                {submitting ? (
                  <>
                    <Loader2 className="size-3.5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="size-3.5" />
                    <span>Send Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
