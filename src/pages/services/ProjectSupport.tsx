import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ClipboardList, CheckCircle, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ProjectSupport = () => {
  const services = [
    "Material Procurement & Sourcing",
    "Manpower Supply & Management",
    "Logistics & Transportation",
    "Technical Assistance & Consultation",
    "Project Coordination",
    "Quality Assurance Support"
  ];

  const benefits = [
    "End-to-end project assistance",
    "Experienced project coordinators",
    "Cost-effective solutions",
    "Flexible resource allocation",
    "Quick turnaround times",
    "Dedicated support teams"
  ];

  return (
    <Layout>
      <Helmet>
        <title>Project Support Division | Al Marsa Trading & Contracting</title>
        <meta name="description" content="Al Marsa's Project Support Division provides comprehensive assistance including material procurement, manpower, logistics, and technical support in Qatar." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-navy/10 flex items-center justify-center mx-auto mb-6">
              <ClipboardList className="w-10 h-10 text-navy" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Project Support Division
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end project assistance and coordination for seamless execution.
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
                Comprehensive Project Assistance
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Al Marsa provides comprehensive project support services, including material procurement, manpower, logistics, and technical assistance. We serve as an extension of your team, ensuring smooth project execution.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our experienced coordinators work closely with clients to understand project requirements and deliver tailored solutions that meet deadlines and budget constraints.
              </p>
              <Button variant="navy" asChild>
                <Link to="/contact">
                  Get Support
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-navy mb-6">Support Services</h3>
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
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Why Choose Our Support</h2>
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
          <h2 className="font-serif text-3xl font-bold mb-4">Need Project Support?</h2>
          <p className="text-cream/80 max-w-2xl mx-auto mb-8">
            Let us handle the details while you focus on your core business.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Contact Us <ArrowRight className="w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectSupport;
