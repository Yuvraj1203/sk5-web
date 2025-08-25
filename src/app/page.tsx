import Header from "@/components/layout/Header";
import FooterSecond from "@/components/layout/FooterSecond";
import Faq from "@/components/pages/landing/Faq/Faq";
import Hero from "@/components/pages/landing/Hero/Hero";
import Testimonial from "@/components/pages/landing/Testimonial/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Testimonial />
      <Faq />
      <FooterSecond />
    </>
  );
}
