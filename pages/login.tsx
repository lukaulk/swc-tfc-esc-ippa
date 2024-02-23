// import Link from "next/link"
import * as React from "react"
import { useState, FormEvent, ChangeEvent } from 'react';

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
    Alert,
    AlertDescription,
} from "@/components/ui/alert"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import "@/app/globals.css"
import { useRouter } from 'next/router';
import Link from 'next/link';

import { IconAlertTriangle } from "@tabler/icons-react";
import { LoginSchema, createUser, findUser, LoginProps, ErrorType } from './../utils/loginAuth';

const Login = ({ login }: LoginProps) => {
    
    const router = useRouter();
    const [msg, setMsg] = useState({ message: '' })
    const [loginData, setLoginData] = useState({ usuario: '', senha: '' });
    const [signupData, setSignupData] = useState({ usuario: '', senha: '', conf_senha: '' });
    const [error, setError] = useState<ErrorType | null>(null);
    
    const redirectTo = (url:string) =>{
        router.push(url);
    }
    const LoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        try {
            LoginSchema.parse(loginData);
            const data =  await findUser(loginData.usuario, loginData.senha)
            if(data.sucess == false || data.error){
                setMsg({
                    message: data.error
                })
            } 
           redirectTo(`/departamentos?conta=${data.data.usuario}`)

        } catch (error: any) {
            setError({ message: error.message, errors: error.errors });
            try{
                setMsg({
                    message: JSON.parse(error)[0].message 
                 })
            } catch (err){
                console.log(error)
            }
           
        }
    };

    const SignupSubmit = async (e: FormEvent<HTMLFormElement>) => {
         e.preventDefault();
        // try {
        //     SignupSchema.parse(signupData);
        //     if (signupData.senha !== signupData.conf_senha) {
        //         setMsg({
        //             message: "As senhas não coincidem"
        //         })
        //     }
        //     const existingUser = await findUser(1);
        //     if (existingUser) {
        //         setMsg({
        //             message: "Já existe este usuário, tente outro"
        //         })
        //     }
        //     await createUser(signupData.usuario, signupData.senha)

        // } catch (error: any) {
        //     setError({ message: error.message });
        //     console.log(error)

        //     setMsg({
        //         message: "Erro ao criar a conta!"
        //     })

        // }
    };

    const inputMudado_Login = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.id]: e.target.value });
    };

    const inputMudado_SingUp = (e: ChangeEvent<HTMLInputElement>) => {
        setSignupData({ ...signupData, [e.target.id]: e.target.value });
    };

    return (
        <div className="w-full flex items-center justify-center absolute h-screen shadow-lg">
            <div>
                {msg.message.trim() !== "" ? (
                    <Alert className="mb-4 w-full max-w-[350px] text-red-700">
                        <IconAlertTriangle className="w-4 h-4" />
                        <AlertDescription className="font-semibold">
                            {msg.message}
                        </AlertDescription>
                    </Alert>
                ) : (<div className="w-full flex justify-center items-center text-xl font-semibold mb-4">Bem-Vindo!</div>)}

                <Tabs defaultValue="login">
                    <TabsList className="grid w-full grid-cols-2 h-[40px] border rounded-md border-slate-300">
                        <TabsTrigger value="login">Acessar</TabsTrigger>
                        <TabsTrigger value="signin">Criar Conta</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login" className="w-full">
                        <Card className="w-[350px] bg-gray-50 rounded-md">
                            <CardHeader className="mb-4 text-center flex items-center">
                                <CardTitle className="flex items-center gap-2">
                                    Login <span className="text-zinc-300 font-thin -top-1 relative">|</span> <span className="text-md text-zinc-400">SC-IPPA</span></CardTitle>
                                <br />
                                <CardDescription className="text-gray-600">Acessar o painel de controle</CardDescription>
                                <Separator className="my-4" />
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={LoginSubmit}>
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="usuario" className="mb-2">Usuário</Label>
                                            <Input type="text" id="usuario" placeholder="Nome de usuário" className="border border-gray-400 rounded-md bg-white" value={loginData.usuario} onChange={inputMudado_Login} />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="senha" className="mb-2">Senha</Label>
                                            <Input type="password" id="senha" placeholder="Digite a Senha" className="border border-gray-400 rounded-md bg-white" value={loginData.senha} onChange={inputMudado_Login} />
                                        </div>
                                    </div>
                                    <Button type="submit" className="bg-blue-600 mb-2 mt-6 text-white hover:bg-blue-700 rounded-md w-full">Acessar Conta</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="signin">
                        <Card className="w-[350px] bg-gray-50 rounded-md">
                            <CardHeader className="mb-4 text-center flex items-center">
                                <CardTitle className="flex items-center gap-2">
                                    Sign In <span className="text-zinc-300 font-thin -top-1 relative">|</span> <span className="text-md text-zinc-400">SC-IPPA</span></CardTitle>
                                <br />
                                <CardDescription className="text-gray-600">Criar uma Conta</CardDescription>
                                <Separator className="my-4" />
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={SignupSubmit}>
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="usuario" className="mb-2">Usuário</Label>
                                            <Input type="text" id="usuario" placeholder="Nome de usuário" className="border border-gray-400 rounded-md bg-white" value={signupData.usuario} onChange={inputMudado_SingUp} />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="senha" className="mb-2">Senha</Label>
                                            <Input type="password" id="senha" placeholder="Digite a Senha" className="border border-gray-400 rounded-md bg-white" value={signupData.senha} onChange={inputMudado_SingUp} />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="conf_senha" className="mb-2">Confirme a Senha</Label>
                                            <Input type="password" id="conf_senha" placeholder="Confirmar a Senha" className="border border-gray-400 rounded-md bg-white" value={signupData.conf_senha} onChange={inputMudado_SingUp} />
                                        </div>
                                    </div>
                                    <Button type="submit" className="bg-blue-600 mb-2 mt-6 text-white hover:bg-blue-700 rounded-md w-full" >Nova Conta</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>

        </div>
    );
};

export default Login;
