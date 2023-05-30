import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const {
      ano_conclusao_curso,
      atua_startup,
      avaliacao_curso,
      campus_conclusao_curso,
      curso_realizado,
      data_de_nascimento,
      email,
      genero,
      modalidade_trabalho,
      nome,
      rendimento_medio,
      satisfacao_renda_atual,
      segmento_mercado,
      setor_atuacao,
      situacao_trabalho_estudo,
      tempo_exp,
      tipo_contrato,
      tipo_plataforma,
    }: Partial<EgressoForm> = await request.json();

    const resp = await prisma.egressoForm.create({
      data: {
        ano_conclusao_curso: ano_conclusao_curso,
        atua_startup: atua_startup,
        avaliacao_curso: avaliacao_curso,
        campus_conclusao_curso: campus_conclusao_curso,
        curso_realizado: curso_realizado,
        data_de_nascimento: data_de_nascimento,
        email: email,
        genero: genero,
        modalidade_trabalho: modalidade_trabalho,
        nome: nome,
        rendimento_medio: rendimento_medio,
        satisfacao_renda_atual: satisfacao_renda_atual,
        segmento_mercado: segmento_mercado,
        setor_atuacao: setor_atuacao,
        situacao_trabalho_estudo: situacao_trabalho_estudo,
        tempo_exp: tempo_exp,
        tipo_contrato: tipo_contrato,
        tipo_plataforma: tipo_plataforma,
      },
    });
    return new Response(
      JSON.stringify({ message: `Egresso criado com o id ${resp.id}` }),
      {
        status: 201,
        statusText: "ok",
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Ocorreu um erro inesperado! Tente novamente.",
      }),
      { status: 500 }
    );
  }
}
