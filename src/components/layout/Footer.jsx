import { Briefcase, ArrowUpRight } from "lucide-react";

function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Find Internships", href: "#internships" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const studentLinks = [
    { name: "Browse Internships", href: "#internships" },
    { name: "Career Resources", href: "#resources" },
    { name: "Student Login", href: "#login" },
    { name: "Create Account", href: "#register" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white">
                <Briefcase size={22} />
              </div>

              <span className="text-xl font-bold text-white">
                Career<span className="text-teal-400">Bridge</span>
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Connecting students with meaningful internship opportunities and
              helping them build successful careers.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#linkedin"
                className="text-sm text-slate-400 hover:text-teal-400"
              >
                LinkedIn
              </a>
              <a
                href="#github"
                className="text-sm text-slate-400 hover:text-teal-400"
              >
                GitHub
              </a>
              <a
                href="#instagram"
                className="text-sm text-slate-400 hover:text-teal-400"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h3 className="font-semibold text-white">For Students</h3>

            <ul className="mt-5 space-y-3">
              {studentLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white">Get in Touch</h3>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Have questions or want to learn more about CareerBridge? Stay
              connected with our platform.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-400 transition-colors hover:text-teal-300"
            >
              Contact Us
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} CareerBridge. All rights reserved.
          </p>

          <p className="text-xs text-slate-500">
            Built for students, designed for opportunities.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
