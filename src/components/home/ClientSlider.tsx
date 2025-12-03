import clientsComposite from "@/assets/clients-composite.jpg";

const ClientSlider = () => {
  // Client names from the composite image for accessibility
  const clientNames = [
    "Midmac Contracting",
    "BUTEC",
    "Larsen & Toubro",
    "Nakheel Landscapes",
    "Al-Balagh Trading",
    "Bahadir Construction",
    "Bahadir Maltauro JV",
    "CEPROTEC",
    "Bandary Engineering",
    "UCC UrbaCon",
    "Galfar",
    "Swan Global",
    "CERTIS",
    "GSS Group Security",
    "QTCG",
    "Al Wataniya Concrete",
    "AG Middle East",
    "Redco International",
    "ROOTS Energy",
    "Bin Omran Trading",
    "KENTZ Engineers"
  ];

  return (
    <section className="py-16 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-navy mb-4">
          Our Trusted Partners
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          We are proud to have served a range of clients from government bodies, infrastructure developers, and private companies.
        </p>
      </div>
      
      {/* Display the composite client image */}
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-2xl shadow-soft p-8">
          <img
            src={clientsComposite}
            alt={`Our clients: ${clientNames.join(", ")}`}
            className="w-full h-auto object-contain max-h-[600px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
