import { motion } from "framer-motion";
import { Clock, Star, Zap } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const features = [
    {
      icon: Zap,
      title: "Profissionalismo",
      description: "Atendimento discreto e cortês em cada trajeto",
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "100% de pontualidade garantida",
    },
    {
      icon: Star,
      title: "Excelência",
      description: "Padrão Uber Black em todos os serviços",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Reflexos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="container max-w-6xl mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Foto profissional */}
          <motion.div className="flex justify-center" variants={itemVariants}>
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent rounded-2xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-accent/30 shadow-xl">
                <img
                  src="/evandro-profile.png"
                  alt="Evandro Jorge"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Sobre Mim
              </h2>
              <div className="h-1 w-20 bg-accent rounded-full"></div>
            </motion.div>

            <motion.p
              className="text-lg text-foreground/80 leading-relaxed"
              variants={itemVariants}
            >
              Sou Evandro, motorista particular com foco em segurança, conforto e pontualidade. Com mais de 10 anos de experiência, atendo aeroportos, shows, eventos e viagens executivas, sempre com discrição e profissionalismo.
            </motion.p>

            <motion.p
              className="text-lg text-foreground/80 leading-relaxed"
              variants={itemVariants}
            >
              Para mim, cada cliente é um convidado especial. Meu compromisso é garantir que sua viagem seja não apenas segura, mas também confortável e memorável. Trabalho com o padrão Uber Black, oferecendo um serviço premium que reflete profissionalismo e atenção aos detalhes.
            </motion.p>

            {/* Features */}
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border border-accent/20 rounded-lg p-6 text-center hover:bg-card/80 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
