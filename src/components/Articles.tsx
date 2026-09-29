import { ArrowRight, Clock3 } from "lucide-react";

const articles = [
  {
    category: "HEART HEALTH",
    title: "Simple habits that support a healthier heart",
    description:
      "Understand everyday habits that can contribute to cardiovascular health and overall wellbeing.",
    time: "5 min read",
  },
  {
    category: "MENTAL WELLBEING",
    title: "Why sleep matters for your everyday wellbeing",
    description:
      "Explore the relationship between healthy sleep, energy and daily performance.",
    time: "6 min read",
  },
  {
    category: "FITNESS & NUTRITION",
    title: "Building sustainable healthy habits",
    description:
      "Practical ideas for building healthier routines that can fit into a busy lifestyle.",
    time: "4 min read",
  },
];

function Articles() {
  const openArticle = (title: string) => {
    alert(`${title}\n\nFull article coming soon.`);
  };

  const viewAllArticles = () => {
    alert(
      "More health articles will be available soon.\n\nFor now, you can explore the articles shown below."
    );
  };

  return (
    <section
      id="articles"
      className="bg-white px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
              Health & insights
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Knowledge that helps you take action.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Clear, practical information to help you understand your health
              and make informed decisions.
            </p>
          </div>

          <button
            type="button"
            onClick={viewAllArticles}
            className="flex w-fit items-center gap-2 font-semibold text-emerald-600 transition hover:text-emerald-700"
          >
            View all articles
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-48 items-end bg-gradient-to-br from-emerald-50 via-slate-100 to-white p-6">
                <div className="rounded-full bg-white px-4 py-2 text-xs font-bold tracking-wider text-emerald-700 shadow-sm">
                  {article.category}
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Clock3 size={15} />
                  {article.time}
                </div>

                <h3 className="mt-4 text-2xl font-bold leading-tight text-slate-950">
                  {article.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {article.description}
                </p>

                <button
                  type="button"
                  onClick={() => openArticle(article.title)}
                  className="mt-7 flex items-center gap-2 font-semibold text-emerald-600 transition group-hover:gap-3 hover:text-emerald-700"
                >
                  Read article
                  <ArrowRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;