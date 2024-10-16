"use client"; // Isso garante que o componente seja tratado como um componente de cliente.

import { ReactNode } from "react"; // Importa o tipo ReactNode para tipar o children
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth"; // Importa o tipo Session

interface SessionLayoutProps {
  children: ReactNode; // Define o tipo de children
  session: Session | null; // Define o tipo da sessão (pode ser null ou uma sessão)
}

const SessionLayout = ({ children, session }: SessionLayoutProps) => {
  return (
    <html lang="pt-br">
      <body>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
};

export default SessionLayout;
