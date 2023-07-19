/* eslint-disable @next/next/no-page-custom-font */
"use client";
import type { Metadata } from 'next';
import 'tailwindcss/tailwind.css';

export const metadata: Metadata = {
  title: 'Word Guessing',
  description: 'Developed By @XausMaster',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
