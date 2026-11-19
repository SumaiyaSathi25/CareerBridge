import {
  Search,
  ArrowRight,
  BriefcaseBusiness,
  Users,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-slate-50">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:py-28 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-teal-500"></span>

            <span className="text-sm font-semibold text-teal-700">
              Your career journey starts here
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-5">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Discover Opportunities.
              <span className="mt-2 block text-teal-600">
                Build Your Future.
              </span>
            </h1>

            <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Find internships, connect with companies, and take the next step
              toward your dream career. Your journey to professional success
              starts with the right opportunity.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/50 sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center gap-3 px-3">
              <Search size={21} className="shrink-0 text-slate-400" />

              <input
                type="text"
                placeholder="Job title, skills, or keyword"
                className="w-full bg-transparent py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>

            <button
              type="button"
              className="rounded-xl bg-teal-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
            >
              Find Opportunities
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#internships"
              className="inline-flex items-center gap-2 font-semibold text-slate-800 transition-colors hover:text-teal-600"
            >
              Explore internships
              <ArrowRight size={18} />
            </a>

            <a
              href="#about"
              className="font-semibold text-slate-500 transition-colors hover:text-teal-600"
            >
              Learn more
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 border-t border-slate-200 pt-7">
            <div className="flex items-center gap-2">
              <Users size={19} className="text-teal-600" />
              <span className="text-sm font-medium text-slate-600">
                Student focused
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Building2 size={19} className="text-teal-600" />
              <span className="text-sm font-medium text-slate-600">
                Company connections
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={19} className="text-teal-600" />
              <span className="text-sm font-medium text-slate-600">
                Career growth
              </span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative mx-auto w-full max-w-lg">
          {/* Background Decoration */}
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-teal-100/70 blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl"></div>

          {/* Main Dashboard Card */}
          <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-300/40 sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Your career dashboard
                </p>

                <h3 className="mt-1 text-xl font-bold text-slate-900">
                  Find your next step
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                <BriefcaseBusiness size={23} />
              </div>
            </div>

            {/* Statistics */}
            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-medium text-slate-500">
                  Opportunities
                </p>

                <h4 className="mt-2 text-2xl font-bold text-slate-900">120+</h4>

                <p className="mt-1 text-xs text-teal-600">
                  Explore possibilities
                </p>
              </div>

              <div className="rounded-2xl bg-teal-50 p-4">
                <p className="text-xs font-medium text-teal-700">
                  Career growth
                </p>

                <h4 className="mt-2 text-2xl font-bold text-slate-900">
                  Start
                </h4>

                <p className="mt-1 text-xs text-teal-700">Build your skills</p>
              </div>
            </div>

            {/* Featured Opportunity */}
            <div className="mt-6">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="font-bold text-slate-900">
                  Featured opportunity
                </h4>

                <span className="text-xs font-semibold text-teal-600">
                  View all
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-800">
                    <BriefcaseBusiness size={23} />
                  </div>

                  <div className="flex-1">
                    <h5 className="font-bold text-slate-900">
                      Frontend Developer
                    </h5>

                    <p className="mt-1 text-xs text-slate-500">
                      Technology & Development
                    </p>
                  </div>

                  <span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700">
                    Internship
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs text-slate-500">
                    Remote · Full-time
                  </span>

                  <span className="text-xs font-semibold text-slate-700">
                    Explore →
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Message */}
            <div className="mt-5 flex items-center gap-3 rounded-xl bg-slate-950 p-4">
              <CheckCircle2 className="shrink-0 text-teal-400" size={21} />

              <p className="text-sm font-medium text-white">
                Your next opportunity is waiting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
