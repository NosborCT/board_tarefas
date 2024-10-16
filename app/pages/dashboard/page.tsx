import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Share2, Trash, Trash2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Meu painel de tarefas",
};

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="w-full ">
      <main>
        <section className="w-full flex items-center justify-center">
          <div className="max-w-5xl w-full">
            <h1 className="font-semibold text-lg">Qual sua tarefa ?</h1>
            <form>
              <div className="grid w-full gap-1.5">
                <Textarea
                  className="w-full resize-none h-40 rounded-md outline-none p-2"
                  placeholder="Digite sua tarefa..."
                  id="message"
                />
                <div className="items-top flex space-x-2">
                  <Checkbox id="terms1" className="border-white" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Deixar tarefa publica ?
                    </label>
                  </div>
                </div>
                {/* Botão com animação de transição ao passar o mouse */}
                <Button className="transition duration-300 bg-blue-700 text-white hover:bg-blue-500 hover:text-white">
                  Registrar
                </Button>
              </div>
            </form>
          </div>
        </section>

      </main>


        <section className="bg-white mt-9 ml-auto mb-0 mr-auto p-5 w-full max-w-5xl flex flex-col">
          <h1 className=" text-black  text-3xl mb-3 text-center ">
            Minhas tarefas
          </h1>
          <article className=" mb-3 leading-relaxed flex flex-col border-2  p-3  ">
            <div className=" flex items-center justify-start mb-2">
              <label htmlFor="" className=" bg-blue-500 p-1 rounded text-xs ">
                {" "}
                PUBLICO{" "}
              </label>
              <Button className="bg-transparent" size="icon"  variant="ghost" >
                <Share2 size={22} color="#3183ff" />
              </Button>
            </div>

            <div className="flex items-center justify-between w-full">
              <p className="text-black whitespace-pre-wrap  ">
                Minha primeira tarefa de exemplo! show show
              </p>
              <Button size="icon" variant="ghost" className=" m-0">
                <Trash2 size={24} color="#ea3140" />
              </Button>
            </div>
          </article>

         

         
        </section>
    </div>
  );
};

export default Dashboard;
