import Header from "@/app/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meu painel de tarefas",
};

const Dashboard = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default Dashboard;
