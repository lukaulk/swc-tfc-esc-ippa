import Nav from '@/components/myui/Nav'
import "@/app/globals.css"
import BodyContent from '@/components/myui/BodyContent'

export default function Pessoal(){
        return (
            <div className="flex flex-row w-full h-screen">
            <Nav/>
            <BodyContent />
            </div>
        )
}