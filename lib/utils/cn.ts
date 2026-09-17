import clsx, { type ClassValue } from "clsx";

/** Thin wrapper so call sites read `cn(...)` without importing clsx directly. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
