"use client"; // Marca este componente como um componente de cliente.

import { useState, ChangeEvent, FormEvent } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Share2, Trash2 } from "lucide-react";

import { db } from '../../services/firebaseConnection';
import { addDoc, collection } from 'firebase/firestore';

interface DashboardProps {
  user: {
    email: string,
    name: string,
  } | null; // Tipo para o usuário, podendo ser nulo
}

const Dashboard = ({ user }: DashboardProps) => {
  // Estado para armazenar a tarefa e se é pública ou não.
  const [input, setInput] = useState("");
  const [publicTask, setPublicTask] = useState(false);

  // Função para lidar com a mudança do checkbox de tarefa pública.
  function handleChangePublic(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.checked);
    setPublicTask(event.target.checked);
  }

  async function handleRegisterTask(event: FormEvent) {
    event.preventDefault();

    if (input === "") return; // Verifica se o campo de entrada está vazio
    try {
      await addDoc(collection(db, "tarefas"), {
        tarefa: input,
        created: new Date(),
        user: user?.name, // Usa o e-mail do usuário logado
        public: publicTask,
      });
      setInput(""); // Limpa o campo de entrada
      setPublicTask(false); // Reseta o estado do checkbox
      
    } catch (err) {
      console.log(err); // Log de erro
    }
  }

  return (
    <div className="w-full">
      <main>
        <section className="w-full flex items-center justify-center">
          <div className="max-w-5xl w-full">
            <h1 className="font-semibold text-lg">Qual sua tarefa?</h1>
            <form onSubmit={handleRegisterTask}>
              <div className="grid w-full gap-1.5">
                <Textarea
                  className="w-full resize-none h-40 rounded-md outline-none p-2"
                  value={input}
                  onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                    setInput(event.target.value)
                  }
                  placeholder="Digite sua tarefa..."
                  id="message"
                />
                <div className="items-top flex space-x-2">
                  <input 
                    type="checkbox"
                    checked={publicTask}
                    onChange={handleChangePublic}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Deixar tarefa pública?
                    </label>
                  </div>
                </div>
                <Button className="transition duration-300 bg-blue-700 text-white hover:bg-blue-500 hover:text-white">
                  Registrar
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <section className="bg-white mt-9 ml-auto mb-0 mr-auto p-5 w-full max-w-5xl flex flex-col">
        <h1 className="text-black text-3xl mb-3 text-center">Minhas tarefas</h1>
        <article className="mb-3 leading-relaxed flex flex-col border-2 p-3">
          <div className="flex items-center justify-start mb-2">
            <label className="bg-blue-500 p-1 rounded text-xs">PÚBLICO</label>
            <Button className="bg-transparent" size="icon" variant="ghost">
              <Share2 size={22} color="#3183ff" />
            </Button>
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-black whitespace-pre-wrap">
              Minha primeira tarefa de exemplo! show show
            </p>
            <Button size="icon" variant="ghost" className="m-0">
              <Trash2 size={24} color="#ea3140" />
            </Button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Dashboard;
