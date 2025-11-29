import { 
  Package, 
  HardHat, 
  ClipboardList, 
  Building2, 
  Truck, 
  Wrench 
} from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Trading Division",
    description: "High-quality products from building materials to industrial equipment at competitive prices."
  },
  {
    icon: HardHat,
    title: "Contracting Division",
    description: "Civil, mechanical, and general construction works from design to handover with precision."
  },
  {
    icon: ClipboardList,
    title: "Project Support",
    description: "Comprehensive support including material procurement, manpower, logistics, and technical assistance."
  },
  {
    icon: Building2,
    title: "Facility Management",
    description: "Integrated services designed to optimize asset performance, safety, and lifespan."
  },
  {
    icon: Truck,
    title: "Transportation",
    description: "Modern fleet providing dependable logistics and vehicle support throughout Qatar."
  },
  {
    icon: Wrench,
    title: "Equipment Rental",
    description: "Wide range of heavy and light equipment for construction and industrial projects."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Services & Divisions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering comprehensive solutions across multiple industries with excellence and professionalism.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-8 shadow-soft hover-lift border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-navy rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                <service.icon className="w-7 h-7 text-gold group-hover:text-navy-dark transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
