"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  icon?: boolean;
  className?: string;
  type?: "button" | "submit";
};

const variants: Record<string, string> = {
  primary: "bg-ink text-white hover:bg-accent",
  secondary: "bg-white text-ink border border-line hover:border-accent/40 hover:text-accent",
  ghost: "bg-transparent text-ink hover:text-accent",
};

const sizes: Record<string, string> = {
  md: "px-5 py-2.5 text-[0.9rem]",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  icon = true,
  className,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center gap-2 rounded-full font-medium transition-colors duration-300 whitespace-nowrap",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={classes}
    >
      {children}
      {icon && <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className="group inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="group inline-block">
      {content}
    </button>
  );
}
