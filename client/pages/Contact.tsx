import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="flex-1 py-20 md:py-32 bg-gradient-to-br from-white via-green-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-foreground/70 dark:text-slate-400">
              We'd love to hear from you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {/* Email */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-border dark:border-slate-700 hover:border-primary/30 dark:hover:border-slate-600 transition">
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground dark:text-white mb-2">Email</h3>
              <a
                href="mailto:info@terefe.com"
                className="text-primary hover:underline dark:hover:text-primary/80"
              >
                info@terefe.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-border dark:border-slate-700 hover:border-primary/30 dark:hover:border-slate-600 transition">
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground dark:text-white mb-2">Phone</h3>
              <p className="text-foreground/70 dark:text-slate-400">
                Available on request
              </p>
            </div>

            {/* Location */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-border dark:border-slate-700 hover:border-primary/30 dark:hover:border-slate-600 transition">
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground dark:text-white mb-2">Location</h3>
              <p className="text-foreground/70 dark:text-slate-400">
                Global reach, local support
              </p>
            </div>
          </div>

          {/* Message Section */}
          <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-2xl p-12 border border-border dark:border-slate-700">
            <h2 className="text-2xl font-bold text-foreground dark:text-white mb-6">Get in Touch</h2>

            <div className="space-y-6 mb-8">
              <p className="text-lg text-foreground/70 dark:text-slate-400">
                Whether you're a farmer, agronomist, partner, or investor, we'd love to connect and discuss how Terefe can support your farming goals.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-lg p-6 border border-primary/10 dark:border-slate-700">
                <h3 className="font-bold text-foreground dark:text-white mb-2">
                  What we'd love to know:
                </h3>
                <ul className="text-foreground/70 dark:text-slate-400 space-y-2">
                  <li>• Your farming operation and crops</li>
                  <li>• Current challenges you're facing</li>
                  <li>• Your interest in our solutions</li>
                  <li>• How we can support your success</li>
                </ul>
              </div>

              <p className="text-lg text-foreground/70 dark:text-slate-400 font-semibold">
                Let's work together to build a smarter future for agriculture.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@terefe.com"
                className="flex-1 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition text-center"
              >
                Send Us an Email
              </a>
              <Link
                to="/"
                className="flex-1 px-8 py-3 bg-white dark:bg-slate-700 border-2 border-primary dark:border-primary text-primary dark:text-slate-200 font-semibold rounded-lg hover:bg-primary/5 dark:hover:bg-slate-600 transition text-center"
              >
                Back to Home
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
