import "~/styles/globals.css";

import { type Metadata } from "next";
import { Cinzel } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Mystic forge",
  description: "Create your RPG character",
  icons: [{ rel: "icon", url: "/wizard.ico" }],
};

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
