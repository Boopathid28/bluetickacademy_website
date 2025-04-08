import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import SEO from "@/components/head";
import Head from "next/head";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Add weights as needed
});

export const metadata = {
  title: "Digital Marketing Courses in Bangalore – Enroll at BlueTick Academy!",
  description:
    "BlueTick Academy offers Career oriented Digital Marketing Course in Bangalore.Enroll in basics to advanced Digital Marketing Training in Bangalore. BlueTick Academy is rated as the Top Digital Marketing Training Institute in Bangalore based on faculty experience and placement record.",
  icons: {
    icon: "/icon.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SEO />
      <body className={`${sourceSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
