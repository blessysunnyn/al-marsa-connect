import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  GraduationCap, 
  Heart, 
  TrendingUp,
  Clock,
  Shield,
  Users,
  ArrowRight
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const benefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Regular training and clear pathways for advancement"
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs"
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible schedules and paid time off"
  },
  {
    icon: Shield,
    title: "Job Security",
    description: "Stable employment with a growing company"
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Continuous learning opportunities and certifications"
  },
  {
    icon: Users,
    title: "Team Environment",
    description: "Collaborative and supportive workplace culture"
  }
];

const Careers = () => {
  return (
    <Layout>
      <Helmet>
        <title>Careers | Al Marsa Trading & Contracting</title>
        <meta name="description" content="Join Al Marsa Trading & Contracting team. Explore career opportunities and grow with one of Qatar's leading service providers." />
      </Helmet>
      
      {/* Hero */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-6">
              Join Our Team
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Build Your Career With Us
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Al Marsa is powered by a team of qualified professionals who share a common goal — delivering excellence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Why Work With Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-medium mb-4">
              Why Join Al Marsa
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Benefits & Perks
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We invest in our people because we know that our success depends on their growth and well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card rounded-xl p-6 shadow-soft border border-border/50 hover-lift"
              >
                <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-navy text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Open Positions */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-medium mb-4">
              Current Openings
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our current job openings and find the perfect opportunity to advance your career.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-12 shadow-soft border border-border/50 text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-navy text-xl mb-2">No Vacancy Available Now</h3>
              <p className="text-muted-foreground">
                We currently don't have any open positions. Please check back later or submit your CV for future opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Our Team Culture
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Our workforce undergoes regular training to stay updated with modern industry 
              standards and safety practices. We believe in creating an environment where 
              every team member can thrive and contribute to our shared success.
            </p>
            <div className="grid grid-cols-3 gap-8 py-8 border-t border-b border-primary-foreground/20">
              {[
                { number: "500+", label: "Team Members" },
                { number: "15+", label: "Nationalities" },
                { number: "95%", label: "Retention Rate" }
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl font-bold text-gold">{stat.number}</p>
                  <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">
            Don't See the Right Position?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            We're always looking for talented individuals. Send us your CV and we'll contact you when a suitable position opens.
          </p>
          <Button variant="hero" size="lg">
            Submit Your CV
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
