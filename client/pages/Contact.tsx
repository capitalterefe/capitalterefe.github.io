import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="flex-1 py-20 md:py-32 bg-gradient-to-br from-white via-green-50 to-blue-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-foreground/70 mb-12">
              Have questions about Terefe ERP? Our agriculture experts are here to help you find the right solution for your operation.
            </p>
            <div className="bg-white rounded-2xl border border-border p-12">
              <p className="text-lg text-foreground/60 mb-6">
                Our contact form and sales team information are being added here.
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
