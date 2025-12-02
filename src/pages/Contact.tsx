import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Linkedin,
  Instagram,
  Facebook
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Al Marsa Trading & Contracting</title>
        <meta name="description" content="Contact Al Marsa Trading & Contracting. Get in touch for inquiries about our services in trading, contracting, and project support in Qatar." />
      </Helmet>
      
      {/* Hero */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-6">
              Get In Touch
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Have a project in mind? We'd love to hear from you. Reach out and let's discuss how we can help.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50">
              <h2 className="font-serif text-2xl font-bold text-navy mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+974 XXXX XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button variant="navy" size="lg" type="submit" className="w-full">
                  Send Message
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of the following channels. Our team is ready to assist you with your inquiries.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                  <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Head Office</h3>
                    <p className="text-muted-foreground">Doha, Qatar</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                  <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Phone</h3>
                    <a href="tel:+974XXXXXXXX" className="text-muted-foreground hover:text-navy transition-colors">
                      +974 XXXXXXXX
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                  <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Email</h3>
                    <a href="mailto:info@almarsa.com" className="text-muted-foreground hover:text-navy transition-colors">
                      info@almarsa.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                  <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Sunday - Thursday: 8:00 AM - 5:00 PM<br />
                      Friday - Saturday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-navy mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-navy flex items-center justify-center hover:bg-gold transition-colors group">
                    <Linkedin className="w-5 h-5 text-gold group-hover:text-navy-dark transition-colors" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-navy flex items-center justify-center hover:bg-gold transition-colors group">
                    <Instagram className="w-5 h-5 text-gold group-hover:text-navy-dark transition-colors" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-navy flex items-center justify-center hover:bg-gold transition-colors group">
                    <Facebook className="w-5 h-5 text-gold group-hover:text-navy-dark transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map placeholder */}
      <section className="bg-muted">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-navy rounded-xl h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
              <p className="text-primary-foreground font-medium">Doha, Qatar</p>
              <p className="text-primary-foreground/60 text-sm">Map integration available</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
