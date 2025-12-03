import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Truck, CheckCircle, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Transportation = () => {
  const services = [
    "Material Transportation & Delivery",
    "Manpower Transfer Services",
    "Fleet Management",
    "Heavy Equipment Transport",
    "Logistics Coordination",
    "Vehicle Rental Services"
  ];

  const fleet = [
    "Modern vehicle fleet",
    "Professional licensed drivers",
    "GPS tracking systems",
    "24/7 operation capability",
    "Safety compliance",
    "Flexible scheduling"
  ];

  return (
    <Layout>
      <Helmet>
        <title>Transportation Division | Al Marsa Trading & Contracting</title>
        <meta name="description" content="Al Marsa's Transportation Division provides reliable logistics, fleet management, and vehicle support throughout Qatar with a modern fleet and professional drivers." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-navy/10 flex items-center justify-center mx-auto mb-6">
              <Truck className="w-10 h-10 text-navy" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Transportation Division
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reliable logistics and fleet management services throughout Qatar.
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
                Dependable Logistics Solutions
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With a modern fleet and professional drivers, our transportation division provides dependable logistics and vehicle support for material movement and manpower transfer throughout Qatar.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We ensure safe, timely, and efficient transportation services tailored to meet the diverse needs of our clients across various industries.
              </p>
              <Button variant="navy" asChild>
                <Link to="/contact">
                  Book Transport
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-navy mb-6">Services Offered</h3>
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

      {/* Fleet Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Our Fleet Capabilities</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {fleet.map((feature, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft">
                <CheckCircle className="w-8 h-8 text-gold mb-4" />
                <p className="font-medium text-navy">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Need Transportation Services?</h2>
          <p className="text-cream/80 max-w-2xl mx-auto mb-8">
            Contact us for reliable logistics solutions tailored to your needs.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get Quote <ArrowRight className="w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Transportation;
