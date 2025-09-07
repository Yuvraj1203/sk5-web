"use client";
import { Button } from "@heroui/react";
import React from "react";
import CustomModal, { BackdropEnum } from "../CustomModal/CustomModal";
import { HeroForm } from "@/components/pages";

type ScheduleButtonProps = {
  buttonContent?: string;
  buttonStyle?: string;
};

const ScheduleButton = ({
  buttonContent = "Schedule A Call",
  buttonStyle,
}: ScheduleButtonProps) => {
  return (
    <CustomModal
      closeButton={false}
      wrapperStyle="bg-transparent px-4 shadow-none"
      contentWrapperStyle="p-0"
      backdrop={BackdropEnum.blur}
      children={(onClose) => <HeroForm />}
      trigger={<Button className={`${buttonStyle}`}>{buttonContent}</Button>}
    />
  );
};

export default ScheduleButton;
