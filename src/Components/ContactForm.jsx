import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const ContactForm = () => {
  const [status, setStatus] = useState(""); // Para manejar el estado del envío
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xreyjwpz", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset(); // Limpia el formulario tras el envío
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    } finally {
      setLoading(false);
    }
  };

  if (status === "SUCCESS") {
    return (
      <div className="bg-[#191919] p-8 rounded-3xl border border-white/10 text-center text-white space-y-4">
        <div className="flex justify-center text-[#00ff88]">
          <CheckCircle size={48} />
        </div>
        <h3 className="text-xl font-bold">¡Mensaje enviado!</h3>
        <p className="text-gray-400">Gracias por contactarme, te responderé lo antes posible.</p>
        <button 
          onClick={() => setStatus("")}
          className="text-[#00ff88] underline hover:text-[#00cc6e] transition"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      autoComplete="off" 
      className="bg-[#191919] p-8 rounded-3xl border border-white/10 space-y-4 text-white"
    >
      <input 
        name="nombre"
        type="text" 
        placeholder="Tu Nombre" 
        required
        className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:border-[#00ff88] outline-none" 
      />

      <input 
        name="email"
        type="email" 
        placeholder="Tu Email" 
        required
        className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:border-[#00ff88] outline-none" 
      />

      <textarea 
        name="mensaje"
        placeholder="Tu Mensaje" 
        rows="4" 
        required
        className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:border-[#00ff88] outline-none resize-none"
      ></textarea>

      <button 
        type="submit"
        disabled={loading}
        className="w-full bg-[#00ff88] text-black font-bold py-3 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Enviando..." : "Enviar Mensaje"} <Send size={18} />
      </button>

      {status === "ERROR" && (
        <p className="text-red-500 text-sm text-center">Ocurrió un error, por favor intenta de nuevo.</p>
      )}
    </form>
  );
};