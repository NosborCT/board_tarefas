/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header"; 
import SessionLayout from "./components/SessionLayout"; // Importa o novo componente

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Board Tarefas",
  description: "Projeto de um board de tarefas pessoais",
};

export default function RootLayout({
  children,
  session, // Recebe session diretamente como prop
}: Readonly<{
  children: React.ReactNode;
  session: any; // Define o tipo da sessão
}>) {
  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0F0F0F] min-h-screen text-white flex flex-col items-center justify-center p-4`} 
      >
        {/* Envolve todo o conteúdo com SessionLayout */}
        <SessionLayout session={session}>
          <Header />
          
          {/* Renderiza o conteúdo da página */}
          {children}
        </SessionLayout>
      </body>
    </html>
  );
}
