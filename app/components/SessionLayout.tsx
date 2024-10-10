
"use client"; // Isso garante que o componente seja tratado como um componente de cliente.

import { SessionProvider } from "next-auth/react";

const SessionLayout = ({ children, session }) => {
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
