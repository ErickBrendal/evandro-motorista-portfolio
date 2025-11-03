import { motion } from "framer-motion";
import { MessageCircle, Instagram, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-background border-t border-accent/20 relative overflow-hidden">
      {/* Reflexos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="container max-w-6xl mx-auto px-4 py-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Sobre */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-foreground mb-4 text-lg">Evandro Jorge</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Motorista Particular Premium em São Paulo com padrão Uber Black.
            </p>
          </motion.div>

          {/* Serviços */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              {["Aeroportos", "Shows e Eventos", "Reuniões Executivas", "Viagens Longas"].map(
                (service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-foreground/60 hover:text-accent transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-accent" />
                <a
                  href="https://wa.me/5511997654713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  (11) 99765-4713
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-accent" />
                <a
                  href="https://instagram.com/motorista_evandrojorge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  @motorista_evandrojorge
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-foreground/60">São Paulo, SP</span>
              </li>
            </ul>
          </motion.div>

          {/* Horário */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4">Horário</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-accent mt-0.5" />
                <div>
                  <p className="text-foreground/60">Disponível 24 horas</p>
                  <p className="text-foreground/60">Todos os dias</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/20 pt-8">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            variants={containerVariants}
          >
            <motion.p className="text-foreground/60 text-sm" variants={itemVariants}>
              &copy; {currentYear} Evandro Jorge - Motorista Particular Premium. Todos os direitos reservados.
            </motion.p>
            <motion.p className="text-foreground/60 text-sm" variants={itemVariants}>
              Desenvolvido com <span className="text-accent">❤️</span> por Manus
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
