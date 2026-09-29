import {
  ArrowRight,
  Check,
  ShieldCheck,
  Stethoscope,
  Clock3,
} from "lucide-react"

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT SIDE */}
          <div>

            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">

              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />

              Healthcare built for men

            </div>


            {/* Heading */}
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">

              Take control of{" "}

              <span className="text-emerald-600">
                your health.
              </span>

            </h1>


            {/* Description */}
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">

              Expert healthcare, trusted doctors and practical guidance
              designed around men's health — private, simple and accessible.

            </p>


            {/* CTA buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={() =>
                  document
                    .getElementById("consultation")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white shadow-lg shadow-emerald-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-700"
              >

                Book a Consultation

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />

              </button>


              <button
                onClick={() =>
                  document
                    .getElementById("health")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-100"
              >

                Explore Health Topics

              </button>

            </div>


            {/* Trust points */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">

              <div className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-emerald-600" />
                Private & secure
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={17} className="text-emerald-600" />
                24/7 support
              </div>

              <div className="flex items-center gap-2">
                <Stethoscope size={17} className="text-emerald-600" />
                Trusted specialists
              </div>

            </div>


            {/* Stats */}
            <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-slate-200 py-6">

              <div>
                <p className="text-2xl font-bold text-slate-950 md:text-3xl">
                  10K+
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Patients
                </p>
              </div>


              <div className="border-l border-slate-200 pl-5">
                <p className="text-2xl font-bold text-slate-950 md:text-3xl">
                  50+
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Specialists
                </p>
              </div>


              <div className="border-l border-slate-200 pl-5">
                <p className="text-2xl font-bold text-slate-950 md:text-3xl">
                  24/7
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Support
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">

            {/* Main card */}
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 p-6 shadow-2xl shadow-slate-900/20 md:p-8">

              {/* Card glow */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />

              <div className="relative">

                {/* Top row */}
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm font-medium text-slate-400">
                      Your health
                    </p>

                    <p className="mt-1 text-xl font-bold text-white">
                      comes first.
                    </p>
                  </div>


                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400">

                    <Stethoscope size={23} />

                  </div>

                </div>


                {/* Health visual */}
                <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-sm text-slate-400">
                        Health overview
                      </p>

                      <p className="mt-1 text-2xl font-bold text-white">
                        Looking good
                      </p>

                    </div>


                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white">

                      <Check size={23} strokeWidth={3} />

                    </div>

                  </div>


                  {/* Progress */}
                  <div className="mt-7">

                    <div className="mb-2 flex justify-between text-xs text-slate-400">

                      <span>Overall wellbeing</span>

                      <span>82%</span>

                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/10">

                      <div className="h-full w-[82%] rounded-full bg-emerald-500" />

                    </div>

                  </div>


                  {/* Health categories */}
                  <div className="mt-7 grid grid-cols-2 gap-3">

                    <div className="rounded-2xl bg-white/5 p-4">

                      <p className="text-xs text-slate-400">
                        Fitness
                      </p>

                      <p className="mt-1 font-semibold text-white">
                        On track
                      </p>

                    </div>


                    <div className="rounded-2xl bg-white/5 p-4">

                      <p className="text-xs text-slate-400">
                        Nutrition
                      </p>

                      <p className="mt-1 font-semibold text-white">
                        Good
                      </p>

                    </div>


                    <div className="rounded-2xl bg-white/5 p-4">

                      <p className="text-xs text-slate-400">
                        Sleep
                      </p>

                      <p className="mt-1 font-semibold text-white">
                        7h 42m
                      </p>

                    </div>


                    <div className="rounded-2xl bg-white/5 p-4">

                      <p className="text-xs text-slate-400">
                        Checkups
                      </p>

                      <p className="mt-1 font-semibold text-emerald-400">
                        Up to date
                      </p>

                    </div>

                  </div>

                </div>


                {/* Doctor card */}
                <div className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white p-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">
                    DR
                  </div>


                  <div className="min-w-0 flex-1">

                    <div className="flex items-center gap-2">

                      <p className="font-semibold text-slate-900">
                        Expert consultation
                      </p>

                      <span className="h-2 w-2 rounded-full bg-emerald-500" />

                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      Connect with a trusted specialist
                    </p>

                  </div>


                  <ArrowRight
                    size={18}
                    className="text-slate-400"
                  />

                </div>

              </div>

            </div>


            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">

                  <ShieldCheck size={20} />

                </div>

                <div>

                  <p className="text-sm font-bold text-slate-900">
                    Private care
                  </p>

                  <p className="text-xs text-slate-500">
                    Always confidential
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero