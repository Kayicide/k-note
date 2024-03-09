import { unstable_noStore as noStore } from "next/cache";
import { redirect } from "next/navigation";

import { getServerAuthSession } from "~/server/auth";

export default async function Home() {
  noStore();
  const session = await getServerAuthSession();

  if(!session){
    redirect("/");
  }

  return (
    <>
        <h1>wow so cool</h1>
    </>
  );
}