import { Button } from "@/components/ui/button"
import { IconAlertCircle, IconBook2,  IconHome2,  IconSchool, IconTable, IconUser, IconUsersGroup } from "@tabler/icons-react";
import Link from "next/link"

export default function Nav(){
    return (
    <nav className="w-[200px] text-left h-screen bg-gray-50 text-white rounded-none border-r border-gray-300 shadow-lg">
         <div className="flex w-full mt-4 flex-col text-left">
               <Link className="m-2 flex-1" href={"/departamentos"}><Button  className="flex justify-start  hover:bg-gray-100 hover:text-blue-500 text-[14px] rounded-md shadow-sm text-gray-950  w-full"><IconHome2 strokeWidth={2} size={20} className="mr-3"/> Departamento</Button></Link>
               <Link className="m-2 flex-1" href={"/alunos"}><Button  className="flex justify-start  hover:bg-gray-100 hover:text-blue-500 text-[14px] rounded-md shadow-sm text-gray-950   w-full"><IconUser strokeWidth={2} size={20} className="mr-3"/> Alunos</Button></Link>
               <Link className="m-2 flex-1" href={"/professores"}><Button  className="flex justify-start  hover:bg-gray-100 hover:text-blue-500 text-[14px] rounded-md shadow-sm text-gray-950   w-full"><IconUsersGroup strokeWidth={2} size={20} className="mr-3"/> Professores</Button></Link>
               <Link className="m-2 flex-1" href={"/monografia"} ><Button  className="flex justify-start  hover:bg-gray-100 hover:text-blue-500 text-[14px] rounded-md shadow-sm text-gray-950   w-full"><IconBook2 strokeWidth={2} size={20} className="mr-3" /> Monografia</Button></Link>
               <Link className="m-2 flex-1" href={"/estagio"} ><Button  className="flex justify-start  hover:bg-gray-100 hover:text-blue-500 text-[14px] rounded-md shadow-sm text-gray-950   w-full"><IconSchool strokeWidth={2} size={20} className="mr-3"/> Estágio</Button></Link>
               <Link className="m-2 flex-1" href={"/banca"} ><Button  className="flex justify-start  hover:bg-gray-100 hover:text-blue-500 text-[14px] rounded-md shadow-sm text-gray-950   w-full"><IconTable  strokeWidth={2} size={20} className="mr-3" /> Banca</Button></Link>
               <Link className="m-2 flex-1" href={"/sobre"} ><Button  className="flex justify-start  hover:bg-gray-100 hover:text-blue-500 text-[14px] rounded-md shadow-sm text-gray-950  w-full"><IconAlertCircle  strokeWidth={2} size={20} className="mr-3" /> Sobre</Button></Link>
         </div>
     </nav>
    )
}