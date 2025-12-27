import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BarChart3,
  Zap,
  Shield,
  Users,
  Leaf,
  TrendingUp,
  Cloud,
  CheckCircle,
  Database,
  Truck,
  DollarSign,
  Brain,
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
                Enterprise ERP for
                <span className="text-primary"> Modern Agriculture</span>
              </h1>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Streamline your entire agricultural operation with AI-powered insights, real-time data visibility, and integrated management across crops, livestock, inventory, and supply chain. Built for farms and agribusinesses at any scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#get-started"
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition text-center"
                >
                  Request Demo
                </a>
                <a
                  href="#features"
                  className="inline-block px-8 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition text-center"
                >
                  Learn More
                </a>
              </div>
              <p className="text-sm text-foreground/60">
                ✓ 20+ years of agriculture expertise • ✓ Enterprise security • ✓ Full integration support
              </p>
            </div>

            {/* Right Visual */}
            <div className="animate-fade-in hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl opacity-20 blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-6 shadow-lg border border-primary/10">
                      <TrendingUp className="w-6 h-6 text-primary mb-3" />
                      <p className="text-xs text-foreground/60 mb-1">Efficiency Gain</p>
                      <p className="text-2xl font-bold text-foreground">+45%</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-lg border border-primary/10">
                      <Zap className="w-6 h-6 text-secondary mb-3" />
                      <p className="text-xs text-foreground/60 mb-1">Cost Reduction</p>
                      <p className="text-2xl font-bold text-foreground">-32%</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-lg border border-primary/10">
                      <BarChart3 className="w-6 h-6 text-primary mb-3" />
                      <p className="text-xs text-foreground/60 mb-1">Data Visibility</p>
                      <p className="text-2xl font-bold text-foreground">100%</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-lg border border-primary/10">
                      <Shield className="w-6 h-6 text-secondary mb-3" />
                      <p className="text-xs text-foreground/60 mb-1">Uptime</p>
                      <p className="text-2xl font-bold text-foreground">99.9%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section id="features" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Agricultural ERP Solution
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              All the tools you need to manage every aspect of your agricultural operation in one integrated platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Crop Management */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Crop Management
              </h3>
              <p className="text-foreground/70">
                Plan, monitor, and optimize crops throughout the entire lifecycle—from field planning and inputs to harvest and post-harvest processing.
              </p>
            </div>

            {/* Livestock Management */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-secondary/10 hover:border-secondary/30 transition group">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Livestock Management
              </h3>
              <p className="text-foreground/70">
                Track animal health, breeding records, nutrition management, and performance metrics for beef, dairy, and other livestock operations at scale.
              </p>
            </div>

            {/* Inventory & Supply Chain */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Inventory Management
              </h3>
              <p className="text-foreground/70">
                Track seeds, fertilizers, chemicals, feed, and equipment. Automate reordering, manage multiple locations, and prevent waste with real-time visibility.
              </p>
            </div>

            {/* Financial Management */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-secondary/10 hover:border-secondary/30 transition group">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition">
                <DollarSign className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Financial Management
              </h3>
              <p className="text-foreground/70">
                Gain clarity on profitability by field, crop, or herd. Track costs against actual yields, manage contracts, and optimize margins across operations.
              </p>
            </div>

            {/* Supply Chain */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Supply Chain & Logistics
              </h3>
              <p className="text-foreground/70">
                Streamline harvest, packing, storage, and distribution. Manage traceability from field to customer with full visibility and compliance tracking.
              </p>
            </div>

            {/* AI & Analytics */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-secondary/10 hover:border-secondary/30 transition group">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition">
                <Brain className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                AI-Powered Insights
              </h3>
              <p className="text-foreground/70">
                Predictive analytics for crop yields, pest detection, disease prediction, and resource optimization. Machine learning that improves with your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-foreground to-foreground/90 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Platform Capabilities
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Enterprise-grade features designed specifically for agricultural operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Cloud-based platform accessible from any device, anywhere",
              "Real-time data visibility across all farm operations",
              "Seamless IoT and sensor integrations for automated data collection",
              "Customizable dashboards for different farm operations",
              "Advanced reporting and business intelligence with Power BI & Tableau",
              "Compliance tracking and regulatory audit trails",
              "Multi-location and multi-crop operations support",
              "Role-based access control and enterprise security",
              "Mobile apps for field operations and decision-making",
              "Dedicated account management and 24/7 support",
              "API integrations with existing farm equipment and software",
              "Data-driven decision recommendations and what-if analysis",
            ].map((capability, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-white/90">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Terefe */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Agriculture Leaders Choose Terefe
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              20+ years of agriculture expertise built into every feature
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <p className="text-foreground/70">Years serving the agriculture industry</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-foreground/70">Farms and agribusinesses worldwide</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-foreground/70">Platform uptime and reliability</p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-12 border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Modular, Flexible Architecture
                </h3>
                <p className="text-foreground/70 mb-4">
                  Scale your system as your business grows. Start with what you need and add modules over time—whether that's crop management, livestock tracking, or advanced analytics.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Expert Implementation Support
                </h3>
                <p className="text-foreground/70 mb-4">
                  Our agriculture specialists guide you through implementation, training, data migration, and ongoing optimization to ensure maximum ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Farm Operations?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join leading farms and agribusinesses that are increasing efficiency, reducing costs, and making smarter decisions with Terefe ERP
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition"
              >
                Request Demo
              </a>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-lg border border-white/40 hover:bg-white/30 transition"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
