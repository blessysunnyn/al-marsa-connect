import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Clock, Target, Leaf } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "10+ Years Experience",
    description: "Deep expertise in Qatar's contracting and trading market"
  },
  {
    icon: Target,
    title: "End-to-End Solutions",
    description: "Comprehensive project solutions from start to finish"
  },
  {
    icon: Users,
    title: "Skilled Manpower",
    description: "Strong technical expertise and qualified professionals"
  },
  {
    icon: Award,
    title: "Quality Commitment",
    description: "Highest standards in every product and service"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Prioritizing well-being of employees and clients"
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Responsible practices for environmental welfare"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">
            Why Partner With Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Why Choose Al Marsa
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            A proven track record in delivering projects on time and within budget, building long-term partnerships based on trust.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex items-start gap-4 p-6 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-6 h-6 text-navy-dark" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground mb-1">
                  {reason.title}
                </h3>
                <p className="text-sm text-primary-foreground/70">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
