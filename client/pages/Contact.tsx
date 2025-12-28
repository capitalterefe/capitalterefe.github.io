import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="flex-1 py-20 md:py-32 bg-gradient-to-br from-white via-green-50 to-blue-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-foreground/70">
              We'd love to hear from you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {/* Email */}
            <div className="bg-white rounded-2xl p-8 border border-border hover:border-primary/30 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <a
                href="mailto:info@terefe.com"
                className="text-primary hover:underline"
              >
                info@terefe.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-8 border border-border hover:border-primary/30 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Phone</h3>
              <p className="text-foreground/70">
                Available on request
              </p>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl p-8 border border-border hover:border-primary/30 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Location</h3>
              <p className="text-foreground/70">
                Global reach, local support
              </p>
            </div>
          </div>

          {/* Message Section */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-12 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>

            <div className="space-y-6 mb-8">
              <p className="text-lg text-foreground/70">
                Whether you're a farmer, agronomist, partner, or investor, we'd love to connect and discuss how Terefe can support your farming goals.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 border border-primary/10">
                <h3 className="font-bold text-foreground mb-2">
                  What we'd love to know:
                </h3>
                <ul className="text-foreground/70 space-y-2">
                  <li>• Your farming operation and crops</li>
                  <li>• Current challenges you're facing</li>
                  <li>• Your interest in our solutions</li>
                  <li>• How we can support your success</li>
                </ul>
              </div>

              <p className="text-lg text-foreground/70 font-semibold">
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
                className="flex-1 px-8 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition text-center"
              >
                Back to Home
              </Link>
            </div>
          </div>

          {/* Social / Additional Info */}
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <h3 className="font-bold text-foreground mb-4">Follow Us</h3>
            <div className="flex gap-4 justify-center">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-foreground/10 text-foreground rounded-lg hover:bg-foreground/20 transition"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-foreground/10 text-foreground rounded-lg hover:bg-foreground/20 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-foreground/10 text-foreground rounded-lg hover:bg-foreground/20 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
