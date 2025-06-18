import Navbar from "../components/Navbar";
import Content from "../components/Content";
import LeadForm from "../components/LeadForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div class="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Content />
      </main>
      <Footer />
    </div>
  );
}
