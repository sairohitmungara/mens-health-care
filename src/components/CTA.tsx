import { ArrowRight, CalendarDays } from "lucide-react";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";

function CTA() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const scrollToHealth = () => {
    document.getElementById("health")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <section className="bg-slate-50 px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-16 text-center sm:px-10 md:py-20">
            {/* Decorative background */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">
                Take the next step
              </p>

              <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
                Your health deserves attention.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Explore health topics or connect with a specialist when you're
                ready.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setConsultationOpen(true)}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 hover:shadow-xl"
                >
                  <CalendarDays size={19} />

                  Book a Consultation

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>

                <button
                  type="button"
                  onClick={scrollToHealth}
                  className="inline-flex items-center justify-center rounded-full border border-slate-600 px-7 py-4 font-semibold text-white transition hover:border-emerald-400 hover:bg-emerald-500/10"
                >
                  Explore Health Topics
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </>
  );
}

export default CTA;