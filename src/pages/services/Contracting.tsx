import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HardHat, CheckCircle, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Contracting = () => {
  const services = [
    "Civil Construction & Infrastructure",
    "Mechanical Works & Installation",
    "General Building Construction",
    "Renovation & Refurbishment",
    "Industrial Construction",
    "Site Development & Earthworks"
  ];

  const capabilities = [
    "Skilled engineering teams",
    "Modern equipment fleet",
    "Design to handover solutions",
    "Quality management systems",
    "Safety compliance",
    "On-time project delivery"
  ];

  return (
    <Layout>
      <Helmet>
        <title>Contracting Division | Al Marsa Trading & Contracting</title>
        <meta name="description" content="Al Marsa's Contracting Division provides professional civil, mechanical, and general construction services with skilled teams and modern equipment in Qatar." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-navy/10 flex items-center justify-center mx-auto mb-6">
              <HardHat className="w-10 h-10 text-navy" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Contracting Division
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional construction and contracting services with precision and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-serif text-3xl font-bold text-navy mb-6">
                Expert Construction Services
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our contracting division undertakes civil, mechanical, and general construction works. With a skilled engineering team and modern equipment, we handle projects from design to handover with precision.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We are committed to delivering projects on time, within budget, and to the highest quality standards, ensuring client satisfaction at every stage.
              </p>
              <Button variant="navy" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-navy mb-6">Our Services</h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Our Capabilities</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft">
                <CheckCircle className="w-8 h-8 text-gold mb-4" />
                <p className="font-medium text-navy">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Ready to Build?</h2>
          <p className="text-cream/80 max-w-2xl mx-auto mb-8">
            Partner with us for your next construction project. Our team is ready to deliver excellence.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get Started <ArrowRight className="w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contracting;
