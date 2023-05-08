import Link from "next/link";
import ArrowRight from "./components/icons/arrow_right";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto mt-4 px-2">
      <Image width={1280} height={320} src='/banner.png' alt="banner"/>
      {/* <h1 className="text-8xl text-center mb-4">Portal de egressos</h1> */}
      <p className="mb-2">
        Seja bem-vindo, profissional, egresso do IFPI! É com satisfação que
        lançamos em nosso Portal um ambiente todo seu!
      </p>
      <p className="mb-2">
        O Instituto Federal de Educação, Ciência e Tecnologia do Piauí (IFPI)
        agradece o privilégio de tê-lo como aluno durante os anos que aqui
        esteve. Nosso objetivo é de continuar mantendo vínculo com nossos
        ex-alunos, saber de seus sucessos e dificuldades, e acompanhar os
        profissionais que formamos em seu ingresso no mercado de trabalho. Com
        isso, poderemos melhorar nossos cursos técnicos, de graduação e
        pós-graduação a cada ano.
      </p>
      <p className="mb-2">
        Manter este ambiente de comunicação é uma forma de continuar esta
        relação que começou na sala de aula, estimulando o convívio acadêmico e
        a troca permanente de informações entre egressos, alunos e a nossa
        instituição. Este ambiente é uma ferramenta para ajudá-lo em sua
        caminhada. Participe, contribua com informações, e nos ajude a construir
        este espaço.
      </p>
      <div className="flex items-center gap-4 bg-white border-t-8 border-green-700 px-4 py-4 mt-4 hover:cursor-pointer">
        <Link href="/formulario" className="text-2xl">Ir para o formulário</Link>
        <ArrowRight/>
      </div>
    </main>
  );
}
