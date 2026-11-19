import {
  BriefcaseBusiness,
  Bookmark,
  User,
  LogOut,
  ArrowRight,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { internships } from "../../data/internships";
import { Link, useNavigate, Navigate } from "react-router-dom";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const savedIds = JSON.parse(
    localStorage.getItem("careerbridge_saved_internships") || "[]",
  );

  const savedInternships = internships.filter((item) =>
    savedIds.includes(item.id),
  );

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link to="/" className="text-xl font-bold text-slate-900">
            Career<span className="text-teal-600">Bridge</span>
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-red-50 hover:text-red-600"
          >
            <LogOut size={17} />
            Logout
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-10">
        {/* Welcome */}
        <div className="rounded-2xl bg-slate-950 p-8 text-white">
          <p className="text-sm font-medium text-teal-400">
            {user.role} Dashboard
          </p>

          <h1 className="mt-3 text-3xl font-bold">Welcome, {user.name}!</h1>

          <p className="mt-3 text-sm leading-7 text-slate-400">
            Manage your account and explore your career opportunities from your
            personal dashboard.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
              <User size={22} />
            </div>

            <p className="mt-5 text-sm text-slate-500">Account Type</p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              {user.role}
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <BriefcaseBusiness size={22} />
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Available Opportunities
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              {internships.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <Bookmark size={22} />
            </div>

            <p className="mt-5 text-sm text-slate-500">Saved Internships</p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              {savedInternships.length}
            </h2>
          </div>
        </div>

        {/* Profile */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">
            Profile Information
          </h2>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-sm text-slate-500">Full Name</p>
              <p className="mt-1 font-semibold text-slate-800">{user.name}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Email Address</p>
              <p className="mt-1 font-semibold text-slate-800">{user.email}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Account Role</p>
              <p className="mt-1 font-semibold text-slate-800">{user.role}</p>
            </div>
          </div>
        </div>

        {/* Saved Internships */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Saved Internships
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Opportunities you have bookmarked.
              </p>
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-800"
            >
              Explore More
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {savedInternships.length > 0 ? (
              savedInternships.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50 p-4 sm:flex-row sm:items-center"
                >
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {item.company} · {item.location}
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                    {item.category}
                  </span>
                </div>
              ))
            ) : (
              <p className="rounded-xl bg-slate-50 p-6 text-center text-sm text-slate-500">
                You haven't saved any internships yet.
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
