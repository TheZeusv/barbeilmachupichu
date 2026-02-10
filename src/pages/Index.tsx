import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Structured data for LocalBusiness
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BarberShop",
      name: "Peluquería Barbería Barbeil Machupichu",
      image: "",
      telephone: "+34914244799",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. de Machupichu, 19, local 45",
        addressLocality: "Madrid",
        addressRegion: "Madrid",
        postalCode: "28043",
        addressCountry: "ES",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        reviewCount: "164",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        closes: "20:30",
      },
      url: window.location.href,
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <main>
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <GallerySection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
