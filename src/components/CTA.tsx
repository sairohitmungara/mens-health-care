import {
  ArrowRight,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

function CTA() {
  const openConsultation = () => {
    alert("Consultation booking will be available soon.");
  };

  const goToHealth = () => {
    document.getElementById("health")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="bg-white px-6 py-24 md:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
                About M+ Health
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Healthcare designed around men's health.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                M+ Health is designed to make men's healthcare simpler,
                more private and easier to access. Explore trusted health
                information, connect with specialists and build healthier
                everyday habits.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={openConsultation}
                  className="flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-700"
                >
                  <CalendarDays size={18} />
                  Book a Consultation
                </button>

                <button
                  type="button"
                  onClick={goToHealth}
                  className="flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600"
                >
                  Explore Health Topics
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Right Card */}
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600">
                <ShieldCheck size={28} />
              </div>

              <h3 className="mt-8 text-3xl font-bold">
                Private. Simple. Accessible.
              </h3>

              <p className="mt-5 leading-7 text-slate-300">
                From preventive care and fitness to mental wellbeing and
                specialist consultations, M+ Health brings important areas
                of men's healthcare together in one place.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-bold text-emerald-400">
                    01
                  </p>

                  <p className="mt-2 text-sm text-slate-300">
                    Trusted information
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-bold text-emerald-400">
                    02
                  </p>

                  <p className="mt-2 text-sm text-slate-300">
                    Specialist care
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-bold text-emerald-400">
                    03
                  </p>

                  <p className="mt-2 text-sm text-slate-300">
                    Preventive focus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-slate-950 px-8 py-16 text-center text-white md:px-16">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-400">
              Take the next step
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
              Your health deserves attention.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Explore health topics or connect with a specialist when
              you're ready.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={openConsultation}
                className="flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                <CalendarDays size={18} />
                Book a Consultation
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                onClick={goToHealth}
                className="rounded-full border border-slate-600 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Health Topics
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTA;