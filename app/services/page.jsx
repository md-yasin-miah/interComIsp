import Services from "./Services";
import { Metadata } from "../metadata";
import { getServicesData } from "@/lib/getStaticData";

export const metadata = Metadata("Services")
export const revalidate = 3600; // Revalidate every hour

export default async function Page() {
  const data = await getServicesData();

  return (
    <Services data={data} />
  )
}