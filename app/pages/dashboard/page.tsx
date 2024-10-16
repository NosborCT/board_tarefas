import { Metadata } from "next"; // Importa o tipo Metadata do Next.js para definir metadados da página.
import { getServerSession } from "next-auth"; // Função para obter a sessão do usuário.
import { authOptions } from "../api/auth/[...nextauth]"; // Importa as opções de autenticação configuradas.
import { redirect } from "next/navigation"; // Função para redirecionar o usuário.
import { Textarea } from "@/components/ui/textarea"; // Componente de área de texto.
import { Checkbox } from "@/components/ui/checkbox"; // Componente de checkbox.
import { Button } from "@/components/ui/button"; // Componente de botão.
import { Share2, Trash2 } from "lucide-react"; // Importa ícones do pacote lucide-react.

export const metadata: Metadata = {
  title: "Meu painel de tarefas", // Define o título da página.
};

const Dashboard = async () => {
  // Obtém a sessão do usuário atual.
  const session = await getServerSession(authOptions);

  // Se não houver usuário logado, redireciona para a página inicial.
  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="w-full">
      <main>
        <section className="w-full flex items-center justify-center">
          {/* Container para o formulário de tarefas */}
          <div className="max-w-5xl w-full">
            <h1 className="font-semibold text-lg">Qual sua tarefa ?</h1>
            <form>
              {/* Área de texto para o usuário descrever sua tarefa */}
              <div className="grid w-full gap-1.5">
                <Textarea
                  className="w-full resize-none h-40 rounded-md outline-none p-2"
                  placeholder="Digite sua tarefa..."
                  id="message"
                />
                {/* Checkbox para o usuário marcar se a tarefa será pública */}
                <div className="items-top flex space-x-2">
                  <Checkbox id="terms1" className="border-white" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Deixar tarefa pública?
                    </label>
                  </div>
                </div>
                {/* Botão para registrar a tarefa, com animação de transição ao passar o mouse */}
                <Button className="transition duration-300 bg-blue-700 text-white hover:bg-blue-500 hover:text-white">
                  Registrar
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Seção para exibir as tarefas do usuário */}
      <section className="bg-white mt-9 ml-auto mb-0 mr-auto p-5 w-full max-w-5xl flex flex-col">
        <h1 className="text-black text-3xl mb-3 text-center">
          Minhas tarefas
        </h1>
        {/* Exemplo de uma tarefa listada */}
        <article className="mb-3 leading-relaxed flex flex-col border-2 p-3">
          {/* Cabeçalho da tarefa com um rótulo "PÚBLICO" e um botão para compartilhar */}
          <div className="flex items-center justify-start mb-2">
            <label htmlFor="" className="bg-blue-500 p-1 rounded text-xs">
              PÚBLICO
            </label>
            <Button className="bg-transparent" size="icon" variant="ghost">
              <Share2 size={22} color="#3183ff" /> {/* Ícone de compartilhar */}
            </Button>
          </div>

          {/* Conteúdo da tarefa com um botão para excluir */}
          <div className="flex items-center justify-between w-full">
            <p className="text-black whitespace-pre-wrap">
              Minha primeira tarefa de exemplo! show show
            </p>
            <Button size="icon" variant="ghost" className="m-0">
              <Trash2 size={24} color="#ea3140" /> {/* Ícone de lixeira para excluir a tarefa */}
            </Button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Dashboard;
