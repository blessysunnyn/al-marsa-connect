import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, CheckCircle, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const FacilityManagement = () => {
  const services = [
    "Building Maintenance & Repairs",
    "MEP Systems Maintenance",
    "Cleaning & Janitorial Services",
    "Landscaping & Grounds Maintenance",
    "Security Services",
    "Asset Management"
  ];

  const benefits = [
    "Integrated facility solutions",
    "24/7 support availability",
    "Preventive maintenance programs",
    "Cost optimization",
    "Compliance management",
    "Experienced facility managers"
  ];

  return (
    <Layout>
      <Helmet>
        <title>Facility Management Division | Al Marsa Trading & Contracting</title>
        <meta name="description" content="Al Marsa's Facility Management Division delivers integrated services to optimize asset performance, safety, and lifespan in Qatar." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-navy/10 flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10 text-navy" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Facility Management Division
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Integrated facility management and maintenance services for optimal asset performance.
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
                Complete Facility Solutions
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We deliver integrated facility management services designed to optimize asset performance, safety, and lifespan. Our comprehensive approach ensures your facilities operate at peak efficiency.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From routine maintenance to emergency repairs, our team provides round-the-clock support to keep your operations running smoothly.
              </p>
              <Button variant="navy" asChild>
                <Link to="/contact">
                  Get a Quote
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

      {/* Benefits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Our Advantages</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft">
                <CheckCircle className="w-8 h-8 text-gold mb-4" />
                <p className="font-medium text-navy">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Need Facility Management?</h2>
          <p className="text-cream/80 max-w-2xl mx-auto mb-8">
            Let us manage your facilities so you can focus on your business.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Contact Us <ArrowRight className="w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default FacilityManagement;
