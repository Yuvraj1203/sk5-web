import { Section, SectionHeading } from "@/components/common";
import React from "react";
import FaqAccordian from "./FaqAccordian";

const faqData = [
  {
    id: 1,
    title: "How is SK5 Marketing different from traditional agencies?",
    desc: "Unlike agencies that charge upfront retainers, we work on a performance first model with zero upfront costs. You only pay when our efforts directly generate sales for your Home Service Businesses",
  },
  {
    id: 2,
    title: "Do I need to invest in ads separately?",
    desc: "Yes — for the best results, set aside a dedicated ad budget for platforms like Google and Meta etc. This ensures that 100% of your advertising spend goes directly toward reaching Home Service Businesses customers. We handle all strategy, setup, and optimization at no extra cost. You pay the ad networks, and we take care of the rest — no hidden fees, just more leads for your business.",
  },
  {
    id: 3,
    title: "What does “Exclusive Territory” mean for me?",
    desc: "It means we partner with only one Home Service Businesses company per region. Once you’re our client, we won’t work with your competitors in the same area.",
  },
  {
    id: 4,
    title:
      "Can you help if my Home Service Businesses is new or has no online presence?",
    desc: "Absolutely. We help you build everything from the ground up—your website, social media, SEO, and Google My Business optimization etc—along with lead generation and appointment booking. This creates a complete growth engine to help you start attracting customers right away.",
  },
];

export type FaqDataModel = (typeof faqData)[number];

const Faq = () => {
  return (
    <Section containerStyle="bg-background">
      <SectionHeading className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-secondary text-center">
        {"Frequently Asked Questions"}
      </SectionHeading>
      <FaqAccordian accordianData={faqData} />
    </Section>
  );
};

export default Faq;
