import { tagsData } from "@/data/tags";
import { prisma } from "@/lib/prisma";

const seed = async () => {
  const start = performance.now();
  console.log("Seeding start!");
  await prisma.tag.deleteMany();

  const tags = await prisma.tag.createMany({ data: tagsData });

  const end = performance.now();
  console.log(`Seeding end ${end - start}ms`);
  console.log("Tags", tags);
};

seed();
