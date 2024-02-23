import { JsonObject } from "@prisma/client/runtime/library";
import prisma from "./prisma"
import { GetStaticProps } from 'next'
import { object, string } from 'zod'

export interface LoginUser {
    id_login: number,
    usuario: string,
    senha: string
}

export interface ErrorType {
    message: string;
    errors?: string[];
}

export interface LoginProps {
    login: LoginUser[];
}


const validText = /^[a-zA-Z]+$/

export const LoginSchema = object({
    usuario: string().min(1, { message: "Nome de usuário não pode estar vazio!" }).regex(validText, { message: "Nome de usuário deve conter apenas letras" }),
    senha: string().min(6, { message: "Senha deve conter pelo menos 6 caracteres" }),
});
  
export const SignupSchema = object({
    usuario: string().min(1, { message: "Nome de usuário não pode estar vazio!" }).regex(validText, { message: "Nome de usuário deve conter apenas letras" }),
    senha: string().min(6, { message: "Senha deve conter pelo menos 6 caracteres" }),
    conf_senha: string().min(6, { message: "Confirmação de senha deve conter pelo menos 6 caracteres e ser igual a 1ª senha" }),
});


// Criar um novo usuário
export const createUser = async (usuario: string, senha: string): Promise<LoginUser> => {
    const newUser = await prisma.login.create({
        data: {
            usuario,
            senha
        }
    });

    return newUser as LoginUser;
}

// Encontrar usuários logados
export const findUser = async (usuario: string, senha: string): Promise<any> => {
    try {
        const response = await fetch(`api/login?nome=${usuario}&senha=${senha}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok || response.status == 404) {
            throw new Error('Erro ao buscar o usuário');
        }

        return await response.json();
       
    } catch (error) {
        return { success: false, error: 'Este usuário não existe' };
    }
}

export const getStaticProps: GetStaticProps<LoginProps> = async () => {
    // Aqui você pode fazer chamadas ao banco de dados ou outras operações assíncronas necessárias
    // por exemplo, obter os usuários existentes
    const existingUsers = await prisma.login.findMany();

    // Retorna os dados como props
    return {
        props: {
            login: existingUsers as LoginUser[] // Assegura que os dados estão no formato correto
        }
    };
};
