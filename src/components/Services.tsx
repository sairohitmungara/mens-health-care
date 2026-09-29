import {
  ArrowRight,
  CalendarCheck,
  MessageCircle,
  Stethoscope,
} from "lucide-react";

function Services() {
  const goToDoctors = () => {
    document.getElementById("doctors")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const showCheckups = () => {
    alert(
      "Health checkups include preventive screenings and regular health assessments."
    );
  };

  const showSupport = () => {
    alert(
      "Online support will help you access healthcare information and guidance."
    );
  };

  const showAllServices = () => {
    alert(
      "More healthcare services will be available soon.\n\nFor now, you can explore the services shown below."
    );
  };

  return (
    <section
      id="services"
      className="bg-slate-50 px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
              Our services
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Healthcare that fits your life.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Get the care you need without unnecessary complexity.
            </p>
          </div>

          <button
            type="button"
            onClick={showAllServices}
            className="flex w-fit items-center gap-2 font-semibold text-emerald-600 transition hover:text-emerald-700"
          >
            View all services
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Doctor Consultation */}
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
              <Stethoscope size={27} />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-950">
              Doctor Consultation
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Connect with healthcare professionals and discuss your concerns
              in a private consultation.
            </p>

            <button
              type="button"
              onClick={goToDoctors}
              className="mt-8 flex items-center gap-2 font-semibold text-emerald-600 transition hover:text-emerald-700"
            >
              Find a doctor
              <ArrowRight size={18} />
            </button>
          </article>

          {/* Health Checkups */}
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <CalendarCheck size={27} />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-950">
              Health Checkups
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Stay informed about your health with regular screenings and
              preventive checkups.
            </p>

            <button
              type="button"
              onClick={showCheckups}
              className="mt-8 flex items-center gap-2 font-semibold text-emerald-600 transition hover:text-emerald-700"
            >
              Explore checkups
              <ArrowRight size={18} />
            </button>
          </article>

          {/* Online Support */}
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
              <MessageCircle size={27} />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-950">
              Online Support
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Get convenient access to health information and support whenever
              you need it.
            </p>

            <button
              type="button"
              onClick={showSupport}
              className="mt-8 flex items-center gap-2 font-semibold text-emerald-600 transition hover:text-emerald-700"
            >
              Learn more
              <ArrowRight size={18} />
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;