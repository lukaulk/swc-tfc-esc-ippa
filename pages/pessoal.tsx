import Nav from '@/components/myui/Nav'
import "@/app/globals.css"
import Header from "@/components/myui/Header"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { IconCursorText, IconEdit, IconPlus, IconSearch, IconX } from "@tabler/icons-react"

import { ScrollArea } from "@/components/ui/scroll-area"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


  
export default function Pessoal(){ 
     var pessoal = [
        { id: 1, nome: 'Bernadinho Lukau Makuti', info: 'Lorem Ipsum dolor sit'},
        { id: 2, nome: 'Paulo Aberto Maria', info: 'Lorem Ipsum dolor sit'},
        { id: 3, nome: 'Miguel Fransisco Polo', info: 'Lorem Ipsum dolor sit'},
        { id: 4, nome: 'Mavinga Antonio Pedro', info: 'Lorem Ipsum dolor sit'},
        { id: 5, nome: 'Pedro Cazanda Jsa', info: 'Lorem Ipsum dolor sit'},
        { id: 6, nome: 'Pinalaks akskn', info: 'Lorem Ipsum dolor sit'},
        { id: 7, nome: 'Frwadamdoa Mluakas', info: 'Lorem Ipsum dolor sit'},
        { id: 8, nome: 'Lukau Nakaisa lakas asa', info: 'Lorem Ipsum dolor sit'},
    ]

        return (
            <div className="flex flex-row w-full h-screen">
            <Nav/>
                <div className="flex-1 flex flex-col h-screen bg-gray-100">
                    <Header content="Pessoal" name="Tomás Lukas"/> 
                    <section className="w-full max-w-[1200px]  bg-gray-50 border  mt-1 border-l-0 border-gray-300 h-screen  text-gray-950">
                        
                        <div className="flex justify-between">
                        <div className="flex mt-2 ml-2 gap-2">
                            <Input type="search"  placeholder="Pesquisar alunos..." className="border w-[300px] border-gray-400  bg-white" /> 
                            <Button className="mb-2 text-zinc-950 hover:bg-zinc-200 active:bg-zinc-300 shadow-md shadow-zinc-50 border border-zinc-200" ><IconSearch stroke={"white"} className="w-4 mr-2 h-4 rounded-none" strokeWidth={3}/> Pesquisar</Button>
                        </div>

                        <div className="flex mt-2 mr-2"> <Button className="bg-emerald-500 mb-2 text-white hover:bg-emerald-600" ><IconPlus stroke={"white"} className="w-4 mr-2 h-4 rounded-none" strokeWidth={3}/> Adicionar</Button></div>
                        </div>
                        <ScrollArea className="h-[80vh] w-full">
                        <Table>
                        <TableCaption>Listagem dos Alunos cadastrados</TableCaption>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[100px]">ID</TableHead>
                            <TableHead>Nome do Aluno</TableHead>
                            <TableHead>Descrição</TableHead>
                            <TableHead className="text-right">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        
                        <TableBody className="w-full">
                            {pessoal.map((d)=> (
                                <TableRow key={d.id}>
                                    <TableCell className="font-bold">{d.id}</TableCell>
                                    <TableCell>{d.nome}</TableCell>
                                    <TableCell>{d.info}</TableCell>
                                    <TableCell className="text-right">
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button className="text-black hover:bg-gray-100" ><IconEdit  className="w-5 mr-2 h-5 rounded-none" strokeWidth={2}/> Editar</Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="mr-4 flex p-0 flex-col bg-white w-fit items-start">
                                            <Button className="text-black hover:bg-gray-100 active:bg-zinc-300 w-full" ><IconCursorText  className="w-5 mr-2 h-5 rounded-none" strokeWidth={2}/> Renomear</Button>
                                            <Button className="text-red-700 hover:bg-gray-100 active:bg-zinc-300 w-full" ><IconX className="w-5 mr-2 h-5 rounded-none" strokeWidth={2}/> Deletar</Button>
                                            </PopoverContent>
                                        </Popover>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                            <TableCell className="text-zinc-600" colSpan={3}>Existem <b>{pessoal.length}</b> Departamentos no Total</TableCell>
                            </TableRow>
                        </TableFooter>
                        </Table>
                        </ScrollArea>

                    </section>
                </div>
            </div>
        )
} 