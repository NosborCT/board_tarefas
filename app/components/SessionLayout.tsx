// app/components/SessionLayout.tsx
"use client"; // Isso garante que o componente seja tratado como um componente de cliente.

import { SessionProvider } from "next-auth/react";

const SessionLayout = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};

export default SessionLayout;
