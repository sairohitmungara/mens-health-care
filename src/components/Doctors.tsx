import { useState } from "react";

type Doctor = {
  name: string;
  specialty: string;
  experience: string;
  rating: string;
  initials: string;
};

const doctors: Doctor[] = [
  {
    name: "Dr. Arjun Mehta",
    specialty: "Cardiologist",
    experience: "12 years experience",
    rating: "4.9",
    initials: "AM",
  },
  {
    name: "Dr. Rahul Sharma",
    specialty: "Men's Health Specialist",
    experience: "9 years experience",
    rating: "4.8",
    initials: "RS",
  },
  {
    name: "Dr. Vikram Rao",
    specialty: "Dermatologist",
    experience: "11 years experience",
    rating: "4.9",
    initials: "VR",
  },
  {
    name: "Dr. Karan Singh",
    specialty: "Mental Health Specialist",
    experience: "8 years experience",
    rating: "4.7",
    initials: "KS",
  },
];

function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [bookingDoctor, setBookingDoctor] = useState<Doctor | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const closeProfile = () => {
    setSelectedDoctor(null);
  };

  const openBooking = (doctor: Doctor) => {
    setSelectedDoctor(null);
    setBookingConfirmed(false);
    setBookingDoctor(doctor);
  };

  const closeBooking = () => {
    setBookingDoctor(null);
    setBookingConfirmed(false);
  };

  const handleBooking = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBookingConfirmed(true);
  };

  const viewAllDoctors = () => {
    alert(
      "More specialists will be available soon.\n\nFor now, you can choose from the specialists shown below."
    );
  };

  return (
    <section id="doctors" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
            Meet our specialists
          </p>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-5xl font-bold tracking-tight text-slate-950">
                Care from people you can trust.
              </h2>

              <p className="mt-6 max-w-2xl text-lg text-slate-600">
                Connect with experienced healthcare professionals across
                different areas of men's health.
              </p>
            </div>

            <button
              type="button"
              onClick={viewAllDoctors}
              className="font-semibold text-emerald-600 transition hover:text-emerald-700"
            >
              View all doctors →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative h-72 bg-gradient-to-br from-emerald-50 to-slate-100 p-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Available
                </span>

                <span className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                  ⭐ {doctor.rating}
                </span>

                <div className="flex h-full items-center justify-center">
                  <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white text-4xl font-bold text-emerald-700 shadow-lg">
                    {doctor.initials}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-950">
                  {doctor.name}
                </h3>

                <p className="mt-2 font-semibold text-emerald-600">
                  {doctor.specialty}
                </p>

                <p className="mt-2 text-slate-500">
                  {doctor.experience}
                </p>

                <div className="mt-6 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedDoctor(doctor)}
                    className="flex-1 rounded-xl bg-emerald-50 px-4 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-100"
                  >
                    View Profile
                  </button>

                  <button
                    type="button"
                    onClick={() => openBooking(doctor)}
                    className="rounded-xl bg-emerald-600 px-4 py-3 text-white transition hover:bg-emerald-700"
                    aria-label={`Book consultation with ${doctor.name}`}
                  >
                    📅
                  </button>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                  <span className="text-emerald-600">✓</span>
                  Private consultation
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedDoctor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-6"
          onClick={closeProfile}
        >
          <div
            className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-2xl font-bold text-emerald-700">
                  {selectedDoctor.initials}
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-950">
                    {selectedDoctor.name}
                  </h2>

                  <p className="mt-1 font-semibold text-emerald-600">
                    {selectedDoctor.specialty}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeProfile}
                className="text-2xl text-slate-400 hover:text-slate-700"
              >
                ×
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Experience</p>
                <p className="mt-2 font-bold text-slate-950">
                  {selectedDoctor.experience}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Rating</p>
                <p className="mt-2 font-bold text-slate-950">
                  ⭐ {selectedDoctor.rating}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Availability</p>
                <p className="mt-2 font-bold text-emerald-600">
                  Available
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-950">
                About the specialist
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {selectedDoctor.name} is an experienced healthcare
                professional specializing in{" "}
                {selectedDoctor.specialty.toLowerCase()}.
                Patients can connect privately for professional guidance,
                consultation and personalized healthcare support.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openBooking(selectedDoctor)}
                className="flex-1 rounded-xl bg-emerald-600 px-6 py-4 font-semibold text-white hover:bg-emerald-700"
              >
                Book a Consultation →
              </button>

              <button
                type="button"
                onClick={closeProfile}
                className="rounded-xl border border-slate-200 px-6 py-4 font-semibold text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {bookingDoctor && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-slate-950/60 px-6 py-8"
          onClick={closeBooking}
        >
          <div
            className="my-auto w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {!bookingConfirmed ? (
              <>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
                      Book a consultation
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-slate-950">
                      Schedule your visit
                    </h2>

                    <p className="mt-2 text-slate-600">
                      With {bookingDoctor.name}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closeBooking}
                    className="text-2xl text-slate-400 hover:text-slate-700"
                  >
                    ×
                  </button>
                </div>

                <div className="mt-6 flex items-center gap-4 rounded-2xl bg-emerald-50 p-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white font-bold text-emerald-700 shadow-sm">
                    {bookingDoctor.initials}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-950">
                      {bookingDoctor.name}
                    </h3>

                    <p className="text-sm text-emerald-700">
                      {bookingDoctor.specialty}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleBooking} className="mt-8 space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Email
                      </label>

                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Phone
                      </label>

                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Preferred Date
                      </label>

                      <input
                        type="date"
                        required
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Preferred Time
                      </label>

                      <select
                        required
                        defaultValue=""
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
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
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Reason for Consultation
                    </label>

                    <textarea
                      rows={4}
                      placeholder="Briefly describe what you'd like help with..."
                      className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-emerald-600 px-6 py-4 font-semibold text-white transition hover:bg-emerald-700"
                  >
                    Confirm Booking →
                  </button>
                </form>
              </>
            ) : (
              <div className="py-10 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl">
                  ✓
                </div>

                <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
                  Booking request submitted
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-950">
                  You're all set!
                </h2>

                <p className="mx-auto mt-4 max-w-md leading-7 text-slate-600">
                  Your consultation request with{" "}
                  <strong>{bookingDoctor.name}</strong> has been submitted.
                  Our team will contact you to confirm the appointment.
                </p>

                <button
                  type="button"
                  onClick={closeBooking}
                  className="mt-8 rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white hover:bg-emerald-700"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Doctors;