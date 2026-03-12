import Navbar from "@/components/ui/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";
import CartDrawer from "@/components/ui/CartDrawer";
import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-street-dark text-white font-sans selection:bg-street-accent selection:text-street-dark">
      <Preloader />
      <CustomCursor />
      <CartDrawer />
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Gallery />
      <Footer />
    </main>
  );
}