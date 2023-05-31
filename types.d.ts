type EgressoForm = {
  id: string;
  email: string?;
  nome: string?;
  genero: string?;
  data_de_nascimento: string?;
  ano_conclusao_curso: string?;
  campus_conclusao_curso: string?;
  curso_realizado: string?;
  avaliacao_curso: string?;
  situacao_trabalho_estudo: string?;
  setor_atuacao: string?;
  segmento_mercado: string?;
  atua_startup: string?;
  rendimento_medio: string?;
  satisfacao_renda_atual: string?;
  tipo_plataforma: string?;
  tipo_contrato: string?;
  modalidade_trabalho: string?;
  tempo_exp: string?;
};

type Curso = {
  id: string;
  name: string;
  createdAt: Date;
};

type Campus = {
  id: string;
  name: string;
  createdAt: Date;
};
