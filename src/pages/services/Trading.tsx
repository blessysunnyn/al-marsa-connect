import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package, CheckCircle, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Trading = () => {
  const products = [
    "Building Materials & Construction Supplies",
    "Safety Equipment & Personal Protective Gear",
    "Industrial Equipment & Machinery",
    "Electrical Supplies & Components",
    "Plumbing & HVAC Materials",
    "Hardware & Tools"
  ];

  const benefits = [
    "Strong supplier network across the region",
    "Competitive pricing with quality assurance",
    "Timely delivery and logistics support",
    "Expert product consultation",
    "Bulk order capabilities",
    "After-sales support"
  ];

  return (
    <Layout>
      <Helmet>
        <title>Trading Division | Al Marsa Trading & Contracting</title>
        <meta name="description" content="Al Marsa's Trading Division offers comprehensive supply solutions including building materials, safety equipment, industrial machinery, and electrical supplies in Qatar." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-navy/10 flex items-center justify-center mx-auto mb-6">
              <Package className="w-10 h-10 text-navy" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Trading Division
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive supply solutions for diverse industrial needs with high-quality products and competitive pricing.
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
                Your Trusted Trading Partner in Qatar
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Al Marsa's Trading Division offers a wide range of high-quality products, from building materials and safety tools to industrial equipment and electrical supplies. Our strong supplier network enables us to deliver reliable products at competitive prices.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We understand the unique requirements of Qatar's construction and industrial sectors, providing tailored solutions that meet the highest standards of quality and reliability.
              </p>
              <Button variant="navy" asChild>
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-navy mb-6">Products We Supply</h3>
              <ul className="space-y-4">
                {products.map((product, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{product}</span>
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
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Why Choose Our Trading Division</h2>
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
          <h2 className="font-serif text-3xl font-bold mb-4">Need Products for Your Project?</h2>
          <p className="text-cream/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your requirements. We offer competitive pricing and reliable delivery.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Contact Us <ArrowRight className="w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Trading;
