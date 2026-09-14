import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "graphite" | "ghost" | "soft";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#e85d04] text-white hover:bg-[#c44d03] disabled:bg-[#e85d04]/50",
  graphite:
    "bg-[#1f2933] text-white hover:bg-[#161b22] disabled:bg-[#1f2933]/50",
  ghost:
    "border border-[#e4e7eb] bg-[#f4f5f7] text-[#1f2933] hover:bg-[#e4e7eb] disabled:text-[#52606d]",
  soft: "bg-[#fff1e6] text-[#c44d03] hover:bg-[#ffd8bf]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

export function buttonClass(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className,
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return <button type={type} className={buttonClass(variant, size, className)} {...props} />;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={buttonClass(variant, size, className)}>
      {children}
    </Link>
  );
}

export function Field({
  label,
  htmlFor,
  hint,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  const hintId = hint ? `${htmlFor}-hint` : undefined;
  const errorId = error ? `${htmlFor}-error` : undefined;
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="block text-sm font-medium text-graphite">
        {label}
      </label>
      <div className="[&_input]:w-full [&_select]:w-full [&_textarea]:w-full [&_input]:rounded-lg [&_select]:rounded-lg [&_textarea]:rounded-lg [&_input]:border [&_select]:border [&_textarea]:border [&_input]:border-line [&_select]:border-line [&_textarea]:border-line [&_input]:bg-white [&_select]:bg-white [&_textarea]:bg-white [&_input]:px-3 [&_select]:px-3 [&_textarea]:px-3 [&_input]:py-2.5 [&_select]:py-2.5 [&_textarea]:py-2.5 [&_input]:text-graphite [&_select]:text-graphite [&_textarea]:text-graphite">
        {children}
      </div>
      {hint ? (
        <p id={hintId} className="text-xs text-graphite-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="text-sm text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl space-y-2">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
      {description ? <p className="text-graphite-muted">{description}</p> : null}
    </div>
  );
}
