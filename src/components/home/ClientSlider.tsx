import client1 from "@/assets/client-1.png";
import client2 from "@/assets/client-2.png";
import client3 from "@/assets/client-3.png";

const ClientSlider = () => {
  const clients = [
    { src: client1, alt: "Construction Partner" },
    { src: client2, alt: "Oil & Gas Partner" },
    { src: client3, alt: "Government Projects" },
  ];

  // Duplicate for seamless loop
  const allClients = [...clients, ...clients, ...clients, ...clients];

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
      
      <div className="relative">
        <div className="flex animate-slide">
          {allClients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-32 mx-8 bg-card rounded-lg shadow-soft flex items-center justify-center p-4 hover-lift"
            >
              <img
                src={client.src}
                alt={client.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
