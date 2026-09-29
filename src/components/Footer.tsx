import {
  HeartPulse,
  Brain,
  Dumbbell,
  Activity,
  Stethoscope,
} from "lucide-react";

function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const showComingSoon = (message: string) => {
    alert(message);
  };

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-lg font-bold text-white">
                M+
              </span>

              <span className="text-2xl font-bold">
                Health
              </span>
            </button>

            <p className="mt-6 max-w-xs leading-7 text-slate-400">
              Healthcare designed around men's health — private,
              simple and accessible.
            </p>
          </div>

          {/* Health */}
          <div>
            <h3 className="text-lg font-bold">
              Health
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              <button
                type="button"
                onClick={() => scrollToSection("health")}
                className="flex items-center gap-3 text-left text-slate-400 transition hover:text-emerald-400"
              >
                <HeartPulse size={17} />
                Heart Health
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("health")}
                className="flex items-center gap-3 text-left text-slate-400 transition hover:text-emerald-400"
              >
                <Brain size={17} />
                Mental Wellbeing
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("health")}
                className="flex items-center gap-3 text-left text-slate-400 transition hover:text-emerald-400"
              >
                <Dumbbell size={17} />
                Fitness & Nutrition
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("health")}
                className="flex items-center gap-3 text-left text-slate-400 transition hover:text-emerald-400"
              >
                <Activity size={17} />
                Sexual Health
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("health")}
                className="text-left text-slate-400 transition hover:text-emerald-400"
              >
                Preventive Care
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold">
              Services
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              <button
                type="button"
                onClick={() => scrollToSection("doctors")}
                className="flex items-center gap-3 text-left text-slate-400 transition hover:text-emerald-400"
              >
                <Stethoscope size={17} />
                Doctor Consultation
              </button>

              <button
                type="button"
                onClick={() =>
                  showComingSoon(
                    "Health checkups include preventive screenings and regular health assessments."
                  )
                }
                className="text-left text-slate-400 transition hover:text-emerald-400"
              >
                Health Checkups
              </button>

              <button
                type="button"
                onClick={() =>
                  showComingSoon(
                    "Online support will help you access healthcare information and guidance."
                  )
                }
                className="text-left text-slate-400 transition hover:text-emerald-400"
              >
                Online Support
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("doctors")}
                className="text-left text-slate-400 transition hover:text-emerald-400"
              >
                Find a Doctor
              </button>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold">
              Company
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              <button
                type="button"
                onClick={() => scrollToSection("about")}
                className="text-left text-slate-400 transition hover:text-emerald-400"
              >
                About Us
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("articles")}
                className="text-left text-slate-400 transition hover:text-emerald-400"
              >
                Articles
              </button>

              <button
                type="button"
                onClick={() =>
                  showComingSoon(
                    "Contact information will be available soon."
                  )
                }
                className="text-left text-slate-400 transition hover:text-emerald-400"
              >
                Contact
              </button>

              <button
                type="button"
                onClick={() =>
                  showComingSoon(
                    "Our Privacy Policy will be available soon."
                  )
                }
                className="text-left text-slate-400 transition hover:text-emerald-400"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-slate-800" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 M+ Health. All rights reserved.
          </p>

          <p>
            Healthcare built for men.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;