import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Currency utility using currency.js
 *
 * This file provides a configured instance of currency.js for handling
 * Nigerian Naira (₦) monetary values with proper formatting and precision.
 *
 * Values are stored in kobo (smallest unit) and converted for display.
 */

import currency from "currency.js";

/**
 * Converts kobo (smallest unit) to Naira for display
 * 1 Naira = 100 kobo
 */
export const koboToNaira = (kobo: number): number => {
  return kobo / 100;
};

/**
 * Converts Naira to kobo (smallest unit) for storage
 */
export const nairaToKobo = (naira: number): number => {
  return Math.round(naira * 100);
};

/**
 * Creates a currency.js instance configured for Naira
 * @param koboValue - The monetary value in kobo
 */
export const naira = (koboValue: number) =>
  currency(koboToNaira(koboValue), {
    symbol: "₦",
    precision: 2,
    separator: ",",
    decimal: ".",
    pattern: "! #",
    negativePattern: "-! #",
  });

/**
 * Formats a kobo value as Nigerian Naira
 * @param koboValue - The monetary value in kobo
 * @param options - Optional formatting options
 */
export const formatNaira = (
  koboValue: number,
  options?: {
    /** Whether to include the currency symbol */
    symbol?: boolean;
    /** Whether to include decimal places */
    showDecimals?: boolean;
  }
) => {
  const { symbol = true, showDecimals = false } = options || {};

  const config: currency.Options = {
    symbol: symbol ? "₦" : "",
    precision: showDecimals ? 2 : 0,
    separator: ",",
    decimal: ".",
    pattern: "! #",
    negativePattern: "-! #",
  };

  return currency(koboToNaira(koboValue), config).format();
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
