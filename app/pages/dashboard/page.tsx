
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Meu painel de tarefas",
};


const Dashboard = async () => {


  const session = await getServerSession(authOptions);

  if(!session?.user){
    redirect("/");
  }



  return (
    <>
    <h1> dashboard</h1>
    </>
  );
};

export default Dashboard;
