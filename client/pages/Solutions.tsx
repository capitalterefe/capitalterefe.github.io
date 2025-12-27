import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Solutions() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="flex-1 py-20 md:py-32 bg-gradient-to-br from-white via-green-50 to-blue-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="text-primary">Solutions</span> for Every Farm Type
            </h1>
            <p className="text-xl text-foreground/70 mb-12">
              Terefe ERP provides specialized modules and features for crop operations, livestock management, agribusinesses, and food processing companies.
            </p>
            <div className="bg-white rounded-2xl border border-border p-12">
              <p className="text-lg text-foreground/60 mb-6">
                Our comprehensive solutions are being detailed with case studies and implementation guides.
              </p>
              <Link
                to="/"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition"
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
