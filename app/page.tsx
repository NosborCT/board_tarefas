import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImg from "@/hero.png"
export default function Home() {
  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white flex flex-col items-center justify-center p-4">
      
      <main className="text-center ">
        <div className="mb-8">
          <div className="w-full max-w-2xl h-64 bg-gray-800 rounded-lg mx-auto mb-12 flex items-center justify-center">
           <Image alt="logo tarefas" src={heroImg} />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-4">
          Sistema feito para você organizar<br />seus estudos e tarefas
        </h2>
        
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" className="bg-white text-black hover:bg-gray-200">
            + 7mil posts
          </Button>
          <Button variant="secondary" className="bg-white text-black hover:bg-gray-200">
            + 1 mil comentários
          </Button>
        </div>
      </main>
    </div>
  );
}
