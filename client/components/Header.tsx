import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <nav className="container h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
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
          <span className="text-lg font-bold text-foreground">Terefe</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-foreground hover:text-primary transition">
            Home
          </Link>
          <Link to="/solutions" className="text-foreground hover:text-primary transition">
            Solutions
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition">
            About
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition">
            Contact
          </Link>
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-opacity-90 transition"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/solutions"
              className="text-foreground hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-opacity-90 transition text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
