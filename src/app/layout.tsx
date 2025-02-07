import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../styles/globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJs Template",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
