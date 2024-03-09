import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { IconLogout2, IconUser } from "@tabler/icons-react"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import moment from "moment"
import Cookies from "js-cookie"
import { useRouter } from 'next/router'
import { useSession } from "../../../utils/loginAuth"
import { useEffect } from "react"
import { Capitalize, AnalyzeString} from "../../../utils/basics"
interface HProps {
  content?: string
}

export default function Header(props: HProps) {
  const router = useRouter()

  const nomeLogin = typeof window !== 'undefined' ? (useSession() !== false ? (useSession() as any)?.key : undefined) : undefined;
  const timestamp = typeof window !== 'undefined' ? (useSession() !== false ? (useSession() as any)?.timestamp : undefined) : undefined;

  
  const killSession = () => {
    Cookies.remove("sessao")
    router.push("login/")
  }

  useEffect(()=>{
    var user = document.querySelector("#username") 
    user.innerHTML = Capitalize(String(nomeLogin))

    var fall = document.querySelector("#fallused")
    fall.innerHTML = AnalyzeString(String(nomeLogin))
  }, [])
  return (<div className="flex flex-row w-full justify-between items-center bg-white border rounded-lg border-l-0  border-zinc-300 h-16 min-h-15 text-gray-950">
  <h1 className="text-md text-blue-500 ml-6 font-semibold ">
    {props.content ? props.content : "Nome da Seção"}
  </h1>
  <Popover >
    <PopoverTrigger asChild>
      <div className="flex h-full px-4 text-sm font-semibold hover:bg-zinc-50 items-center gap-3 cursor-pointer">
        <span className="text-capitalize" id="username"></span>
        <Avatar className="w-8 h-8  border ring-2 ring-blue-300 border-white ">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback ><span id="fallused"></span></AvatarFallback>
        </Avatar>
      </div>
    </PopoverTrigger>
    <PopoverContent className="mr-4 flex p-0 flex-col bg-white w-fit">
      <Dialog>
        <DialogTrigger>
          <Button className="text-black hover:bg-gray-100 active:bg-zinc-300 flex justify-start w-full" ><IconUser className="w-5 mr-2 h-5 rounded-none" strokeWidth={2} />Informações da Conta</Button>
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Informações da Conta</DialogTitle>
            <br />
            <br />
            <DialogDescription className="flex flex-col items-center justify-center">
              <Avatar className="w-24 h-24 border ring-2 ring-blue-300 border-white ">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback >{AnalyzeString(String(nomeLogin))}</AvatarFallback>
              </Avatar>
              <br />
              <br />
              <span className="text-xl text-capitalize" >Nome: {String(nomeLogin)}</span>
              <br />
              <br />
              <span className="text-base text-green-600">Sessão Iniciada </span>
              <span className="text-sm text-slate-700">Desde {timestamp ? moment(timestamp).format("HH:mm - YYYY") : "Agora"}</span>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
        <Button className="text-red-700 hover:bg-gray-100 active:bg-zinc-300 flex justify-start w-full" onClick={killSession}><IconLogout2 className="w-5 mr-2 h-5 rounded-none" strokeWidth={2} /> Terminar Sessão</Button>
      </PopoverContent>
  </Popover>
</div>)
}
