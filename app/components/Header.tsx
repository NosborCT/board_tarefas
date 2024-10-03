import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Header = () => {
  return (
    <>
      <header className="w-full max-w-4xl flex justify-between items-center mb-12">
        <h1 className="text-2x1 font-bold flex items-center">
          Tarefas
          <Plus size={14} className="text-red-600" />
        </h1>
        <Button className="text-white border-white hover:bg-white hover:text-black">
          Minhas Contas
        </Button>
      </header>
    </>
  );
};

export default Header;
