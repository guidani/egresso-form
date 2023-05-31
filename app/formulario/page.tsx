import Image from "next/image";
import Formulario from "./components/formulario";
import { getCampus } from "./services/getCampus";
import { getCursos } from "./services/getCursos";

export const revalidate = 10;

export default async function Page() {
  const cursos = await getCursos();
  const campus = await getCampus();
  const lista_de_cursos = cursos.data;
  const lista_de_campus = campus.data;

  return (
    <>
      <Image width={1280} height={320} src="/banner.png" alt="banner" />
      <div className="bg-white border-green-700 mt-2 card border">
        <div className="card-body items-center">
          <h1 className="text-xl md:text-4xl text-center card-title">
            Pesquisa de egressos de cursos superiores
          </h1>
          <div className="mx-2 md:mx-24 md:my-4">
            <p>
              Esta pesquisa é parte das ações do Programa de Acompanhamento de
              Egressos do IFPI.
            </p>
            <p>
              Objetiva conhecer como egressos e egressas da instituição avaliam
              a formação recebida nos cursos realizados e como esta tem
              impactado em sua trajetória acadêmica e profissional.
            </p>
            <p>
              As informações prestadas neste formulário serão utilizadas
              exclusivamente para fins institucionais, mantendo-se total sigilo
              quanto aos informantes.
            </p>
          </div>
        </div>
      </div>
      <Formulario campus={lista_de_campus} cursos={lista_de_cursos} />
    </>
  );
}
