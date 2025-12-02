import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-navy-dark font-serif font-bold text-xl">AM</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Al Marsa</h3>
                <p className="text-sm text-gold-light">Trading & Contracting</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              One of Qatar's most reliable and diversified service providers, delivering excellence across multiple industries since 2015.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/careers", label: "Careers" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/80 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-gold">Our Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Trading Division",
                "Contracting Division",
                "Project Support",
                "Facility Management",
                "Transportation",
                "Equipment Rental",
              ].map((service) => (
                <li key={service} className="text-primary-foreground/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">Head Office: Doha, Qatar</span>
              </li>
              <li>
                <a href="tel:+974XXXXXXXX" className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-colors">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm">+974 XXXXXXXX</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@almarsa.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-colors">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm">info@almarsa.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Al Marsa Trading & Contracting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
