import { CreateNewPost } from "@/features/feed/components/post/create-new-post";
import { prisma } from "@/lib/prisma";

const CreateNewPostPage = async () => {
  const tags = await prisma.tag.findMany();
  return <CreateNewPost tags={tags} />;
};

export default CreateNewPostPage;
