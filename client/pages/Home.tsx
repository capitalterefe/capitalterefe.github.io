import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Droplets,
  Cloud,
  Sprout,
  Zap,
  Shield,
  Users,
  CheckCircle,
  BarChart3,
  Leaf,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-br from-white via-green-50 to-blue-50 py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Smart Farming Solutions for
                <span className="text-primary"> Modern Agriculture</span>
              </h1>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Terefe builds agricultural technology solutions that help farmers make smarter decisions, improve productivity, and use resources more efficiently. Our digital tools combine soil intelligence and weather insights to support sustainable and profitable farming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#solutions"
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition text-center"
                >
                  Explore Solutions
                </a>
                <Link
                  to="/contact"
                  className="inline-block px-8 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition text-center"
                >
                  Get Started
                </Link>
              </div>
              <p className="text-sm text-foreground/60">
                ✓ Designed for farmers • ✓ Easy to use • ✓ Real impact on the field
              </p>
            </div>

            {/* Right Visual */}
            <div className="animate-fade-in hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl opacity-20 blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-6 shadow-lg border border-primary/10">
                      <Droplets className="w-6 h-6 text-primary mb-3" />
                      <p className="text-xs text-foreground/60 mb-1">Water Savings</p>
                      <p className="text-2xl font-bold text-foreground">40%</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-lg border border-primary/10">
                      <TrendingUp className="w-6 h-6 text-secondary mb-3" />
                      <p className="text-xs text-foreground/60 mb-1">Yield Increase</p>
                      <p className="text-2xl font-bold text-foreground">35%</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-lg border border-primary/10">
                      <BarChart3 className="w-6 h-6 text-primary mb-3" />
                      <p className="text-xs text-foreground/60 mb-1">Fertilizer Savings</p>
                      <p className="text-2xl font-bold text-foreground">30%</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-lg border border-primary/10">
                      <Leaf className="w-6 h-6 text-secondary mb-3" />
                      <p className="text-xs text-foreground/60 mb-1">Sustainability</p>
                      <p className="text-2xl font-bold text-foreground">Proven</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Terefe helps farmers take control of their operations with practical, data-driven tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: BarChart3,
                title: "Improve Farm Decision-Making",
                description: "Access real-time data and insights to make confident, informed decisions about your farm operations.",
              },
              {
                icon: Droplets,
                title: "Optimize Water & Fertilizer",
                description: "Reduce waste and costs by using the right amounts of water and fertilizer, exactly when your crops need it.",
              },
              {
                icon: Leaf,
                title: "Support Sustainable Practices",
                description: "Farming that's good for your soil, good for the environment, and good for your bottom line.",
              },
              {
                icon: Cloud,
                title: "Adapt to Weather Changes",
                description: "Stay prepared with predictive weather insights and guidance to manage weather risks and variability.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Terefe Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-foreground to-foreground/90 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Terefe
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Technology built with farmers in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Built for farmers and real agricultural challenges",
              "Easy-to-use, practical technology that works on the field",
              "Focused on efficiency, sustainability, and growth",
              "Empowering farmers with technology for today and the future",
            ].map((reason, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-white/90 text-lg">{reason}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-white italic max-w-2xl mx-auto">
              "Empowering farmers with technology that works—on the field and for the future."
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Preview Section */}
      <section id="solutions" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Solutions
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Smart, data-driven tools designed to support farmers throughout the growing cycle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Soil Management */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Sprout className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Soil Management Suite
              </h3>
              <p className="text-foreground/70 mb-6">
                Understand and manage soil health with confidence.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Features:</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>Real-time soil condition monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>Soil moisture and nutrient insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>Fertilizer optimization recommendations</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Benefits:</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>Healthier soil and stronger crops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>Reduced fertilizer waste</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>Improved long-term productivity</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Weather Intelligence */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-secondary/10 hover:border-secondary/30 transition">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Weather Intelligence
              </h3>
              <p className="text-foreground/70 mb-6">
                Stay ahead of weather changes and plan farm activities effectively.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Features:</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                    <span>Predictive weather alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                    <span>Weather-based irrigation guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                    <span>Risk awareness for extreme conditions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Benefits:</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                    <span>Smarter irrigation decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                    <span>Reduced water usage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                    <span>Better preparedness for weather variability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/solutions"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition"
            >
              View All Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Grow Your Farm Smarter?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join farmers who are already using Terefe to make better decisions and improve their operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition"
              >
                Get Started
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-lg border border-white/40 hover:bg-white/30 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
