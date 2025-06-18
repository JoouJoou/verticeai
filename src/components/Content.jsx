import phone from "../assets/phoneimg.png";
import stripLeft from "../assets/stripleft.png";
import stripRight from "../assets/stripright.png";
import chatgpt from "../assets/chatgpt.png";
import tablerai from "../assets/tabler_ai.png";
import deepseek from "../assets/deepseek.png";
import gemini from "../assets/gemini.png";
import LeadForm from "./LeadForm";
import { useRef } from "react";

export default function Content() {
  const formRef = useRef(null);
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative flex flex-col justify-center overflow-hidden px-4 md:px-10">
      <img
        src={stripLeft}
        alt="Strip Left"
        className="
    absolute left-0 top-0 
    h-full max-w-none 
    z-[-1] pointer-events-none 
   sm:h[20%] md:h-[40%] lg:h-[100%] hidden sm:block
  "
      />

      <img
        src={stripRight}
        alt="Strip Right"
        className="
    absolute right-0 top-0 
    h-full max-w-none 
    z-[-1] pointer-events-none 
    sm:h[20%] md:h-[40%] lg:h-[100%] hidden sm:block
  "
      />

      <h1 className="font-satoshibold text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] xl:text-[80px] text-center leading-tight">
        Criando produtos com <span className="text-vertice-blue">IA</span>
        <br />
        para seu dia a dia e negócios
      </h1>

      <p className="font-satoshi text-center text-[14px] sm:text-[16px] md:text-[18px] mt-4">
        A Inteligência Artificial deixou de ser ficção científica para
        <br className="hidden md:block" />
        se tornar uma{" "}
        <span className="text-vertice-blue font-satoshibold">
          ferramenta essencial
        </span>{" "}
        no nosso cotidiano.
      </p>

      <button
        onClick={scrollToForm}
        className="rounded-full bg-vertice-blue text-white w-[180px] h-[40px] font-satoshibold mx-auto cursor-pointer mt-6 mb-[40px]"
      >
        Entre em contato
      </button>

      <img
        src={phone}
        alt="Celular"
        className="w-[90%] max-w-[800px] mx-auto object-contain -translate-x-1 md:-translate-x-6"
      />

      <h2 className="font-satoshibold text-[16px] sm:text-[18px] md:text-[22px] lg:text-[25px] text-center mt-[60px] md:mt-[90px] px-4">
        Atualizando bancos de dados e fluxos com IA, criamos o seu agente para
        sua <span className="text-vertice-blue">necessidade.</span>
      </h2>

      <div className="mx-auto flex flex-wrap justify-center gap-[20px] md:gap-[30px] mt-[30px] md:mt-[40px]">
        <img src={chatgpt} className="w-[80px] md:w-[100px]" />
        <img src={tablerai} className="w-[80px] md:w-[100px]" />
        <img src={deepseek} className="w-[80px] md:w-[100px]" />
        <img src={gemini} className="w-[80px] md:w-[100px]" />
      </div>
      <div ref={formRef}>
        <LeadForm />
      </div>
    </section>
  );
}
