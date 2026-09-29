import {
  HeartPulse,
  Brain,
  Dumbbell,
  Sparkles,
  Activity,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"

const categories = [
  {
    title: "Heart Health",
    description:
      "Learn about heart health, blood pressure, cholesterol and preventive care.",
    icon: HeartPulse,
  },
  {
    title: "Mental Wellbeing",
    description:
      "Resources covering stress, anxiety, sleep and emotional wellbeing.",
    icon: Brain,
  },
  {
    title: "Fitness & Nutrition",
    description:
      "Practical guidance for training, nutrition, weight management and healthy habits.",
    icon: Dumbbell,
  },
  {
    title: "Hair & Skin",
    description:
      "Explore common hair and skin concerns and available professional care.",
    icon: Sparkles,
  },
  {
    title: "Sexual Health",
    description:
      "Private and respectful information about sexual and reproductive health.",
    icon: Activity,
  },
  {
    title: "Preventive Care",
    description:
      "Understand health screenings, regular checkups and preventive healthcare.",
    icon: ShieldCheck,
  },
]

function HealthCategories() {
  const handleTopicClick = (title: string) => {
    alert(`${title} section coming soon.`)
  }

  return (
    <section
      id="health"
      className="bg-white px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
            Explore men's health
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Care for every part of your health.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore trusted information and professional care across the health
            areas that matter most.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon
            const highlighted = index === 1 || index === 4

            return (
              <article
                key={category.title}
                className={`group flex min-h-[310px] flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  highlighted
                    ? "border-emerald-200 bg-emerald-50/40"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    highlighted
                      ? "bg-emerald-600 text-white"
                      : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  <Icon size={26} strokeWidth={2} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-950">
                  {category.title}
                </h3>

                <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
                  {category.description}
                </p>

                <button
                  type="button"
                  onClick={() => handleTopicClick(category.title)}
                  className="mt-auto flex w-fit items-center gap-2 pt-8 font-semibold text-emerald-600 transition-colors hover:text-emerald-700"
                >
                  Explore topic
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HealthCategories