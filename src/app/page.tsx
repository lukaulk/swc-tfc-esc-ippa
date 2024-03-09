"use client"
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { useSession } from "../../utils/loginAuth"

export default function Home() {
  
    const router = useRouter()
    var session = useSession()

    if(session){
        router.push("departamentos/#session_started")
    } else {
        router.push("login/")
    }

  return (
    <div className="flex flex-col w-full h-screen bg-zinc-50 ">
      <header className="w-full h-[60px] bg-white border-b border-zinc-200 flex items-center">
        <h1 className="font-bold ml-4">SWC-IPPA</h1>
      </header>

      <main className="flex flex-col w-full h-full justify-center items-center">

        <h1>
          Bem-vindo
        </h1>

        <Link href={"/login"} className="px-4 py-2 rounded-md bg-blue-500 text-white">
         Acessar Conta
        </Link>
      </main>
    </div>
  );
}
