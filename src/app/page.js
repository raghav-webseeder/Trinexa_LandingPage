import BenefitsSection from "./components/Benifits";
import ClientsAndAnnouncements from "./components/ClientsAndAnnouncements";
import ClientSavingsSection from "./components/ClientSavingsSection";
import FAQs from "./components/FAQs";
import Hero from "./components/Hero";
import HrSystemsAccordion from "./components/HrSystemsAccordion";
import Testimonials from "./components/Testimonials";
import "./globals.css";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <ClientsAndAnnouncements />
      <HrSystemsAccordion />
      <BenefitsSection />
      <ClientSavingsSection />
      <Testimonials />
      <FAQs/>
    </div>
  );
}
