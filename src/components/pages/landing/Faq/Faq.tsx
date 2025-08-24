import { Section, SectionHeading } from "@/components/common";
import Accordian from "@/components/common/Accordian/Accordian";
import React from "react";
import FaqAccordian from "./FaqAccordian";

const faqData = [
  {
    id: 1,
    title: "What makes your services different?",
    desc: "We focus on providing customized solutions tailored to your business needs, rather than offering a one-size-fits-all approach.",
  },
  {
    id: 2,
    title: "How long does it take to get started?",
    desc: "Most clients get started within 24–48 hours. Once we understand your requirements, our team quickly sets up everything to kick off the process.",
  },
  {
    id: 3,
    title: "Do you provide ongoing support?",
    desc: "Yes! We offer continuous support and maintenance to ensure smooth performance and address any issues that may arise.",
  },
  {
    id: 4,
    title: "Is there a free trial or demo available?",
    desc: "Absolutely. We provide a free demo to help you explore our features before making any commitments.",
  },
  {
    id: 5,
    title: "What type of businesses do you work with?",
    desc: "We work with startups, small businesses, and enterprises across multiple industries, including e-commerce, finance, healthcare, and technology.",
  },
  {
    id: 6,
    title: "How secure is my data with you?",
    desc: "Your data security is our top priority. We follow industry-standard encryption protocols and comply with all major security regulations.",
  },
  {
    id: 7,
    title: "Can I customize the solution to match my brand?",
    desc: "Yes, our solutions are fully customizable — from design elements to feature sets, ensuring they align perfectly with your brand identity.",
  },
  {
    id: 8,
    title: "What are your pricing options?",
    desc: "We offer flexible pricing plans based on your needs — from monthly subscriptions to enterprise-level packages. Contact us for a tailored quote.",
  },
];

export type FaqDataModel = (typeof faqData)[number];

const Faq = () => {
  return (
    <Section containerStyle="bg-on-primary">
      <SectionHeading className="text-center">
        {"Frequently Asked Questions"}
      </SectionHeading>
      <FaqAccordian accordianData={faqData} />
    </Section>
  );
};

export default Faq;
