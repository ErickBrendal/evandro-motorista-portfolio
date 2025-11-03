import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Serviço impecável, cordial e pontual. Sem dúvidas recomendo!",
      author: "Cliente Executivo",
      rating: 5,
    },
    {
      text: "Nosso traslado foi perfeito. Evandro é atencioso e profissional.",
      author: "Cliente VIP",
      rating: 5,
    },
    {
      text: "Melhor motorista que já conheci. Muito atencioso e seguro.",
      author: "Cliente Premium",
      rating: 5,
    },
    {
      text: "Conforto e segurança garantidos. Voltaria a usar com certeza!",
      author: "Cliente Corporativo",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
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
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O Que Dizem Sobre Mim
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Depoimentos de clientes satisfeitos com meu serviço premium
          </p>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Slider */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={itemVariants}
        >
          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            className="bg-card border border-accent/20 rounded-2xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[currentIndex].rating }).map(
                (_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                )
              )}
            </div>

            {/* Quote */}
            <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author */}
            <p className="text-lg font-semibold text-accent mb-2">
              {testimonials[currentIndex].author}
            </p>
            <p className="text-foreground/60">Cliente Satisfeito</p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-accent/10 hover:bg-accent/20 text-accent rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-accent/10 hover:bg-accent/20 text-accent rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent w-8"
                    : "bg-accent/30 w-2 hover:bg-accent/50"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
