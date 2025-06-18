import { useState } from "react";
import Swal from "sweetalert2";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enviar para Google Sheets
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxBvSls_C-Z1hFN5dL5XNMfUZ9sTjaE0FEhOO40HN0-NvvxdKoxZIxlP1P3ZQJmLaXY/exec",
        {
          method: "POST",
          mode: "no-cors", // importante
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      Swal.fire({
        icon: "success",
        title: "Agradecemos pelo interesse!",
        text: "Entraremos em contato em breve.",
        confirmButtonColor: "#3CA8CF",
      });
      setFormData({ nome: "", email: "", telefone: "" });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Erro ao enviar",
        text: "Tente novamente mais tarde.",
        confirmButtonColor: "#FF6B6B",
      });
    }
  };

  return (
    <section className="flex justify-center my-10">
      <div className="bg-vertice-blue p-8 rounded-xl w-full max-w-md text-white shadow-lg">
        <h2 className="text-2xl font-satoshibold mb-6 text-center">
          Solicite contato
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Nome"
            required
            className="font-satoshi w-full bg-transparent border-b-1 border-vertice-white text-white placeholder-vertice-white focus:outline-none focus:border-vertice-white"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="font-satoshi w-full bg-transparent border-b-1 border-vertice-white text-white placeholder-vertice-white focus:outline-none focus:border-vertice-white"
          />

          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Telefone"
            required
            className="font-satoshi w-full bg-transparent border-b-1 border-vertice-white text-white placeholder-vertice-white focus:outline-none focus:border-vertice-white"
          />

          <button
            type="submit"
            className="w-full bg-white text-vertice-blue font-satoshibold rounded-md py-2 hover:opacity-90 transition cursor-pointer"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
