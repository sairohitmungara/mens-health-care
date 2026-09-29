import { CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const openConsultation = () => {
    setMenuOpen(false);
    alert("Consultation booking will be available soon.");
  };

  const goHome = () => {
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-[100] border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16">
        {/* Logo */}
        <button
          type="button"
          onClick={goHome}
          className="flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-lg font-bold text-white">
            M+
          </span>

          <span className="text-2xl font-bold tracking-tight text-slate-950">
            Health
          </span>
        </button>

        {/* Desktop Navigation */}
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

        {/* Desktop Consultation */}
        <button
          type="button"
          onClick={openConsultation}
          className="hidden items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700 md:flex"
        >
          <CalendarDays size={18} />
          Book a Consultation
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-emerald-300 hover:text-emerald-600 md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-20 z-[110] border-t border-slate-200 bg-white shadow-xl md:hidden">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => scrollToSection("health")}
                className="w-full rounded-xl px-4 py-4 text-left font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                Health Topics
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("doctors")}
                className="w-full rounded-xl px-4 py-4 text-left font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                Doctors
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("articles")}
                className="w-full rounded-xl px-4 py-4 text-left font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                Articles
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("about")}
                className="w-full rounded-xl px-4 py-4 text-left font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                About
              </button>

              <div className="my-3 border-t border-slate-200" />

              <button
                type="button"
                onClick={openConsultation}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                <CalendarDays size={19} />
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;