import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deepti Maheshwari",
  description: "'In spite of the odds, I'm glad you found me.'",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
