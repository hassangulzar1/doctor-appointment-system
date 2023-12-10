import { prisma } from "@/config/prisma";
const auth = async () => {
  const data = await prisma.patients.findMany();
  return data;
};

export default async function Home() {
  const data = await auth();
  return <div>FUll Stack app</div>;
}
