import prisma from "../../utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   
   
    if (req.method === 'POST') {
        const { usuario, senha } = req.body;
        try {
            const newUser = await prisma.login.create({
                data: {
                    usuario,
                    senha
                }
            });
            res.status(201).json({ success: true, data: newUser });
        } catch (error) {
            console.error("Erro ao criar usuário:", error);
            res.status(500).json({ success: false, error: "Erro ao criar usuário" });
        }
    } else if (req.method === 'GET') {
        const { nome, senha } = req.query;
        try {
            const user = await prisma.login.findUnique({
                where: {
                    usuario: String(nome),
                    senha: String(senha)
                }
            });
            if (user) {
                res.status(200).json({ success: true, data: user });
            } else {
                res.status(404).json({ success: false, error: "Usuário não existente, insere nome ou senha válida" });
            }
        } catch (error) {
            res.status(500).json({ success: false, error: "Erro ao buscar usuário" });
        }
    } else {
        res.status(405).json({ success: false, error: "Método não permitido" });
    }
}
