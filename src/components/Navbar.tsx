import { CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  const openConsultation = () => {
    setMenuOpen(false);
    setConsultationOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16">
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

            <span className="text-2xl font-bold tracking-tight text-slate-950">
              Health
            </span>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            <button
              type="button"
              onClick={() => scrollToSection("health")}
              className="font-medium text-slate-600 transition hover:text-emerald-600"
            >
              Health Topics
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("doctors")}
              className="font-medium text-slate-600 transition hover:text-emerald-600"
            >
              Doctors
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("articles")}
              className="font-medium text-slate-600 transition hover:text-emerald-600"
            >
              Articles
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="font-medium text-slate-600 transition hover:text-emerald-600"
            >
              About
            </button>
          </nav>

          <button
            type="button"
            onClick={openConsultation}
            className="hidden items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700 md:flex"
          >
            <CalendarDays size={18} />
            Book a Consultation
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl p-2 text-slate-700 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              <button
                type="button"
                onClick={() => scrollToSection("health")}
                className="text-left font-medium text-slate-700"
              >
                Health Topics
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("doctors")}
                className="text-left font-medium text-slate-700"
              >
                Doctors
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("articles")}
                className="text-left font-medium text-slate-700"
              >
                Articles
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("about")}
                className="text-left font-medium text-slate-700"
              >
                About
              </button>

              <button
                type="button"
                onClick={openConsultation}
                className="flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 font-semibold text-white"
              >
                <CalendarDays size={18} />
                Book a Consultation
              </button>
            </div>
          </div>
        )}
      </header>

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </>
  );
}

export default Navbar;