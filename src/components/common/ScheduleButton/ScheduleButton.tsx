"use client";
import { Button } from "@heroui/react";
import React from "react";

type ScheduleButtonProps = {
  content?: string;
  className?: string;
};

const ScheduleButton = ({
  content = "Schedule A Call",
  className,
}: ScheduleButtonProps) => {
  return <Button className={`${className}`}>{content}</Button>;
};

export default ScheduleButton;
