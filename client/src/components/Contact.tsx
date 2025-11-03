import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    origin: "",
    destination: "",
    date: "",
    passengers: "1",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá Evandro! Gostaria de solicitar um orçamento com os seguintes dados:\n\nNome: ${formData.name}\nOrigem: ${formData.origin}\nDestino: ${formData.destination}\nData: ${formData.date}\nPassageiros: ${formData.passengers}`;
    window.open(
      `https://wa.me/5511997654713?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

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
            Entre em Contato
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Pronto para sua próxima viagem? Fale comigo agora mesmo!
          </p>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div
              className="flex gap-4 items-start"
              variants={itemVariants}
            >
              <div className="p-4 bg-accent/10 rounded-lg">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/5511997654713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  (11) 99765-4713
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4 items-start"
              variants={itemVariants}
            >
              <div className="p-4 bg-accent/10 rounded-lg">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Instagram</h3>
                <a
                  href="https://instagram.com/motorista_evandrojorge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  @motorista_evandrojorge
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4 items-start"
              variants={itemVariants}
            >
              <div className="p-4 bg-accent/10 rounded-lg">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Localização</h3>
                <p className="text-foreground/70">São Paulo, SP</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-xl p-6"
              variants={itemVariants}
            >
              <h3 className="font-semibold text-foreground mb-3">Horário de Atendimento</h3>
              <p className="text-foreground/70 text-sm">Segunda a Domingo</p>
              <p className="text-accent font-semibold">24 horas</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <label className="block text-foreground font-semibold mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-background border border-accent/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors"
                placeholder="Seu nome"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-foreground font-semibold mb-2">
                Origem
              </label>
              <input
                type="text"
                name="origin"
                value={formData.origin}
                onChange={handleChange}
                required
                className="w-full bg-background border border-accent/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors"
                placeholder="De onde você sai?"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-foreground font-semibold mb-2">
                Destino
              </label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
                className="w-full bg-background border border-accent/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors"
                placeholder="Para onde você vai?"
              />
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-4" variants={itemVariants}>
              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Data
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-accent/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Passageiros
                </label>
                <select
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full bg-background border border-accent/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Passageiro" : "Passageiros"}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50"
              >
                Enviar Cotação via WhatsApp
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
