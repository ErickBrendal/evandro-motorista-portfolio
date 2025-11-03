import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  const whatsappLink = "https://wa.me/5511997654713?text=Olá%20Evandro,%20gostaria%20de%20um%20orçamento%20para%20uma%20viagem.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    },
  };

  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex items-center justify-center pt-20 pb-10">
      {/* Reflexos dourados de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="relative z-10 container max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Conteúdo de texto */}
        <motion.div className="flex-1 text-center lg:text-left" variants={itemVariants}>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Viagens Executivas
            <span className="block text-accent">com Excelência</span>
          </motion.h1>

          <motion.p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Evandro Jorge — Motorista Particular Premium em São Paulo. Conforto, segurança e pontualidade em cada trajeto. Sua viagem, nossa prioridade.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar pelo WhatsApp
              </Button>
            </a>
          </motion.div>

          {/* Estatísticas rápidas */}
          <motion.div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
            {[
              { number: "10+", label: "Anos de Experiência" },
              { number: "500+", label: "Clientes Satisfeitos" },
              { number: "100%", label: "Pontualidade" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <p className="text-2xl md:text-3xl font-bold text-accent mb-1">
                  {stat.number}
                </p>
                <p className="text-xs md:text-sm text-foreground/60">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Foto do Evandro */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          variants={itemVariants}
        >
          <div className="relative w-full max-w-sm">
            {/* Glow de fundo */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-2xl"></div>

            {/* Container da imagem */}
            <motion.div
              className="relative rounded-2xl overflow-hidden border-2 border-accent/30 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/evandro-profile.png"
                alt="Evandro Jorge - Motorista Particular Premium"
                className="w-full h-auto object-cover"
              />

              {/* Overlay com gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
            </motion.div>

            {/* Badge premium */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold shadow-lg text-sm md:text-base"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              ⭐ Uber Black Premium
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-foreground/60 text-sm">Deslize para explorar</p>
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-accent rounded-full"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
