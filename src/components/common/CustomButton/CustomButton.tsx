"use client";
import { Button } from "@heroui/react";
import React, { ReactNode } from "react";

export enum ButtonVariant {
  solid = "solid",
  bordered = "bordered",
  light = "light",
  flat = "flat",
  faded = "faded",
  shadow = "shadow",
  ghost = "ghost",
}

export enum ButtonColor {
  default = "default",
  primary = "primary",
  secondary = "secondary",
  success = "success",
  warning = "warning",
  danger = "danger",
}

type CustomButtonProps = {
  children: ReactNode;
  className?: string;
  varient?: ButtonVariant;
  color?: ButtonColor;
};

const CustomButton = ({
  children,
  className,
  varient,
  color,
}: CustomButtonProps) => {
  return (
    <Button
      variant={varient}
      color={color}
      className={`${className} bg-linear-to-r from-primary to-on-secondary`}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
