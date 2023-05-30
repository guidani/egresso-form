"use client";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormInputs {
  email: string;
  nome: string;
  genero: string;
  data_nascimento: string;
  ano_conclusao_curso: string;
  campus_conclusao_curso: string;
  curso_realizado: string;
  avaliacao_curso: string;
  situacao_trabalho_estudo: string;
  setor_atuacao: string;
  rendimento_medio: string;
  segmento_mercado: string;
  atua_startup: string;
  satisfacao_renda_atual: string;
  tipo_plataforma: string;
  tipo_contrato: string;
  modalidade_trabalho: string;
  tempo_exp: string;
};

type PageProps = {
  cursos: Array<any>;
  campus: Array<any>;
}

export default function Formulario({campus, cursos}:PageProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  // TODO: enviar para o banco de dados
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  function handleCancel() {
    let text = "Tem certeza que deseja sair?";
    if (confirm(text)) {
      router.push("/");
    } else {
      return;
    }
  }

  return (
    <section className="my-4 container mx-auto">
      {/*  */}
      {cursos.map((c) => {
        return <p key={c.id}>{c.name}</p>
      })}
      {/*  */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="border"
          />
          {errors.email && (
            <span className="text-red-600">Este campo é necessário.</span>
          )}
        </div>
        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <label htmlFor="nome">Nome</label>
          <input {...register("nome", { required: true })} className="border" />
          {errors.nome && (
            <span className="text-red-600">Este campo é necessário.</span>
          )}
        </div>
        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <label htmlFor="genero">Genero</label>
          <select {...register("genero")} className="border">
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <label htmlFor="data_nascimento">Data de nascimento</label>
          <input
            {...register("data_nascimento")}
            className="border"
            type="date"
          />
        </div>
        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <label htmlFor="ano_conclusao_curso">
            Em que ano você concluiu o curso?
          </label>
          <input
            {...register("ano_conclusao_curso", {
              max: 2023,
              min: 1900,
              value: "2023",
            })}
            className="border"
            type="number"
          />
        </div>
        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <label htmlFor="campus_conclusao_curso">
            Em qual campus você concluiu o curso?
          </label>
          <select {...register("campus_conclusao_curso")} className="border">
            <option value="teresina_central">Teresina Central</option>
            <option value="teresina_sul">Teresina Zona Sul</option>
          </select>
        </div>
        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <label htmlFor="curso_realizado">
            Qual o curso de graduação realizado?
          </label>
          <select {...register("curso_realizado")} className="border">
            <option value="Bacharelado_em_Administração">
              Bacharelado em Administração
            </option>
            <option value="Bacharelado_em_Agronomia">
              Bacharelado em Agronomia
            </option>
          </select>
        </div>
        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <label htmlFor="avaliacao_curso">
            Em relação ao curso que você concluiu, como avalia a formação
            ofertada?
          </label>
          <select {...register("avaliacao_curso")} className="border">
            <option value="muito_boa">Muito Boa</option>
            <option value="boa">Boa</option>
            <option value="regular">Regular</option>
            <option value="ruim">Ruim</option>
          </select>
        </div>
        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <label htmlFor="situacao_trabalho_estudo">
            Atualmente, qual a sua situação quanto a trabalho e estudos?
          </label>
          <select {...register("situacao_trabalho_estudo")} className="border">
            <option value="apenas_trabalhando">Apenas trabalhando</option>
            <option value="apenas_estudando">Apenas estudando</option>
            <option value="trabalhando_estudando">
              Trabalhando e estudando
            </option>
            <option value="nem_trabalho_nem_estudo_buscando_trabalho">
              Não estou trabalhando, nem estudando, mas estou em busca de
              oportunidade
            </option>
            <option value="nem_trabalho_nem_estudo_nem_buscando_trabalho">
              Não estou trabalhando, nem estudando, nem estou em busca de
              oportunidade
            </option>
          </select>
        </div>

        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <label htmlFor="setor_atuacao">Qual o setor em que atua?</label>
          <select {...register("setor_atuacao")} className="border">
            <option value="industria">Privado</option>
            <option value="servicos">Público</option>
            <option value="agricultura">Terceiro setor</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <label htmlFor="segmento_mercado">
            Qual o segmento de mercado em que atua?
          </label>
          <select {...register("segmento_mercado")} className="border">
            <option value="agricultura">Agricultura</option>
            <option value="comunicacao_midia">Comunicação e mídia</option>
            <option value="construcao_engenharia">
              Construção e engenharia
            </option>
            <option value="consultoria_negocios">Consultoria e negócios</option>
            <option value="educacao_pesq_cientifica">
              Educação e Pesquisa Científica
            </option>
            <option value="energia_meio_ambiente">
              Energia e Meio Ambiente
            </option>
            <option value="entretenimento">Entretenimento</option>
            <option value="games">Games</option>
            <option value="governo_administracao_publica">
              Governo e administração pública
            </option>
            <option value="imobiliario">Imobiliário</option>
            <option value="industria">Indústria</option>
            <option value="produtos_software">Produtos de Software</option>
            <option value="recursos_humanos">Recursos Humanos</option>
            <option value="saude">Saude</option>
            <option value="seguros">Seguros</option>
            <option value="serv_financeiros">Serviços financeiros</option>
            <option value="transp_logistica">Transporte e Logística</option>
            <option value="varejo_com_eletronico">
              Varejo e comércio eletrônico
            </option>
            <option value="viagem_turismo">Viagem e Turismo</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <label htmlFor="atua_startup">Atua em Startup?</label>
          <select {...register("atua_startup")} className="border">
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>

        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <label htmlFor="rendimento_medio">
            Qual seu rendimento médio mensal, considerando apenas a sua
            atividade profissional?
          </label>
          <select {...register("rendimento_medio")} className="border">
            <option value="ate_um_salario">Até 1 salário mínimo</option>
            <option value="entre_um_e_dois_salarios">
              Entre 1 e 2 salários mínimos
            </option>
            <option value="entre_dois_e_tres_salarios">
              Entre 2 e 3 salários mínimos
            </option>
            <option value="entre_tres_e_cinco_salarios">
              Entre 3 e 5 salários mínimos
            </option>
            <option value="entre_cinco_e_dez_salarios">
              Entre 5 e 10 salários mínimos
            </option>
            <option value="mais_de_dez_salarios">
              Acima de 10 salários mínimos
            </option>
          </select>
        </div>

        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <label htmlFor="satisfacao_renda_atual">
            Qual sua satisfação com a sua renda atual?
          </label>
          <select {...register("satisfacao_renda_atual")} className="border">
            <option value="satisfeito">Satisfeito</option>
            <option value="insatisfeito">Insatisfeito</option>
            <option value="indiferente">Indiferente</option>
            <option value="muito_satisfeito">Muito Satisfeito</option>
            <option value="muito_insatisfeito">Muito Insatisfeito</option>
          </select>
        </div>

        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <label htmlFor="tipo_plataforma">
            Trabalha em que tipo de plataforma?
          </label>
          <select {...register("tipo_plataforma")} className="border">
            <option value="web">Web</option>
            <option value="backend">Back-End</option>
            <option value="dados">Dados</option>
            <option value="mobile">Mobile</option>
            <option value="qa">QA</option>
            <option value="desktop">Desktop</option>
            <option value="devops">DevOPS</option>
            <option value="banco_de_dados">Banco de Dados</option>
            <option value="embarcados">Embarcados</option>
            <option value="seg_info">Segurança da Informação</option>
            <option value="games">Games</option>
            <option value="iot">IoT</option>
            <option value="outros">Outros</option>
          </select>
        </div>

        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <label htmlFor="tipo_contrato">
            Qual seu tipo de contrato de trabalho?
          </label>
          <select {...register("tipo_contrato")} className="border">
            <option value="clt">CLT</option>
            <option value="pj">PJ</option>
          </select>
        </div>

        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <label htmlFor="modalidade_trabalho">
            Em qual modalidade de trabalho você está atualmente?
          </label>
          <select {...register("modalidade_trabalho")} className="border">
            <option value="remoto">Remoto</option>
            <option value="hibrido">Hibrido</option>
            <option value="presencial">Presencial</option>
          </select>
        </div>

        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <label htmlFor="tempo_exp">Qual seu tempo de experiência?</label>
          <select {...register("tempo_exp")} className="border">
            <option value="menos_1_ano">Menos de 1 ano</option>
            <option value="entre_1_2_anos">Entre 1 e 2 anos</option>
            <option value="entre_2_4_anos">Entre 2 e 4 anos</option>
            <option value="entre_4_6_anos">Entre 4 e 6 anos</option>
            <option value="entre_6_8_anos">Entre 6 e 8 anos</option>
            <option value="entre_8_10_anos">Entre 8 e 10 anos</option>
            <option value="entre_10_15_anos">Entre 10 e 15 anos</option>
            <option value="entre_15_20_anos">Entre 15 e 20 anos</option>
            <option value="mais_20_anos">Mais de 20 anos</option>
          </select>
        </div>

        <div className="flex justify-end gap-2 mx-4">
          <input
            type="submit"
            value="Enviar"
            className="px-4 bg-green-700 rounded-md text-white text-lg hover:cursor-pointer hover:bg-green-900 active:bg-green-400"
          />

          <input
            type="reset"
            value="Cancelar"
            className="px-4 bg-red-700 rounded-md text-white text-lg hover:cursor-pointer hover:bg-red-900 active:bg-red-400"
            onClick={handleCancel}
          />
        </div>
      </form>
    </section>
  );
}
