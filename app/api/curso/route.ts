import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const resp = await prisma.curso.findMany();
    const jsonResponse = { data: resp };
    return new Response(JSON.stringify(jsonResponse), {
      status: 200,
      statusText: "ok",
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: `${error}` }), { status: 500 });
  }
}
