"use client";

// Importa o componente Button de um caminho local e o ícone Plus da biblioteca lucide-react
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link"; // Importa o componente Link do Next.js para navegação interna
import { useSession, signIn, signOut } from "next-auth/react";



// Define o componente Header como uma função
const Header = () => {

  const {data: session , status} = useSession();

  return (
    <>
      {/* Cabeçalho com largura máxima definida e alinhamento flexível entre os itens */}
      <header className="w-full max-w-4xl flex justify-between items-center mb-12">
        
        <div className="flex ">

        {/* Link que navega para a página inicial "/" */}
        <Link href="/">
          {/* Container flexível para o título "Tarefas" e o ícone "Plus" */}
          <div className="flex items-center cursor-pointer">
            <h1 className="text-2xl font-bold">Tarefas</h1> {/* Título principal do header */}
            <Plus size={14} className="text-red-600 ml-2" /> {/* Ícone de "+" ao lado do título */}
          </div>
        </Link>
        
        {session ?.user && (
          <Link href={"/pages/dashboard"}>
          <div className="ml-2">
            <Button>
              Meu Painel
            </Button>
          </div>
        </Link>

        )}

        </div>

        {/* Botão estilizado com Tailwind CSS, com comportamento visual para hover */}
        
        { status === "loading" ? (
          <></>
        ) : session ? (
          <Button onClick={() => signOut() } className="text-white border-white hover:bg-white hover:text-black">
          Ola {session?.user?.name}
          </Button>
        ) : (
          <Button  onClick={() => signIn("google") }  className="text-white border-white hover:bg-white hover:text-black">
          Acessar 
        </Button>
        )}

      </header>
    </>
  );
};

// Exporta o componente Header para ser utilizado em outras partes da aplicação
export default Header;
