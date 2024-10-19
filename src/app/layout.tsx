import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { dmSansFont } from "@/fonts";

export const metadata: Metadata = {
  title: "Natala",
  description:
    "Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts and celebrate your successes, one task at a time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSansFont.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
