export async function getCampus() {
  const path = await import("../../api/campus/route");

  return await (await path.GET()).json();
}
