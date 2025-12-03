import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, CheckCircle, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const EquipmentRental = () => {
  const equipment = [
    "Excavators & Loaders",
    "Cranes & Lifting Equipment",
    "Compactors & Rollers",
    "Generators & Power Equipment",
    "Concrete Equipment",
    "Light Equipment & Tools"
  ];

  const benefits = [
    "Wide equipment range",
    "Well-maintained machinery",
    "Competitive rental rates",
    "Flexible rental periods",
    "Technical support included",
    "Delivery and pickup services"
  ];

  return (
    <Layout>
      <Helmet>
        <title>Equipment Rental Division | Al Marsa Trading & Contracting</title>
        <meta name="description" content="Al Marsa's Equipment Rental Division offers heavy and light equipment for construction, infrastructure, and industrial projects in Qatar." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-navy/10 flex items-center justify-center mx-auto mb-6">
              <Wrench className="w-10 h-10 text-navy" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Equipment Rental Division
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Heavy and light equipment for all your project needs.
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
                Quality Equipment on Demand
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We supply a wide range of heavy and light equipment for rental — including machinery for construction, infrastructure, and industrial projects. All equipment is well-maintained and ready for deployment.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our flexible rental options and competitive rates make it easy to get the equipment you need, when you need it, without the burden of ownership.
              </p>
              <Button variant="navy" asChild>
                <Link to="/contact">
                  Rent Equipment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-navy mb-6">Available Equipment</h3>
              <ul className="space-y-4">
                {equipment.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
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
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Why Rent From Us</h2>
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
          <h2 className="font-serif text-3xl font-bold mb-4">Need Equipment?</h2>
          <p className="text-cream/80 max-w-2xl mx-auto mb-8">
            Browse our inventory and get a quote for your equipment needs.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Contact Us <ArrowRight className="w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default EquipmentRental;
