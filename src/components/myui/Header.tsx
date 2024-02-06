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


interface HProps {
  content: string
  name: string,
  image?: string
}
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function Header(props: HProps) {
  return (
    <div className="flex flex-row w-full justify-between items-center bg-white border rounded-lg border-l-0  border-zinc-300 h-16 min-h-15 text-gray-950">
      <h1 className="text-md text-emerald-700 ml-4 font-bold uppercase">
        {props.content ? props.content : "Nome da Seção"}
      </h1>

      <Popover >
        <PopoverTrigger asChild>
          <div className="flex h-full px-4 text-sm font-semibold hover:bg-zinc-50 items-center gap-3 cursor-pointer">
            <span>{props.name ? props.name : "Lukau Lk"}</span>
            <Avatar className="w-8 h-8  border ring-2 ring-emerald-300 border-white ">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback >TM</AvatarFallback>
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
                  <Avatar className="w-24 h-24 border ring-2 ring-emerald-300 border-white ">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback >TM</AvatarFallback>
                  </Avatar>
                  <br />
                  <br />
                  <span className="text-xl">Nome: {props.name}</span>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Link href={"/login"}>
            <Button className="text-red-700 hover:bg-gray-100 active:bg-zinc-300 flex justify-start w-full" ><IconLogout2 className="w-5 mr-2 h-5 rounded-none" strokeWidth={2} /> Terminar Sessão</Button>
          </Link>
        </PopoverContent>
      </Popover>
    </div>
  )
}