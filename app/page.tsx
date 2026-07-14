import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AtelierSection from "@/components/AtelierSection";
import CraftSection from "@/components/CraftSection";
import ProcessSection from "@/components/ProcessSection";
import Collection from "@/components/Collection";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AtelierSection />
        <CraftSection />
        <ProcessSection />
        <Collection />
        <ConsultationSection />
      </main>
      <Footer />
    </>
  );
}
