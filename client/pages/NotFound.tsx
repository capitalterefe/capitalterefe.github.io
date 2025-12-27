import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="flex-1 py-20 md:py-32 bg-gradient-to-br from-white via-green-50 to-blue-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-foreground/70 mb-12">
              We couldn't find the page you're looking for. The link might be broken or the page may have been removed.
            </p>
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
