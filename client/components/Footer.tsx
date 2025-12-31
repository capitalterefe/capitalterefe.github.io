import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground dark:bg-slate-950 text-white mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2l9 5v10l-9 5-9-5V7l9-5" />
                  <path d="M12 12l6-3.5M12 12l-6-3.5M12 12v7" />
                </svg>
              </div>
              <span className="text-lg font-bold">Terefe</span>
            </div>
            <p className="text-white/70 dark:text-slate-400 text-sm">
              Smart farming solutions for modern agriculture
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-white/70 dark:text-slate-400">
              <li>
                <Link to="/solutions" className="hover:text-white dark:hover:text-slate-200 transition">
                  Solutions
                </Link>
              </li>
              <li>
                <a href="#features" className="hover:text-white dark:hover:text-slate-200 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white dark:hover:text-slate-200 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white dark:hover:text-slate-200 transition">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-white/70 dark:text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white dark:hover:text-slate-200 transition">
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white dark:hover:text-slate-200 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white dark:hover:text-slate-200 transition">
                  Careers
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white dark:hover:text-slate-200 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/70 dark:text-slate-400">
              <li>
                <a href="mailto:info@terefe.com" className="hover:text-white dark:hover:text-slate-200 transition">
                  info@terefe.com
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white dark:hover:text-slate-200 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white dark:hover:text-slate-200 transition">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
