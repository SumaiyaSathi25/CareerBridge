import { useState } from "react";
import { ArrowRight, Search, BriefcaseBusiness } from "lucide-react";
import InternshipCard from "./InternshipCard";
import { internships } from "../../data/internships";

function FeaturedInternships() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(internships.map((item) => item.category)),
  ];

  const filteredInternships = internships.filter((internship) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      internship.title.toLowerCase().includes(search) ||
      internship.company.toLowerCase().includes(search) ||
      internship.location.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "All" || internship.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section
      id="internships"
      className="bg-slate-100 px-5 py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-wider text-teal-600">
              Explore opportunities
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Featured Internships
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Discover opportunities that match your skills and interests.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 self-start rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-600 hover:text-teal-600 sm:self-auto"
          >
            Contact Us
            <ArrowRight size={17} />
          </a>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row">
          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by job title, company or location..."
              className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-teal-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "All" ? "All Categories" : category}
              </option>
            ))}
          </select>
        </div>

        {/* Result Count */}
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm font-medium text-slate-600">
            Showing {filteredInternships.length} opportunities
          </p>

          {(searchTerm || selectedCategory !== "All") && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="text-sm font-semibold text-teal-600 hover:text-teal-800"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Internship Cards */}
        {filteredInternships.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredInternships.map((internship) => (
              <InternshipCard key={internship.id} internship={internship} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center">
            <BriefcaseBusiness size={40} className="mx-auto text-slate-300" />

            <h3 className="mt-4 text-lg font-bold text-slate-800">
              No internships found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another keyword or select a different category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedInternships;
