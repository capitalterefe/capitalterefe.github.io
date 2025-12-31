import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Sprout, Cloud } from "lucide-react";

export default function Solutions() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="py-20 md:py-32 bg-gradient-to-br from-white via-green-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6">
              Our Agricultural Technology
              <span className="text-primary"> Solutions</span>
            </h1>
            <p className="text-xl text-foreground/70 dark:text-slate-400">
              Terefe offers smart, data-driven tools designed to support farmers throughout the growing cycle.
            </p>
          </div>

          {/* Soil Management Suite */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                    <Sprout className="w-6 h-6 text-primary" />
                  </div>
                  Soil Management Suite
                </h2>
                <p className="text-lg text-foreground/70 dark:text-slate-400 mb-6">
                  Understand and manage soil health with confidence.
                </p>

                <div className="mb-8">
                  <h3 className="font-bold text-foreground dark:text-white mb-4">Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70 dark:text-slate-400">Real-time soil condition monitoring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70 dark:text-slate-400">Soil moisture and nutrient insights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70 dark:text-slate-400">Fertilizer optimization recommendations</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-foreground dark:text-white mb-4">Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70 dark:text-slate-400">Healthier soil and stronger crops</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70 dark:text-slate-400">Reduced fertilizer waste</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70 dark:text-slate-400">Improved long-term productivity</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="animate-fade-in hidden md:block">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-12 border border-primary/20 dark:border-slate-700">
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-lg">
                      <p className="text-sm text-foreground/60 dark:text-slate-400 mb-1">Fertilizer Waste Reduction</p>
                      <p className="text-3xl font-bold text-primary">30%</p>
                    </div>
                    <div className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-lg">
                      <p className="text-sm text-foreground/60 dark:text-slate-400 mb-1">Yield Improvement</p>
                      <p className="text-3xl font-bold text-primary">35%</p>
                    </div>
                    <div className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-lg">
                      <p className="text-sm text-foreground/60 dark:text-slate-400 mb-1">Soil Health</p>
                      <p className="text-3xl font-bold text-primary">Proven</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Weather Intelligence */}
          <div className="mb-16 border-t border-border dark:border-slate-800 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in hidden md:block order-last">
                <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-12 border border-secondary/20 dark:border-slate-700">
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-lg">
                      <p className="text-sm text-foreground/60 dark:text-slate-400 mb-1">Water Savings</p>
                      <p className="text-3xl font-bold text-secondary">40%</p>
                    </div>
                    <div className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-lg">
                      <p className="text-sm text-foreground/60 dark:text-slate-400 mb-1">Weather Prediction</p>
                      <p className="text-3xl font-bold text-secondary">95% Accurate</p>
                    </div>
                    <div className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-lg">
                      <p className="text-sm text-foreground/60 dark:text-slate-400 mb-1">Alert Response</p>
                      <p className="text-3xl font-bold text-secondary">Real-Time</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-slide-up">
                <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 dark:bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-secondary" />
                  </div>
                  Weather Intelligence
                </h2>
                <p className="text-lg text-foreground/70 dark:text-slate-400 mb-6">
                  Stay ahead of weather changes and plan farm activities effectively.
                </p>

                <div className="mb-8">
                  <h3 className="font-bold text-foreground dark:text-white mb-4">Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70 dark:text-slate-400">Predictive weather alerts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70 dark:text-slate-400">Weather-based irrigation guidance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70 dark:text-slate-400">Risk awareness for extreme conditions</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-foreground dark:text-white mb-4">Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70 dark:text-slate-400">Smarter irrigation decisions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70 dark:text-slate-400">Reduced water usage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70 dark:text-slate-400">Better preparedness for weather variability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-border dark:border-slate-800 pt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground dark:text-white mb-6">
              Ready to transform your farming?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition"
              >
                Get Started
              </Link>
              <Link
                to="/"
                className="inline-block px-8 py-3 bg-white dark:bg-slate-800 border-2 border-primary dark:border-primary text-primary dark:text-slate-200 font-semibold rounded-lg hover:bg-primary/5 dark:hover:bg-slate-700 transition"
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
