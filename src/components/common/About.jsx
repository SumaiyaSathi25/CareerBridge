import {
  BriefcaseBusiness,
  Users,
  Building2,
  CheckCircle2,
} from "lucide-react";

function About() {
  const features = [
    {
      id: 1,
      icon: BriefcaseBusiness,
      title: "Find Opportunities",
      description:
        "Explore internship opportunities that match your skills, interests and career goals.",
    },
    {
      id: 2,
      icon: Users,
      title: "Student Friendly",
      description:
        "A simple platform designed to help students take their first steps toward professional careers.",
    },
    {
      id: 3,
      icon: Building2,
      title: "Connect with Companies",
      description:
        "Discover companies and learn about different industries and professional opportunities.",
    },
  ];

  return (
    <section id="about" className="bg-white px-5 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <span className="text-sm font-bold uppercase tracking-wider text-teal-600">
            About CareerBridge
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Building a Bridge Between
            <span className="text-teal-600"> Students and Careers</span>
          </h2>

          <p className="mt-6 leading-8 text-slate-500">
            CareerBridge is an internship and career management platform
            designed to help students discover opportunities, explore companies
            and prepare for their professional journey.
          </p>

          <p className="mt-4 leading-8 text-slate-500">
            Our goal is to make career exploration easier by bringing students
            and internship opportunities together in one place.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="shrink-0 text-teal-600" size={20} />
              <span className="text-sm font-medium text-slate-700">
                Discover relevant internship opportunities
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="shrink-0 text-teal-600" size={20} />
              <span className="text-sm font-medium text-slate-700">
                Explore different career paths
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="shrink-0 text-teal-600" size={20} />
              <span className="text-sm font-medium text-slate-700">
                Build professional skills and experience
              </span>
            </div>
          </div>
        </div>

        {/* Right Feature Cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className={`rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-lg ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
