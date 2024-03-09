import { object, string } from 'zod'
import Cookies from "js-cookie"
import moment from "moment"
import CryptoJS from 'crypto-js'

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

const cript_key = "lukau.lk"
const validText = /^[a-zA-Z\s]+$/;

export const LoginSchema = object({
    usuario: string().min(1, { message: "Login: Nome de usuário não pode estar vazio!" }).regex(validText, { message: "Login: Nome de usuário deve conter apenas letras" }),
    senha: string().min(6, { message: "Login: Senha deve conter pelo menos 6 caracteres" }),
});

export const SignupSchema = object({
    usuario: string().min(1, { message: "Sign Up: Nome de usuário não pode estar vazio!" }).regex(validText, { message: "Sign Up: Nome de usuário deve conter apenas letras" }),
    senha: string().min(6, { message: "Sign Up: Senha deve conter pelo menos 6 caracteres" }),
    conf_senha: string().min(6, { message: "Sign Up: Confirmação de senha deve conter pelo menos 6 caracteres e ser igual a 1ª senha" }),
});

export const createUser = async (usuario: string, senha: string): Promise<any> => {
    try {
        const response = await fetch('api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario: usuario,
                senha: senha
            })
        });

        if (!response.ok) {
            // Se a resposta da API não estiver ok, lança um erro com a mensagem da API
            const errorMessage = await response.text();
            throw new Error(errorMessage);
        }

        // Retorna os dados da resposta
        return await response.json();
    } catch (error) {
        // Se houver algum erro na solicitação, lança o erro
        throw error;
    }
}

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

export const useSession = () : object | boolean  => {
    const sessao: string | undefined = Cookies.get("sessao");
    
    if (sessao !== undefined) {
        try {
            const decrypt_sessao = CryptoJS.AES.decrypt(sessao, cript_key);
            const decryptedData = decrypt_sessao.toString(CryptoJS.enc.Utf8);
            const json_data = JSON.parse(decryptedData);
            return json_data;
        } catch (error) {
            console.error('Erro ao analisar os dados da sessão:', error);
            return false;
        }
    } else {
        return false;
    }
};

export const startSession = (key: string) : boolean =>{
    const timestamp = moment().format("");
    const session = { key, timestamp };
    
    try {
        const stringify = JSON.stringify(session);
        const encryptedData = CryptoJS.AES.encrypt(stringify, cript_key).toString();
        Cookies.set("sessao", encryptedData);
        return true;
    } catch (err){
        console.error(err);
        return false;
    }
}