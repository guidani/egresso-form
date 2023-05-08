"use client";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
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
};

export default function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);
  return (
    <section className="my-4 container mx-auto">
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
          <label htmlFor="setor_atuacao">Em qual setor atua?</label>
          <select {...register("setor_atuacao")} className="border">
            <option value="industria">Industria</option>
            <option value="servicos">Serviços</option>
            <option value="agricultura">Agricultura</option>
            <option value="pecuaria">Pecuária</option>
            <option value="extrativismo">Extrativismo</option>
            <option value="outro">Outro</option>
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
        <div className="flex justify-end gap-2">
          <input
            type="submit"
            value="Enviar"
            className="px-4 bg-green-700 rounded-md text-white text-lg hover:cursor-pointer hover:bg-green-900 active:bg-green-400"
          />
          <Link href={"/"}>
            <input
              type="reset"
              value="Cancelar"
              className="px-4 bg-red-700 rounded-md text-white text-lg hover:cursor-pointer hover:bg-red-900 active:bg-red-400"
            />
          </Link>
        </div>
      </form>
    </section>
  );
}
