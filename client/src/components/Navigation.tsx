import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "Contato", href: "#contact" },
  ];

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      {/* Desktop Navigation */}
      <motion.div
        className="hidden md:flex gap-8 items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {navItems.map((item, index) => (
          <motion.button
            key={item.label}
            onClick={() => handleScroll(item.href)}
            className="text-foreground/70 hover:text-accent transition-colors font-medium text-sm relative group"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </motion.button>
        ))}
      </motion.div>

      {/* Mobile Navigation Button */}
      <motion.button
        className="md:hidden p-2 rounded-lg bg-accent/10 border border-accent/30 hover:bg-accent/20 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="w-5 h-5 text-accent" />
        ) : (
          <Menu className="w-5 h-5 text-accent" />
        )}
      </motion.button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          className="absolute top-16 right-0 bg-background border border-accent/30 rounded-lg shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col p-4 gap-2 min-w-max">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleScroll(item.href)}
                className="text-foreground/70 hover:text-accent hover:bg-accent/10 px-4 py-2 rounded transition-colors text-sm font-medium text-left"
                whileHover={{ x: 4 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
