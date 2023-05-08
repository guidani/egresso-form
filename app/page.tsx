import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Portal de egressos</h1>
      <p>Seja bem-vindo, profissional, egresso do IFPI! É com satisfação que lançamos em nosso Portal um ambiente todo seu!</p>
      <p>O Instituto Federal de Educação, Ciência e Tecnologia do Piauí (IFPI) agradece o privilégio de tê-lo como aluno durante os anos que aqui esteve. Nosso objetivo é de continuar mantendo vínculo com nossos ex-alunos, saber de seus sucessos e dificuldades, e acompanhar os profissionais que formamos em seu ingresso no mercado de trabalho. Com isso, poderemos melhorar nossos cursos técnicos, de graduação e pós-graduação a cada ano.</p>
      <p>Manter este ambiente de comunicação é uma forma de continuar esta relação que começou na sala de aula, estimulando o convívio acadêmico e a troca permanente de informações entre egressos, alunos e a nossa instituição. Este ambiente é uma ferramenta para ajudá-lo em sua caminhada. Participe, contribua com informações, e nos ajude a construir este espaço.</p>
      <Link href="/formulario">Ir para o formulário</Link>
    </main>
  );
}
