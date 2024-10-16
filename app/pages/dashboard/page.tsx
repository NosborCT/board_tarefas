import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import Dashboard from "./Dashboard"; // Importe o componente de cliente.

export const metadata: Metadata = {
  title: "Meu painel de tarefas",
};

const Page = async () => {
  // Obtém a sessão do usuário no servidor.
  const session = await getServerSession(authOptions);

  // Se não houver usuário logado, redireciona para a página inicial.
  if (!session?.user) {
    redirect("/");
  }

  return (
    <Dashboard user={session?.user} /> // Passa o usuário como prop para o Dashboard
  );
};

export default Page;
