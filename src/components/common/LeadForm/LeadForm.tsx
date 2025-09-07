"use client";
import React, { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import CustomImage from "../CustomImage/CustomImage";
import { Images } from "@/public";

type LeadFormProps = {
  onClose?: () => void;
};

const LeadForm = ({ onClose }: LeadFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xnnblvdl", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    setLoading(false);

    if (res.ok) {
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        if (onClose) {
          onClose();
        }
      }, 2500);
      form.reset();
    } else {
      setError("Something went wrong. Please try again.");
    }
  };

  const Success = () => {
    return (
      <div className="self-center py-2">
        <div
          className={`scale-125 bg-white rounded-full p-6 shadow-lg flex items-center justify-center duration-400`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-green-500 animate-scaleIn"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
    );
  };

  return (
    <Form className="relative flex flex-col w-full gap-4 " onSubmit={onSubmit}>
      {submitted ? (
        <Success />
      ) : (
        <>
          <Input
            isRequired={true}
            variant={"flat"}
            size={"sm"}
            classNames={{
              inputWrapper:
                "bg-background data-[hover=true]:bg-background group-data-[focus=true]:bg-background !shadow-lightShadow",
            }}
            errorMessage="Please enter a valid email"
            label="Name"
            name="name"
          />
          <Input
            isRequired={true}
            variant={"flat"}
            size={"sm"}
            classNames={{
              inputWrapper:
                "bg-background data-[hover=true]:bg-background group-data-[focus=true]:bg-background !shadow-lightShadow",
            }}
            errorMessage="Please enter a valid email"
            label="Email"
            name="email"
            type="email"
          />
          {error && <p className="text-error text-xs md:text-sm">{error}</p>}
          <Button
            type="submit"
            isLoading={loading}
            className="bg-primary text-on-primary w-1/2 font-semibold text-xl"
          >
            Submit
          </Button>
        </>
      )}
    </Form>
  );
};

export default LeadForm;
