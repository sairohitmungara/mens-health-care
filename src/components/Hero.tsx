import { useState } from "react";
import {
  ArrowRight,
  Check,
  Clock3,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import ConsultationModal from "./ConsultationModal";

function Hero() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const scrollToHealth = () => {
    document.getElementById("health")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <section className="overflow-hidden bg-slate-50 px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            {/* LEFT SIDE */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Healthcare built for men
              </div>

              <h1 className="mt-7 max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Take control of{" "}
                <span className="text-emerald-600">your health.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                Expert healthcare, trusted doctors and practical guidance
                designed around men's health — private, simple and accessible.
              </p>

              {/* CTA BUTTONS */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setConsultationOpen(true)}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 hover:shadow-xl"
                >
                  Book a Consultation
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>

                <button
                  type="button"
                  onClick={scrollToHealth}
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  Explore Health Topics
                </button>
              </div>

              {/* TRUST POINTS */}
              <div className="mt-9 flex flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-emerald-600" />
                  <span>Private &amp; secure</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={18} className="text-emerald-600" />
                  <span>24/7 support</span>
                </div>

                <div className="flex items-center gap-2">
                  <Stethoscope size={18} className="text-emerald-600" />
                  <span>Trusted specialists</span>
                </div>
              </div>

              {/* STATS */}
              <div className="mt-12 grid max-w-2xl grid-cols-3 border-t border-slate-200 pt-8">
                <div>
                  <p className="text-2xl font-extrabold text-slate-950 md:text-3xl">
                    10K+
                  </p>
                  <p className="mt-1 text-sm text-slate-500">Patients</p>
                </div>

                <div className="border-l border-slate-200 pl-5 md:pl-8">
                  <p className="text-2xl font-extrabold text-slate-950 md:text-3xl">
                    50+
                  </p>
                  <p className="mt-1 text-sm text-slate-500">Specialists</p>
                </div>

                <div className="border-l border-slate-200 pl-5 md:pl-8">
                  <p className="text-2xl font-extrabold text-slate-950 md:text-3xl">
                    24/7
                  </p>
                  <p className="mt-1 text-sm text-slate-500">Support</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              {/* MAIN HEALTH DASHBOARD */}
              <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-5 shadow-2xl shadow-slate-900/20 sm:p-7">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-400">
                        Your health
                      </p>

                      <h2 className="mt-1 text-2xl font-bold text-white">
                        comes first.
                      </h2>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400">
                      <Stethoscope size={23} />
                    </div>
                  </div>

                  {/* HEALTH OVERVIEW */}
                  <div className="mt-7 rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-slate-400">
                          Health overview
                        </p>

                        <p className="mt-1 text-lg font-bold text-white">
                          Looking good
                        </p>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
                        <Check size={20} />
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
                        <span>Overall wellbeing</span>
                        <span>82%</span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-slate-700">
                        <div className="h-full w-[82%] rounded-full bg-emerald-500" />
                      </div>
                    </div>

                    {/* HEALTH METRICS */}
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-slate-800/80 p-4">
                        <p className="text-xs text-slate-400">Fitness</p>
                        <p className="mt-2 font-semibold text-white">
                          On track
                        </p>
                      </div>

                      <div className="rounded-2xl bg-slate-800/80 p-4">
                        <p className="text-xs text-slate-400">Nutrition</p>
                        <p className="mt-2 font-semibold text-white">
                          Good
                        </p>
                      </div>

                      <div className="rounded-2xl bg-slate-800/80 p-4">
                        <p className="text-xs text-slate-400">Sleep</p>
                        <p className="mt-2 font-semibold text-white">
                          7h 42m
                        </p>
                      </div>

                      <div className="rounded-2xl bg-slate-800/80 p-4">
                        <p className="text-xs text-slate-400">Checkups</p>
                        <p className="mt-2 font-semibold text-emerald-400">
                          Up to date
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* EXPERT CONSULTATION CARD */}
                  <div className="mt-4 flex items-center justify-between rounded-2xl bg-white p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">
                        DR
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-bold text-slate-950">
                            Expert consultation
                          </p>

                          <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        </div>

                        <p className="mt-1 text-xs text-slate-500">
                          Connect with a trusted specialist
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setConsultationOpen(true)}
                      aria-label="Book expert consultation"
                      className="text-slate-400 transition hover:text-emerald-600"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* FLOATING PRIVATE CARE BADGE */}
              <div className="absolute -bottom-5 left-5 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:flex">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <ShieldCheck size={19} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    Private care
                  </p>

                  <p className="text-sm font-bold text-slate-900">
                    Always confidential
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHARED CONSULTATION FORM */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </>
  );
}

export default Hero;