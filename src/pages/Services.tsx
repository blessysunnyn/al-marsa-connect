import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Package,
  HardHat,
  ClipboardList,
  Building2,
  Truck,
  Wrench,
  Users,
  Shield,
  Cable,
  Mountain,
  ShoppingCart,
  Droplet,
  ArrowRight
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const divisions = [
  {
    icon: Package,
    title: "Trading Division",
    description: "Comprehensive supply solutions for diverse industrial needs",
    details: "We offer a wide range of high-quality products, from building materials and safety tools to industrial equipment and electrical supplies. Our strong supplier network enables us to deliver reliable products at competitive prices.",
    color: "text-navy"
  },
  {
    icon: HardHat,
    title: "Contracting Division",
    description: "Professional construction and contracting services",
    details: "Our contracting division undertakes civil, mechanical, and general construction works. With a skilled engineering team and modern equipment, we handle projects from design to handover with precision.",
    color: "text-gold-dark"
  },
  {
    icon: ClipboardList,
    title: "Project Support Division",
    description: "End-to-end project assistance and coordination",
    details: "Al Marsa provides comprehensive project support services, including material procurement, manpower, logistics, and technical assistance.",
    color: "text-navy"
  },
  {
    icon: Building2,
    title: "Facility Management Division",
    description: "Integrated facility management and maintenance",
    details: "We deliver integrated facility management services designed to optimize asset performance, safety, and lifespan.",
    color: "text-gold-dark"
  },
  {
    icon: Truck,
    title: "Transportation Division",
    description: "Reliable logistics and fleet management",
    details: "With a modern fleet and professional drivers, our transportation division provides dependable logistics and vehicle support for material movement and manpower transfer throughout Qatar.",
    color: "text-navy"
  },
  {
    icon: Wrench,
    title: "Equipment Rental Division",
    description: "Heavy and light equipment for all project needs",
    details: "We supply a wide range of heavy and light equipment for rental — including machinery for construction, infrastructure, and industrial projects.",
    color: "text-gold-dark"
  }
];

const specializedServices = [
  {
    icon: Users,
    title: "Skilled & Unskilled Manpower Supply",
    description: "Qualified workforce solutions for various industries"
  },
  {
    icon: Truck,
    title: "Transportation & Logistics Services",
    description: "Complete logistics and transportation management"
  },
  {
    icon: Droplet,
    title: "Sewage Contracting & Tanker Services",
    description: "Professional sewage handling and tanker operations"
  },
  {
    icon: Cable,
    title: "Electrical Cabling and Wiring Works",
    description: "Expert electrical installation and maintenance"
  },
  {
    icon: HardHat,
    title: "Construction and General Contracting",
    description: "Complete construction solutions from start to finish"
  },
  {
    icon: Mountain,
    title: "Trading in Mountain Gravel (Gabbro)",
    description: "High-quality aggregates and construction materials"
  },
  {
    icon: ShoppingCart,
    title: "Building Materials & Hardware Supply",
    description: "Comprehensive building materials and hardware solutions"
  },
  {
    icon: Shield,
    title: "Fire Protection & Safety Equipment",
    description: "Retail sale of fire protection, safety equipment, tools, and materials"
  }
];

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>Our Services | Al Marsa Trading & Contracting</title>
        <meta name="description" content="Al Marsa offers comprehensive services including trading, contracting, facility management, transportation, equipment rental, and specialized project support services in Qatar." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6 animate-fade-up">
            Our Services & Divisions
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Al Marsa delivers comprehensive, integrated solutions across multiple industries. 
            From trading and contracting to specialized services, we are your trusted partner in Qatar.
          </p>
        </div>
      </section>

      {/* Main Divisions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Core Divisions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Six specialized divisions working together to provide complete business solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {divisions.map((division, index) => (
              <Card 
                key={index} 
                className="hover-lift border-border/50 shadow-soft"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-lg bg-gradient-hero flex items-center justify-center mb-4`}>
                    <division.icon className={`w-7 h-7 ${division.color}`} />
                  </div>
                  <CardTitle className="text-navy">{division.title}</CardTitle>
                  <CardDescription className="text-base">{division.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {division.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Specialized Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Additional expertise to support your unique project requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {specializedServices.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft border border-border/50 hover-lift"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto mb-12">
            {[
              "Construction & Infrastructure",
              "Oil & Gas",
              "Industrial & Manufacturing",
              "Facility & Property Management",
              "Logistics & Transportation",
              "Government & Private Sector"
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-muted rounded-lg p-4 text-sm font-medium text-navy hover-lift"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-cream/80 max-w-2xl mx-auto mb-8">
            Let's discuss how our services can support your next project. Our team is ready to provide customized solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
