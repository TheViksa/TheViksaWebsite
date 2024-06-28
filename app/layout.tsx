import type { Metadata } from "next";
import { Inter, Zilla_Slab } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const sansSerif = Inter({ subsets: ["latin"], variable: "--font-sans-serif" });
const serif = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});
export const metadata: Metadata = {
  title: "The Vixa",
  description:
    "The Vixa nudi savršen spoj divne prirode za odmor i opuštanje te ugodnu atmosferu za proslave i druženja s obitelji i prijateljima!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(" font-sans-serif", sansSerif.variable, serif.variable)}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
