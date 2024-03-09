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

import { IconCursorText, IconDots, IconPlus, IconSearch, IconX } from "@tabler/icons-react"

import { ScrollArea } from "@/components/ui/scroll-area"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Label }  from "@/components/ui/label"

export default function Professores() {
    var pessoal = [
        { id: 1, nome: 'André João Kiala', info: 'TLP' },
        { id: 2, nome: 'Paulo Aberto Maria', info: 'informática' },
        { id: 3, nome: 'Miguel Fransisco Polo', info: 'Tic' },
        { id: 4, nome: 'Mavinga Antonio Pedro', info: 'matematica' },
        { id: 5, nome: 'Pedro Cazanda Jsa', info: 'pt' },
        { id: 6, nome: 'Pinalaks akskn', info: 'Lorem Ipsum dolor sit' },
        { id: 7, nome: 'Frwadamdoa Mluakas', info: 'Lorem Ipsum dolor sit' },
        { id: 8, nome: 'Lukau Nakaisa lakas asa', info: 'Lorem Ipsum dolor sit' },
    ]

    return (
        <div className="flex flex-row w-full h-screen">
            <Nav />
            <div className="flex-1 flex flex-col h-screen bg-gray-100">
                <Header content="Professores e Orientadores" />
                <section className="w-full max-w-[1200px]  bg-gray-50 border  mt-1 border-l-0 border-blue-500 h-screen  text-gray-950">

                    <div className="flex justify-between">
                        <div className="flex mt-4 ml-6 gap-2">
                            <Input type="search" placeholder="Pesquisar Professores..." className="w-[300px] border-slate-400 focus:outline-blue-500 border placeholder:text-slate-500 bg-slate-200" />
                            <Button className="mb-2 text-slate-800 hover:bg-slate-300 active:bg-slate-400 bg-slate-200" ><IconSearch stroke={"white"} className="w-4 mr-2 h-4 rounded-none" strokeWidth={3} /> Pesquisar</Button>
                        </div>
                        <div className="flex mt-2 mr-2">
                            <Dialog>
                                <DialogTrigger asChild>
                                <Button className="bg-blue-500 mb-2 text-white hover:bg-blue-600" ><IconPlus stroke={"white"} className="w-4 mr-2 h-4 rounded-none" strokeWidth={3} /> Adicionar</Button>
                                </DialogTrigger>
                                <DialogContent className='bg-white'>
                                    <DialogHeader>
                                        <DialogTitle>
                                            Cadastrar Professor 
                                        </DialogTitle>
                                        <DialogDescription>
                                        Digite os dados para cadastrar
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className='flex flex-col mt-4'>
                                                <div className='flex gap-4'>
                                                    <Label> ID <br/><br/>
                                                    <Input type='number' defaultValue={"02"} className='w-[70px] border border-zinc-300 bg-zinc-100 hover:ring-blue-500 hover:ring-2' readOnly/>
                                                    </Label>
                                                    <Label> Nome do Professor <br/><br/>
                                                    <Input type='text' placeholder='Professor ou Orientador' className='w-[180px] border border-zinc-300 bg-zinc-100 hover:ring-blue-500 hover:ring-2' />
                                                    </Label>
                                                    <Label form=''> Disciplina <br/><br/>
                                                    <Input type='text' placeholder='Disciplina que Leciona' className='w-[180px] uppercase border border-zinc-300 bg-zinc-100 hover:ring-blue-500 hover:ring-2' />
                                                    </Label>
                                                </div>
                                           </div>
                                    <DialogFooter>
                                    <Button className="bg-blue-500 mt-4 text-white hover:bg-blue-600 text-center w-full" ><IconPlus stroke={"white"} className="w-4 mr-2 h-4 rounded-none" strokeWidth={3} /> Cadastar Professor</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                    <ScrollArea className="h-[80vh] w-full">
                        <Table>
                            <TableCaption>Listagem dos Professores/Orientadores cadastrados</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">ID</TableHead>
                                    <TableHead>Nome do Orientador</TableHead>
                                    <TableHead>Disciplina</TableHead>
                                    <TableHead className="text-right">Ações</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody className="w-full">
                                {pessoal.map((d) => (
                                    <TableRow key={d.id}>
                                        <TableCell className="font-bold">{d.id}</TableCell>
                                        <TableCell>{d.nome}</TableCell>
                                        <TableCell>{d.info.toUpperCase()}</TableCell>
                                        <TableCell className="text-right">
                                        <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button className="text-black hover:bg-gray-100" ><IconDots className="w-5 mr-2 h-5 rounded-none" strokeWidth={2} /> Opções</Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="mr-4 flex p-0 flex-col bg-white w-fit items-start">
                                                    <Button className="text-black hover:bg-gray-100 active:bg-zinc-300 w-full" ><IconCursorText className="w-5 mr-2 h-5 rounded-none" strokeWidth={2} /> Renomear</Button>
                                                    <Button className="text-red-700 hover:bg-gray-100 active:bg-zinc-300 w-full" ><IconX className="w-5 mr-2 h-5 rounded-none" strokeWidth={2} /> Deletar</Button>
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