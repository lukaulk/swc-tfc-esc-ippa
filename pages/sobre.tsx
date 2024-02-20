import Nav from '@/components/myui/Nav'
import "@/app/globals.css"
import Header from "@/components/myui/Header"

export default function Estagio() {
    return (
        <div className="flex flex-row w-full h-screen">
            <Nav />
            <div className="flex-1 flex flex-col h-screen bg-gray-100">
                <Header content="Sobre" name="Tomás Lukas" />
                <section className="w-full max-w-[1200px] justify-center bg-gray-50 border  mt-1 border-l-0 border-blue-500 h-screen  text-gray-950">
                    <h1>Bem Vindo!</h1>
                </section>
            </div>
        </div>
    )
} 