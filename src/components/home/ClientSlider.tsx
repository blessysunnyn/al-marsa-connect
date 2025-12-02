import larsenToubro from "@/assets/clients/larsen-toubro.png";
import nakheel from "@/assets/clients/nakheel.png";
import butec from "@/assets/clients/butec.png";
import bahadir from "@/assets/clients/bahadir.png";
import ceprotec from "@/assets/clients/ceprotec.png";
import swanGlobal from "@/assets/clients/swan-global.png";
import qtcg from "@/assets/clients/qtcg.png";
import redco from "@/assets/clients/redco.png";

const ClientSlider = () => {
  const clients = [
    { src: larsenToubro, alt: "Larsen & Toubro" },
    { src: nakheel, alt: "Nakheel Landscapes" },
    { src: butec, alt: "BUTEC" },
    { src: bahadir, alt: "Bahadir Construction" },
    { src: ceprotec, alt: "CEPROTEC" },
    { src: swanGlobal, alt: "Swan Global" },
    { src: qtcg, alt: "QTCG" },
    { src: redco, alt: "Redco International" },
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
