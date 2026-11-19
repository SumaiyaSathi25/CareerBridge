import { MapPin, Clock3, Bookmark, ArrowUpRight } from "lucide-react";
import { useState } from "react";

function InternshipCard({ internship }) {
  const [isSaved, setIsSaved] = useState(() => {
    const saved = JSON.parse(
      localStorage.getItem("careerbridge_saved_internships") || "[]",
    );

    return saved.includes(internship.id);
  });
  const {
    company,
    title,
    category,
    location,
    type,
    duration,
    logo,
    logoColor,
  } = internship;

  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-slate-300/50">
      {/* Company Information */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold ${logoColor}`}
          >
            {logo}
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">{company}</h3>

            <p className="mt-1 text-xs text-slate-500">{location}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            const saved = JSON.parse(
              localStorage.getItem("careerbridge_saved_internships") || "[]",
            );

            const updated = isSaved
              ? saved.filter((id) => id !== internship.id)
              : [...saved, internship.id];

            localStorage.setItem(
              "careerbridge_saved_internships",
              JSON.stringify(updated),
            );

            setIsSaved(!isSaved);
          }}
          aria-label={isSaved ? "Remove bookmark" : "Save internship"}
          className={`rounded-lg p-2 transition-colors ${
            isSaved
              ? "bg-teal-50 text-teal-600"
              : "text-slate-400 hover:bg-teal-50 hover:text-teal-600"
          }`}
        >
          <Bookmark size={20} fill={isSaved ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Internship Details */}
      <div className="mt-6">
        <span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700">
          {category}
        </span>

        <h2 className="mt-4 text-lg font-bold text-slate-900 transition-colors group-hover:text-teal-700">
          {title}
        </h2>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <MapPin size={16} />
            {location}
          </span>

          <span className="flex items-center gap-1.5">
            <Clock3 size={16} />
            {duration}
          </span>
        </div>

        <div className="mt-5 border-t border-slate-100 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">{type}</span>

            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-800"
            >
              View Details
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default InternshipCard;
