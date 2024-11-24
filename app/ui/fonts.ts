import {  Inter, Lusitana } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
});

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});