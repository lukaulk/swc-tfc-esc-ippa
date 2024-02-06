import { Button } from "@/components/ui/button"
import { IconAlertCircle, IconBook2,  IconHome2,  IconSchool, IconTable, IconUser } from "@tabler/icons-react";

export default function Nav(){
    return (
    <nav className="w-[200px] text-left h-screen bg-gray-50 text-white rounded-none border-r border-gray-300 shadow-lg">
         <div className="flex w-full mt-4 flex-col text-left">
               <Button  className="flex justify-start m-2 hover:bg-gray-100 hover:text-emerald-500 text-[14px] rounded-md shadow-sm text-gray-950  "><IconHome2 strokeWidth={2} size={20} className="mr-3"/> Departamento</Button>
               <Button  className="flex justify-start m-2 hover:bg-gray-100 hover:text-emerald-500 text-[14px] rounded-md shadow-sm text-gray-950   "><IconUser strokeWidth={2} size={20} className="mr-3"/> Pessoal</Button>
               <Button  className="flex justify-start m-2 hover:bg-gray-100 hover:text-emerald-500 text-[14px] rounded-md shadow-sm text-gray-950   "><IconBook2 strokeWidth={2} size={20} className="mr-3" /> Monografia</Button>
               <Button  className="flex justify-start m-2 hover:bg-gray-100 hover:text-emerald-500 text-[14px] rounded-md shadow-sm text-gray-950   "><IconSchool strokeWidth={2} size={20} className="mr-3"/> Estágio</Button>
               <Button  className="flex justify-start m-2 hover:bg-gray-100 hover:text-emerald-500 text-[14px] rounded-md shadow-sm text-gray-950   "><IconTable  strokeWidth={2} size={20} className="mr-3" /> Banca</Button>
               <Button  className="flex justify-start m-2 hover:bg-gray-100 hover:text-emerald-500 text-[14px] rounded-md shadow-sm text-gray-950  "><IconAlertCircle  strokeWidth={2} size={20} className="mr-3" /> Sobre</Button>
         </div>
     </nav>
    )
}