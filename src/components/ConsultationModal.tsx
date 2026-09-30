import { useEffect, useState } from "react";
import { CalendarDays, CheckCircle2, X } from "lucide-react";

type ConsultationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/70 px-4 py-6 backdrop-blur-sm sm:px-6"
      onClick={handleClose}
    >
      <div
        className="my-auto w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        {!submitted ? (
          <>
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
                  <CalendarDays size={17} />
                  Consultation
                </div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Book a consultation
                </h2>

                <p className="mt-3 max-w-xl leading-7 text-slate-600">
                  Tell us a little about yourself and choose a preferred
                  appointment time. Our team will contact you to confirm the
                  consultation.
                </p>
              </div>

              <button
                type="button"
                onClick={handleClose}
                aria-label="Close consultation form"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={22} />
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              <div>
                <label
                  htmlFor="consultation-name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Full Name
                </label>

                <input
                  id="consultation-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="consultation-email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email
                  </label>

                  <input
                    id="consultation-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="consultation-phone"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Phone
                  </label>

                  <input
                    id="consultation-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="consultation-doctor"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Preferred Specialist
                </label>

                <select
                  id="consultation-doctor"
                  name="doctor"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                >
                  <option value="" disabled>
                    Select a specialist
                  </option>
                  <option>Dr. Arjun Mehta — Cardiologist</option>
                  <option>Dr. Rahul Sharma — Men's Health Specialist</option>
                  <option>Dr. Vikram Rao — Dermatologist</option>
                  <option>Dr. Karan Singh — Mental Health Specialist</option>
                </select>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="consultation-date"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Preferred Date
                  </label>

                  <input
                    id="consultation-date"
                    name="date"
                    type="date"
                    required
                    min={today}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="consultation-time"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Preferred Time
                  </label>

                  <select
                    id="consultation-time"
                    name="time"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  >
                    <option value="" disabled>
                      Select a time
                    </option>
                    <option>09:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>02:00 PM</option>
                    <option>03:00 PM</option>
                    <option>04:00 PM</option>
                    <option>05:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="consultation-reason"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Reason for Consultation
                </label>

                <textarea
                  id="consultation-reason"
                  name="reason"
                  rows={4}
                  placeholder="Briefly describe what you'd like help with..."
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                />
              </div>

              <div className="rounded-2xl bg-emerald-50 px-5 py-4 text-sm leading-6 text-emerald-800">
                Your information is used only to process the consultation
                request.
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-emerald-600 px-6 py-4 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 active:scale-[0.99]"
              >
                Submit Consultation Request
              </button>
            </form>
          </>
        ) : (
          <div className="py-10 text-center sm:py-14">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 size={42} />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Request submitted
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              You're all set!
            </h2>

            <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-600">
              Your consultation request has been submitted successfully. Our
              team will contact you to confirm the appointment details.
            </p>

            <button
              type="button"
              onClick={handleClose}
              className="mt-8 rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white transition hover:bg-emerald-700"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConsultationModal;