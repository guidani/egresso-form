import Image from "next/image";
import Formulario from "./components/formulario";

export default function Page() {
  return (
    <>
      <Image width={1280} height={320} src="/banner.png" alt="banner" />

      <div className="bg-white border-t-8 border-green-700 mt-2">
        <h1 className="text-xl md:text-4xl text-center">
          Pesquisa de egressos de cursos superiores
        </h1>
        <div className="mx-2 md:mx-24 md:my-4">
          <p>
            Esta pesquisa é parte das ações do Programa de Acompanhamento de
            Egressos do IFPI.
          </p>
          <p>
            Objetiva conhecer como egressos e egressas da instituição avaliam a
            formação recebida nos cursos realizados e como esta tem impactado em
            sua trajetória acadêmica e profissional.
          </p>
          <p>
            As informações prestadas neste formulário serão utilizadas
            exclusivamente para fins institucionais, mantendo-se total sigilo
            quanto aos informantes.
          </p>
        </div>
      </div>
      <Formulario />
    </>
  );
}
