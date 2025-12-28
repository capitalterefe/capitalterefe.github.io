import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Lightbulb, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="py-20 md:py-32 bg-gradient-to-br from-white via-green-50 to-blue-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Terefe</span>
            </h1>
            <p className="text-xl text-foreground/70">
              Building smart technology solutions that help farmers succeed
            </p>
          </div>

          {/* Company Overview */}
          <div className="max-w-3xl mx-auto mb-16 bg-white rounded-2xl p-12 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Terefe is an agricultural technology startup focused on building smart farming solutions for modern agriculture. We help farmers turn data into action by providing tools that improve efficiency, sustainability, and crop performance.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our solutions are designed with a deep understanding of agricultural challenges—soil health, water management, and weather uncertainty—so farmers can make informed decisions with confidence.
            </p>
          </div>

          {/* Mission, Vision, Expertise */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Mission */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-foreground/70">
                To empower farmers with accessible and intelligent agricultural technology that improves productivity while conserving natural resources.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-secondary/10">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-foreground/70">
                To become a trusted technology partner for farmers, supporting the future of sustainable and data-driven agriculture.
              </p>
            </div>

            {/* Expertise */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Expertise</h3>
              <p className="text-foreground/70">
                Built on strong expertise in agriculture and technology, allowing us to create practical solutions that deliver real value on the field.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="max-w-3xl mx-auto mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-12 border border-primary/10">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">What Drives Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-foreground mb-2">Farmer-Focused</h4>
                <p className="text-foreground/70">
                  Every decision we make is guided by understanding real farmer needs and challenges.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Practical Solutions</h4>
                <p className="text-foreground/70">
                  We build technology that works on real farms, in real conditions, with real results.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Sustainability First</h4>
                <p className="text-foreground/70">
                  Supporting farming that's good for the environment, the soil, and future generations.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Continuous Improvement</h4>
                <p className="text-foreground/70">
                  We listen to farmers and constantly improve our tools to meet evolving needs.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Interested in learning more?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition"
              >
                Get in Touch
              </Link>
              <Link
                to="/solutions"
                className="inline-block px-8 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition"
              >
                View Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
