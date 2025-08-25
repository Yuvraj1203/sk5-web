"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Card, CardBody } from "@heroui/react";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Example using Formspree or your API endpoint
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    }
  };

  const testimonials = [
    { name: "Ravi Kumar", text: "Great service and professional team!" },
    {
      name: "Anita Sharma",
      text: "They helped us grow our business efficiently.",
    },
    { name: "Rahul Mehta", text: "Highly recommended for reliable support." },
  ];

  const services = [
    {
      title: "Web Development",
      desc: "Modern and fast websites for your business.",
    },
    {
      title: "Digital Marketing",
      desc: "Reach more customers with our marketing strategies.",
    },
    {
      title: "Consulting",
      desc: "Expert advice to grow and scale your company.",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Welcome to Our Business
          </motion.h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We provide top-notch services to help your business grow.
          </p>
        </section>

        {/* Services Section */}
        <section className="py-16 px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Provide
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Card key={i} className="shadow-lg rounded-2xl">
                <CardBody className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p>{s.desc}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="shadow-md rounded-2xl">
                <CardBody className="p-6">
                  <p className="italic mb-4">“{t.text}”</p>
                  <h4 className="font-semibold">- {t.name}</h4>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          {submitted ? (
            <p className="text-center text-green-600 font-medium">
              ✅ Thank you! We’ll get back to you soon.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="mb-4">
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border rounded-lg px-4 py-2"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
