"use client";
import React from "react";
import { Form, Input, Button } from "@heroui/react";

const LeadForm = () => {
  const [submitted, setSubmitted] = React.useState<any>(null);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data);
  };

  return (
    <Form className="flex flex-col w-full gap-4 " onSubmit={onSubmit}>
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
      <Button
        type="submit"
        className="bg-primary text-on-primary w-1/2 font-semibold text-xl"
      >
        Submit
      </Button>
      {submitted && (
        <div className="text-small text-default-500">
          You submitted: <code>{JSON.stringify(submitted)}</code>
        </div>
      )}
    </Form>
  );
};

export default LeadForm;
