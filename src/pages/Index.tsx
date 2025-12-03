import Layout from "@/components/layout/Layout";
import VideoHeroSlider from "@/components/home/VideoHeroSlider";
import ServicesSection from "@/components/home/ServicesSection";
import ClientSlider from "@/components/home/ClientSlider";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Al Marsa Trading & Contracting | Qatar's Trusted Service Provider</title>
        <meta name="description" content="Al Marsa Trading & Contracting - One of Qatar's most reliable service providers delivering excellence in trading, contracting, and project support since 2015." />
      </Helmet>
      
      <VideoHeroSlider />
      <ServicesSection />
      <ClientSlider />
      <WhyChooseUs />
      
      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us today to discuss your requirements. Our team is ready to deliver excellence for your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="navy" size="lg" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/careers">View Careers</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
