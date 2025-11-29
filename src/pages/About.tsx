import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Lightbulb, 
  Users, 
  Shield,
  ArrowRight
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "We conduct all operations with transparency and accountability."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest quality in every product and service."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and continuous improvement."
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "We build long-term relationships based on trust and satisfaction."
  },
  {
    icon: Shield,
    title: "Safety",
    description: "We prioritize the well-being of our employees, clients, and communities."
  }
];

const industries = [
  "Construction & Infrastructure",
  "Oil & Gas",
  "Industrial & Manufacturing",
  "Facility & Property Management",
  "Logistics & Transportation",
  "Government & Private Sector Projects"
];

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Us | Al Marsa Trading & Contracting</title>
        <meta name="description" content="Learn about Al Marsa Trading & Contracting - Qatar's trusted service provider since 2015. Our vision, mission, values, and commitment to excellence." />
      </Helmet>
      
      {/* Hero */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Building Excellence Since 2015
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Al Marsa Trading & Contracting is one of Qatar's most reliable and diversified 
              service providers, delivering excellence across multiple industries.
            </p>
          </div>
        </div>
      </section>
      
      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                A Journey of Growth & Trust
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our journey began with a simple vision — to build a company that values 
                  integrity, quality, and customer satisfaction. Headquartered in Doha, we 
                  specialize in trading, contracting, project support, facility management, 
                  transportation, equipment rental, and manpower supply.
                </p>
                <p>
                  Over the years, Al Marsa has grown into a trusted name recognized for its 
                  professionalism, efficiency, and long-term partnerships with clients in 
                  both public and private sectors.
                </p>
              </div>
            </div>
            <div className="bg-navy rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: "10+", label: "Years Experience" },
                  { number: "100+", label: "Projects Completed" },
                  { number: "500+", label: "Skilled Workers" },
                  { number: "50+", label: "Happy Clients" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-serif text-4xl font-bold text-gold mb-2">{stat.number}</p>
                    <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 md:p-10 shadow-soft">
              <div className="w-14 h-14 bg-navy rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading Qatari company recognized for excellence, reliability, and 
                innovation in providing integrated business solutions that contribute to 
                the nation's sustainable development.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 md:p-10 shadow-soft">
              <div className="w-14 h-14 bg-navy rounded-lg flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide superior quality services and products that exceed client 
                expectations. We focus on operational efficiency, safety, and timely 
                delivery, ensuring that every project reflects our dedication to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-medium mb-4">
              What We Stand For
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Core Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 shadow-soft border border-border/50 hover-lift"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-gold-dark" />
                </div>
                <h3 className="font-semibold text-navy text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industries */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Industries We Serve
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-6 py-3 bg-primary-foreground/10 text-primary-foreground rounded-full border border-primary-foreground/20 hover:bg-gold hover:text-navy-dark hover:border-gold transition-all duration-300 cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Partner with Al Marsa for your next project and experience our commitment to excellence.
          </p>
          <Button variant="navy" size="lg" asChild>
            <Link to="/contact">
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
