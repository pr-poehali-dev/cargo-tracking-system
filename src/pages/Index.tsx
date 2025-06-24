import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RouteCalculator from "@/components/RouteCalculator";
import ContactForm from "@/components/ContactForm";
import FleetGallery from "@/components/FleetGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <RouteCalculator />
      <FleetGallery />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
