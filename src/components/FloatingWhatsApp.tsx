import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { whatsappLink } from "../lib/site";
import { WhatsAppIcon } from "./ui";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar com Evandro no WhatsApp"
          className="group fixed right-5 bottom-5 z-40 flex items-center gap-3 rounded-full bg-whatsapp py-3.5 pr-5 pl-4 text-white shadow-[0_12px_40px_-8px_rgba(37,211,102,0.6)] sm:right-8 sm:bottom-8"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp/40 [animation-duration:2.5s]" />
          <WhatsAppIcon className="h-6 w-6" />
          <span className="text-sm font-bold">Agendar</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
