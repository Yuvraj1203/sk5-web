import Faq from "@/components/pages/landing/Faq/Faq";
import Hero from "@/components/pages/landing/Hero/Hero";
import PreFooter from "@/components/pages/landing/PreFooter/PreFooter";
import Testimonial from "@/components/pages/landing/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonial />
      <Faq />
      <PreFooter />
    </>
  );
}
