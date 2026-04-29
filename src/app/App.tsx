import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Menu } from "./components/Menu";
import { Catering } from "./components/Catering";
import { Testimonials } from "./components/Testimonials";
import { Hours } from "./components/Hours";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Menu />
      <Catering />
      <Testimonials />
      <Hours />
      <Footer />
    </div>
  );
}