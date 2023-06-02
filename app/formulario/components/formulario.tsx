"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomLabel from "./CustomLabel";

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
}

type PageProps = {
  cursos: Array<any>;
  campus: Array<any>;
};

export default function Formulario({ campus, cursos }: PageProps) {
  const [loading, setLoading] = useState<boolean | null>(null);
  const [estaTrabalhando, setEstaTrabalhando] = useState<string | null>("");
  const router = useRouter();
  const currentYear = new Date().getFullYear().toString();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      email: "",
      nome: "",
      genero: "",
      data_nascimento: "",
      ano_conclusao_curso: "",
      campus_conclusao_curso: "",
      curso_realizado: "",
      avaliacao_curso: "",
      situacao_trabalho_estudo: "",
      setor_atuacao: "",
      rendimento_medio: "",
      segmento_mercado: "",
      atua_startup: "",
      satisfacao_renda_atual: "",
      tipo_plataforma: "",
      tipo_contrato: "",
      modalidade_trabalho: "",
      tempo_exp: "",
    },
  });

  async function fetchFormToDatabase(data: FormInputs) {
    try {
      setLoading(true);
      const resp = await fetch("/api/egresso-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (resp.ok) {
        router.replace("/obrigado");
      } else {
        window.alert(
          "Houve um problema ao processar a sua solicitação. Tente novamente!"
        );
      }
      setLoading(null);
    } catch (error) {
      return JSON.stringify({
        msg: "Ocorreu um erro inesperado. Tente novamente.",
      });
    }
  }

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
      <form
        onSubmit={handleSubmit(fetchFormToDatabase)}
        className="flex flex-col gap-2"
      >
        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <CustomLabel htmlfor={"email"} text="Email" />
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="input input-bordered w-full"
          />
          {errors.email && (
            <span className="text-red-600">Este campo é necessário.</span>
          )}
        </div>
        <div className="divider"></div>
        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <CustomLabel htmlfor={"nome"} text="Nome" />
          <input
            {...register("nome", { required: true })}
            className="input input-bordered w-full"
            id="nome"
          />
          {errors.nome && (
            <span className="text-red-600">Este campo é necessário.</span>
          )}
        </div>
        <div className="divider"></div>
        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <CustomLabel htmlfor={"genero"} text="Genero" />
          <select
            {...register("genero")}
            className="select select-bordered w-full"
            id="genero"
          >
            <option value="" disabled>
              ---
            </option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div className="divider"></div>
        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <CustomLabel htmlfor={"data_nascimento"} text="Data de nascimento" />
          <input
            id="data_nascimento"
            {...register("data_nascimento")}
            className="input input-bordered w-full"
            type="date"
          />
        </div>
        <div className="divider"></div>
        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <CustomLabel
            htmlfor={"ano_conclusao_curso"}
            text="Em que ano você concluiu o curso?"
          />
          <input
            id="ano_conclusao_curso"
            min="1900"
            max={currentYear}
            {...register("ano_conclusao_curso", {
              required: true,
              max: `${currentYear}`,
              min: "1900",
            })}
            className="input input-bordered w-full"
            type="number"
          />
          {errors.ano_conclusao_curso && (
            <p>`Esse campo deve estar entre 1900 e {currentYear}`</p>
          )}
        </div>
        <div className="divider"></div>
        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <CustomLabel
            htmlfor={"campus_conclusao_curso"}
            text="Em qual campus você concluiu o curso?"
          />
          <select
            {...register("campus_conclusao_curso")}
            className="select select-bordered w-full"
            id="campus_conclusao_curso"
          >
            <option value="" disabled>
              ---
            </option>
            {campus.map((camp) => {
              return (
                <option
                  key={camp.id}
                  value={camp.name.trim().replaceAll(" ", "_")}
                >
                  {camp.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="divider"></div>
        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <CustomLabel
            htmlfor={"curso_realizado"}
            text="Qual o curso de graduação realizado?"
          />
          <select
            {...register("curso_realizado")}
            className="select select-bordered w-full"
            id="curso_realizado"
          >
            <option value="" disabled>
              ---
            </option>
            {cursos.map((c) => {
              return (
                <option key={c.id} value={c.name.trim().replaceAll(" ", "_")}>
                  {c.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="divider"></div>
        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <CustomLabel
            htmlfor={"avaliacao_curso"}
            text="Em relação ao curso que você concluiu, como avalia a formação
            ofertada?"
          />
          <select
            {...register("avaliacao_curso")}
            className="select select-bordered w-full"
            id="avaliacao_curso"
          >
            <option value="" disabled>
              ---
            </option>
            <option value="muito_boa">Muito Boa</option>
            <option value="boa">Boa</option>
            <option value="regular">Regular</option>
            <option value="ruim">Ruim</option>
          </select>
        </div>
        <div className="divider"></div>
        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <CustomLabel
            htmlfor={"situacao_trabalho_estudo"}
            text="Atualmente, qual a sua situação quanto a trabalho e estudos?"
          />
          <select
            {...register("situacao_trabalho_estudo")}
            className="select select-bordered w-full"
            id="situacao_trabalho_estudo"
            onChange={(e) => {
              setEstaTrabalhando(e.target.value);
            }}
          >
            <option value="" disabled>
              ---
            </option>
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
        
        {(estaTrabalhando === "apenas_trabalhando" ||
          estaTrabalhando === "trabalhando_estudando") && (
          <>
            <div className="divider"></div>
            <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
              <CustomLabel
                htmlfor={"setor_atuacao"}
                text="Qual o setor em que atua?"
              />
              <select
                {...register("setor_atuacao")}
                className="select select-bordered w-full"
                id="setor_atuacao"
              >
                <option value="" disabled>
                  ---
                </option>
                <option value="industria">Privado</option>
                <option value="servicos">Público</option>
                <option value="agricultura">Terceiro setor</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className="divider"></div>
            <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
              <CustomLabel
                htmlfor={"segmento_mercado"}
                text="Qual o segmento de mercado em que atua?"
              />
              <select
                {...register("segmento_mercado")}
                className="select select-bordered w-full"
                id="segmento_mercado"
              >
                <option value="" disabled>
                  ---
                </option>
                <option value="agricultura">Agricultura</option>
                <option value="comunicacao_midia">Comunicação e mídia</option>
                <option value="construcao_engenharia">
                  Construção e engenharia
                </option>
                <option value="consultoria_negocios">
                  Consultoria e negócios
                </option>
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
            <div className="divider"></div>
            <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
              <CustomLabel htmlfor={"atua_startup"} text="Atua em Startup?" />
              <select
                {...register("atua_startup")}
                className="select select-bordered w-full"
                id="atua_startup"
              >
                <option value="" disabled>
                  ---
                </option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
            </div>
            <div className="divider"></div>
            <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
              <CustomLabel
                htmlfor={"rendimento_medio"}
                text="Qual seu rendimento médio mensal, considerando apenas a sua
            atividade profissional?"
              />
              <select
                {...register("rendimento_medio")}
                className="select select-bordered w-full"
                id="rendimento_medio"
              >
                <option value="" disabled>
                  ---
                </option>
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
            <div className="divider"></div>
            <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
              <CustomLabel
                htmlfor={"satisfacao_renda_atual"}
                text="Qual sua satisfação com a sua renda atual?"
              />
              <select
                {...register("satisfacao_renda_atual")}
                className="select select-bordered w-full"
                id="satisfacao_renda_atual"
              >
                <option value="" disabled>
                  ---
                </option>
                <option value="satisfeito">Satisfeito</option>
                <option value="insatisfeito">Insatisfeito</option>
                <option value="indiferente">Indiferente</option>
                <option value="muito_satisfeito">Muito Satisfeito</option>
                <option value="muito_insatisfeito">Muito Insatisfeito</option>
              </select>
            </div>
            <div className="divider"></div>
            <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
              <CustomLabel
                htmlfor={"tipo_plataforma"}
                text="Trabalha em que tipo de plataforma?"
              />
              <select
                {...register("tipo_plataforma")}
                className="select select-bordered w-full"
                id="tipo_plataforma"
              >
                <option value="" disabled>
                  ---
                </option>
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
            <div className="divider"></div>
            <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
              <CustomLabel
                htmlfor={"tipo_contrato"}
                text="Qual seu tipo de contrato de trabalho?"
              />
              <select
                {...register("tipo_contrato")}
                className="select select-bordered w-full"
                id="tipo_contrato"
              >
                <option value="" disabled>
                  ---
                </option>
                <option value="clt">CLT</option>
                <option value="pj">PJ</option>
              </select>
            </div>
            <div className="divider"></div>
            <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
              <CustomLabel
                htmlfor={"modalidade_trabalho"}
                text="Em qual modalidade de trabalho você está atualmente?"
              />
              <select
                {...register("modalidade_trabalho")}
                className="select select-bordered w-full"
                id="modalidade_trabalho"
              >
                <option value="" disabled>
                  ---
                </option>
                <option value="remoto">Remoto</option>
                <option value="hibrido">Hibrido</option>
                <option value="presencial">Presencial</option>
              </select>
            </div>
          </>
        )}
        <div className="divider"></div>
        <div className="flex flex-col bg-white border-t-8 border-green-700 p-2 md:px-24 md:py-4">
          <CustomLabel
            htmlfor={"tempo_exp"}
            text="Qual seu tempo de experiência?"
          />
          <select
            {...register("tempo_exp")}
            className="select select-bordered w-full"
            id="tempo_exp"
          >
            <option value="" disabled>
              ---
            </option>
            <option value="sem_experiencia">Sem experiência</option>
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
        <div className="divider"></div>
        <div className="flex justify-end gap-2 mx-4">
          {loading ? (
            <>
              <button
                type="submit"
                value="Enviar"
                className="btn loading btn-disabled"
              >
                Enviar
              </button>
            </>
          ) : (
            <>
              <button
                type="submit"
                value="Enviar"
                className="btn btn-active btn-success hover:opacity-80"
              >
                Enviar
              </button>
            </>
          )}

          <input
            type="reset"
            value="Cancelar"
            className="btn btn-error btn-active hover:opacity-80"
            onClick={handleCancel}
          />
        </div>
      </form>
    </section>
  );
}
