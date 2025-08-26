import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Faq from "@/components/pages/landing/Faq/Faq";
import Hero from "@/components/pages/landing/Hero/Hero";
import Testimonial from "@/components/pages/landing/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  );
}
