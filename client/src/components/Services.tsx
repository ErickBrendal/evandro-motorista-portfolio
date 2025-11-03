import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Plane, Music, Briefcase, Navigation, Star } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Plane,
      title: "Aeroportos",
      description: "Traslados seguros e pontuais para aeroportos",
      emoji: "✈️",
    },
    {
      icon: Music,
      title: "Shows e Eventos",
      description: "Transporte para eventos especiais com conforto",
      emoji: "🎶",
    },
    {
      icon: Briefcase,
      title: "Reuniões Executivas",
      description: "Serviço premium para profissionais",
      emoji: "💼",
    },
    {
      icon: Navigation,
      title: "Viagens Longas e Curtas",
      description: "Flexibilidade para qualquer distância",
      emoji: "🚗",
    },
    {
      icon: Star,
      title: "Serviço Premium Uber Black",
      description: "Experiência de luxo garantida",
      emoji: "⭐",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-card/30 relative overflow-hidden">
      {/* Reflexos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="container max-w-6xl mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meus Serviços
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Oferecemos uma variedade de serviços de transporte adaptados às suas necessidades
          </p>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group bg-background border border-accent/20 rounded-xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                {/* Icon */}
                <div className="mb-6 inline-block p-4 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title} {service.emoji}
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Button */}
                <a
                  href="https://wa.me/5511997654713?text=Olá%20Evandro,%20gostaria%20de%20um%20orçamento%20para%20uma%20viagem."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    Solicitar Cotação
                  </Button>
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 rounded-2xl p-8 md:p-12 text-center"
          variants={itemVariants}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Pronto para sua próxima viagem?
          </h3>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Fale comigo no WhatsApp e receba um orçamento personalizado para seu trajeto
          </p>
          <a
            href="https://wa.me/5511997654713?text=Olá%20Evandro,%20gostaria%20de%20um%20orçamento%20para%20uma%20viagem."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-lg"
            >
              Conversar no WhatsApp
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
