import type { Metadata } from "next";
import Nav from '@/components/myui/Nav'
import "./globals.css";

import { Open_Sans, } from "next/font/google";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acompanhar e Controlar Estágios e TFCs",
  description: " Sistema Web avançado voltado para o Controle e Acompanhamento de Trabalhos de Conclusão de Curso (TFCs) e Estágio Curricular. Desenvolvido com tecnologias de ponta, o projeto utiliza Next.js como framework principal, Shadcn-ui para estilização consistente, Prisma para manipulação eficiente do banco de dados e o template Tabler para uma interface de usuário moderna e funcional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
      <div className="flex flex-row w-full h-screen">
      {/* <Nav></Nav> */}
      {children}
      </div>
        </body>
    </html>
  );
}
