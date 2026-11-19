import { BriefcaseBusiness, Building2, Layers3, Users } from "lucide-react";

function Statistics() {
  const stats = [
    {
      id: 1,
      label: "Internship Opportunities",
      value: "120+",
      icon: BriefcaseBusiness,
    },
    {
      id: 2,
      label: "Partner Companies",
      value: "50+",
      icon: Building2,
    },
    {
      id: 3,
      label: "Career Categories",
      value: "12+",
      icon: Layers3,
    },
    {
      id: 4,
      label: "Student Community",
      value: "2K+",
      icon: Users,
    },
  ];

  return (
    <section className="bg-slate-950 px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
            CareerBridge at a glance
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Opportunities that move you forward
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-colors hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
                  <Icon size={24} />
                </div>

                <h3 className="mt-4 text-3xl font-bold text-white">
                  {stat.value}
                </h3>

                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
