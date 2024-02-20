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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { IconCursorText, IconDots, IconExclamationCircle, IconFilter, IconPlus, IconSearch, IconX } from "@tabler/icons-react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"



export default function Monografia() {
    var monografia = [
        { id: 1, nome: 'Bernadinho Lukau Makuti', info: 'Lorem Ipsum dolor sit' },
        { id: 2, nome: 'Paulo Aberto Maria', info: 'Lorem Ipsum dolor sit' },
        { id: 3, nome: 'Miguel Fransisco Polo', info: 'Lorem Ipsum dolor sit' },
        { id: 4, nome: 'Mavinga Antonio Pedro', info: 'Lorem Ipsum dolor sit' },
        { id: 5, nome: 'Pedro Cazanda Jsa', info: 'Lorem Ipsum dolor sit' },
        { id: 6, nome: 'Pinalaks akskn', info: 'Lorem Ipsum dolor sit' },
        { id: 7, nome: 'Frwadamdoa Mluakas', info: 'Lorem Ipsum dolor sit' },
        { id: 8, nome: 'Lukau Nakaisa lakas asa', info: 'Lorem Ipsum dolor sit' },
    ]

    return (
        <div className="flex flex-row w-full h-screen">
            <Nav />
            <div className="flex-1 flex flex-col h-screen bg-gray-100">
                <Header content="Monografia" name="Tomás Lukas" />
                <section className="w-full max-w-[1200px]  bg-gray-50 border  mt-1 border-l-0 border-orange-500 h-screen  text-gray-950">

                    <div className="flex justify-between">
                        <div className="flex mt-4 ml-6 gap-2">
                            <Input type="search" placeholder="Pesquisar Monografia..." className="w-[300px] border-slate-400 focus:outline-blue-500 border placeholder:text-slate-500 bg-slate-200" />
                            <Button className="mb-2 text-slate-800 hover:bg-slate-300 active:bg-slate-400 bg-slate-200" ><IconSearch stroke={"white"} className="w-4 mr-2 h-4 rounded-none" strokeWidth={3} /> Pesquisar</Button>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button className="mb-2 text-slate-800 hover:bg-slate-300 active:bg-slate-400 bg-slate-200" >
                                        <IconFilter stroke={"white"} className="w-4 mr-2 h-4 rounded-none" strokeWidth={3} /> Filtrar
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="flex px-4 py-4 flex-col bg-white items-start  w-[340px]">
                                    <div className='w-full gap-4 flex-col flex'>
                                        <label className='flex gap-4 justify-between flex-1'>
                                            Orientador:
                                            <select className="px-4 w-[150px]  py-2 text-slate-800 hover:bg-slate-300 active:bg-slate-400 bg-slate-200  border-slate-400 border rounded-md" >
                                                <option></option>
                                                <option>Lukau Alb</option>
                                                <option>John Lukas</option>
                                            </select>
                                        </label>
                                        <label className='flex gap-4 justify-between flex-1'>
                                            Aluno:
                                            <select className="px-4  w-[150px]   py-2 text-slate-800 hover:bg-slate-300 active:bg-slate-400 bg-slate-200 border-slate-400 border rounded-md" >
                                                <option></option>
                                                <option>AntonioLukau Alb</option>
                                                <option>John Lukas</option>
                                            </select>
                                        </label>
                                        <label className='flex gap-4 justify-between flex-1'>
                                            Data (Mês):
                                            <Input type='date' className=' w-[150px] flex-1 flex border border-zinc-400 bg-zinc-100 hover:ring-blue-500 hover:ring-2' />
                                        </label>

                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="flex mt-4 mr-4">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="bg-blue-500 mb-2 text-white hover:bg-blue-600" ><IconPlus stroke={"white"} className="w-4 mr-2 h-4 rounded-none" strokeWidth={3} /> Adicionar</Button>
                                </DialogTrigger>
                                <DialogContent className='bg-white sm:max-w-[625px]'>
                                    <DialogHeader>
                                        <DialogTitle>
                                            Monografia
                                        </DialogTitle>
                                        <DialogDescription>
                                            Registro de monografia
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className='flex-col mt-4 grid gap-4'>
                                        <div className='flex gap-4 w-full' >
                                            <Label> ID <br /><br />
                                                <Input type='number' defaultValue={"01"} className='w-[70px] border border-zinc-400 bg-zinc-100 hover:ring-blue-500 hover:ring-2' readOnly />
                                            </Label>
                                            <Label className='w-full'> Título <br /><br />
                                                <Input type='text' className='w-full flex-1 flex border border-zinc-400 bg-zinc-100 hover:ring-blue-500 hover:ring-2' />
                                            </Label>
                                        </div>
                                        <div className='mt-4 flex gap-6'>
                                            <Label className='flex gap-4 items-center flex-1'> Orientador
                                                <select className="px-4 py-2 text-slate-800 hover:bg-slate-300 active:bg-slate-400 bg-slate-200  border-slate-400 border rounded-md" >
                                                    <option></option>
                                                    <option>Lukau Alb</option>
                                                    <option>John Lukas</option>
                                                </select>
                                            </Label>
                                            <Label className='flex gap-4 items-center flex-1'> Aluno
                                                <select className="px-4 py-2 text-slate-800 hover:bg-slate-300 active:bg-slate-400 bg-slate-200  border-slate-400 border rounded-md" >
                                                    <option></option>
                                                    <option>Lukau Alb</option>
                                                    <option>John Lukas</option>
                                                </select>
                                            </Label>
                                        </div>
                                        <div className='mt-4 flex  gap-6'>
                                            <Label className='flex gap-4 items-center justify-between flex-1'>
                                                Arquivo PDF 
                                                <Input type='file' className='flex-1 flex border border-zinc-400 bg-zinc-100 hover:ring-blue-500 hover:ring-2' accept='.pdf, .docx, .xlsx'/>
                                            </Label>
                                        </div>
                                        <div className='mt-4 flex  gap-6'>
                                            <Label className='flex gap-4 items-center flex-1'>
                                                Caso de Estudo
                                                <Input type='text' className='flex-1 flex border border-zinc-400 bg-zinc-100 hover:ring-blue-500 hover:ring-2' />
                                            </Label>
                                            <Label className='flex gap-4 items-center flex-1'>
                                                Epoca:
                                                <select className="px-4 py-2 text-slate-800 hover:bg-slate-300 active:bg-slate-400 bg-slate-200  border-slate-400 border rounded-md" >
                                                    <option></option>
                                                    <option>Iº Semestre</option>
                                                    <option>IIº Semestre</option>
                                                </select>
                                            </Label>
                                        </div>
                                        <div className='mt-4 flex  gap-6'>
                                            <Label className='w-full flex flex-col'>
                                                Obcervações <br /><br />
                                                <Input type='text' className='flex-1 flex  w-full border border-zinc-400 bg-zinc-100 hover:ring-blue-500 hover:ring-2' />
                                            </Label>
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button className="bg-blue-500 mt-4 text-white hover:bg-blue-600 text-center w-full" ><IconPlus stroke={"white"} className="w-4 mr-2 h-4 rounded-none" strokeWidth={3} /> Cadastar Nova Monografia</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>

                    <ScrollArea className="h-[80vh] w-full">
                        <Table>
                            <TableCaption>Listagem Monografia</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[50px]">ID</TableHead>
                                    <TableHead >Título</TableHead>
                                    <TableHead >Aluno</TableHead>
                                    <TableHead >Orientador</TableHead>
                                    <TableHead >Data de Entrega</TableHead>
                                    <TableHead className="text-right">Ações</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody className="w-full">
                                {monografia.map((d) => (
                                    <TableRow key={d.id}>
                                        <TableCell className="font-bold">{d.id}</TableCell>
                                        <TableCell>Sistema de gestão de Gastos e Despesas pessoais</TableCell>
                                        <TableCell><span className='cursor-pointer px-4 py-2 rounded-lg bg-zinc-50'>{d.nome}</span></TableCell>
                                        <TableCell><span className='cursor-pointer px-4 py-2 rounded-lg bg-zinc-50'>{d.nome}</span></TableCell>
                                        <TableCell><span className='cursor-pointer px-4 py-2 rounded-lg bg-zinc-50'>02/04/2024 12:05</span></TableCell>
                                        <TableCell className="text-right">
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button className="text-black hover:bg-gray-100" ><IconDots className="w-5 mr-2 h-5 rounded-none" strokeWidth={2} /> Opções</Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="mr-4 flex p-0 flex-col bg-white w-fit items-start">
                                                    <Button className="text-black hover:bg-gray-100 active:bg-zinc-300 w-full" ><IconExclamationCircle className="w-5 mr-2 h-5 rounded-none" strokeWidth={2} /> Sobre</Button>
                                                    <Button className="text-black hover:bg-gray-100 active:bg-zinc-300 w-full" ><IconCursorText className="w-5 mr-2 h-5 rounded-none" strokeWidth={2} /> Editar</Button>
                                                    <Button className="text-red-700 hover:bg-gray-100 active:bg-zinc-300 w-full" ><IconX className="w-5 mr-2 h-5 rounded-none" strokeWidth={2} /> Deletar</Button>
                                                </PopoverContent>
                                            </Popover>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell className="text-zinc-600" colSpan={3}>Existem <b>{monografia.length}</b> Monografias no Total</TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </ScrollArea>

                </section>
            </div>
        </div>
    )
} 