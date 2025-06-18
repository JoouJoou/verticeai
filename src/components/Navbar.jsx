import logo from "../assets/verticelogo.png";

export default function Navbar() {
  return (
    <header class="bg-vertice-blue size-full shadow-xl/30 mb-[30px] h-[70px]">
      <nav class="flex w-[95%] h-[100%] mx-auto my-auto">
        <div class="flex flex-row gap-[10px] items-center">
          <img src={logo} alt="Logo Vertice" class="w-[20px] h-[45px]"></img>
          <h1 class="font-satoshibold text-[30px] text-white">Vertice</h1>
        </div>
      </nav>
    </header>
  );
}
