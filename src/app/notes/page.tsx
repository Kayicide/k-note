import { unstable_noStore as noStore } from "next/cache";
import { redirect } from "next/navigation";

import { getServerAuthSession } from "~/server/auth";
import { Actions } from "../_components/actions";
import { Separator } from "~/components/ui/separator";

export default async function Home() {
  noStore();
  const session = await getServerAuthSession();

  if(!session){
    redirect("/");
  }

  return (
    <>
    </>
  );
}