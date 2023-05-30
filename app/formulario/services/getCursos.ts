// export async function getCursos() {
//   const resp = await fetch("/api/curso", {
//     method: "GET",
//   });
//   const json = await resp.json();
//   return json;
// }

export async function getCursos() {
  const path = await import("../../api/curso/route");

  return await (await path.GET()).json();
}
