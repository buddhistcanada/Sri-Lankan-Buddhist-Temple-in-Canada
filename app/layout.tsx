import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sri Lankan Buddhist Temples in Canada",
  description: "A public directory and map of Sri Lankan Buddhist temples in Canada.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
