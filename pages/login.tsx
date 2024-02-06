import Link from "next/link"
import * as React from "react"

import { IconLock, IconSignRight } from '@tabler/icons-react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

import "@/app/globals.css"



const Login = () =>{
        return  (
            <div className="w-full flex items-center justify-center absolute h-screen shadow-lg">
                <Tabs defaultValue="login" >
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Acessar</TabsTrigger>
                    <TabsTrigger value="signin">Criar Conta</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                <Card className="w-[350px] bg-gray-50 rounded-md">
                    <CardHeader className="mb-4 text-center flex items-center">
                        <CardTitle className="flex items-center gap-2">
                            <IconLock />
                            Login <span className="text-zinc-300 font-thin -top-1 relative">|</span> <span className="text-md text-zinc-400">SC-IPPA</span></CardTitle>
                        <br/>
                        <CardDescription className="text-gray-600">Acessar o painel de controle</CardDescription>
                        <Separator className="my-4" />
                    </CardHeader>
                <CardContent>
                    <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="nome" className="mb-2">Nome</Label>
                        <Input type="text" id="nome" placeholder="Nome de usuário" className="border border-gray-400 rounded-md bg-white"/>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="senha" className="mb-2">Senha</Label>
                        <Input type="password" id="senha" placeholder="Digite a Senha" className="border border-gray-400 rounded-md bg-white" />
                        </div>
                    </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between w-full gap-2">
                <Link href={"/"} className="w-full">
                  <Button className="bg-emerald-600 mb-2 text-white hover:bg-emerald-700 rounded-md w-full" >
                        Acessar Conta
                    </Button>
                </Link>
                </CardFooter>
                </Card>
                </TabsContent>
                <TabsContent value="signin">
                <Card className="w-[350px] bg-gray-50 rounded-md">
                    <CardHeader className="mb-4 text-center flex items-center">
                        <CardTitle className="flex items-center gap-2">
                            <IconLock />
                            Sign In <span className="text-zinc-300 font-thin -top-1 relative">|</span> <span className="text-md text-zinc-400">SC-IPPA</span></CardTitle>
                        <br/>
                        <CardDescription className="text-gray-600">Criar uma Conta</CardDescription>
                        <Separator className="my-4" />
                    </CardHeader>
                <CardContent>
                    <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="nome" className="mb-2">Nome</Label>
                        <Input type="text" id="nome" placeholder="Nome de usuário" className="border border-gray-400 rounded-md bg-white"/>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="senha" className="mb-2">Senha</Label>
                        <Input type="password" id="senha" placeholder="Digite a Senha" className="border border-gray-400 rounded-md bg-white" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="senha" className="mb-2">Confirme a Senha</Label>
                        <Input type="password" id="conf_senha" placeholder="Confirmar a Senha" className="border border-gray-400 rounded-md bg-white" />
                        </div>
                    </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between w-full gap-2">
                <Link href={"/"} className="w-full">
                  <Button className="bg-emerald-600 mb-2 text-white hover:bg-emerald-700 rounded-md w-full" >
                  Nova Conta
                    </Button>
                </Link>
                </CardFooter>
                </Card>
                </TabsContent>
                </Tabs>
            </div>
        )
}

export default Login