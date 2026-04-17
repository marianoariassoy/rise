import { WhatsApp } from "@/lib/icons";

const Whatsapp = () => {
  return (
    <div className="fixed bottom-8 right-4 z-30">
      <a
        href="https://wa.me/54938740660014"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 bg-secondary text-white rounded-full p-2 flex items-center justify-center text-2xl shadow-lg hover:scale-105 transition-all duration-300"
      >
        <WhatsApp />
      </a>
    </div>
  );
};

export default Whatsapp;
