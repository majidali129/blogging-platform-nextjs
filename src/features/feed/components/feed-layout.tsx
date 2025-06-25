import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { FeedHeader } from "@/features/feed/components/feed-header";
import { FeedList } from "@/features/feed/components/feed-list";
import { getAllPosts } from "../queries/get-all-posts";
import { Suspense } from "react";
import { Spinner } from "@/components/spinner";

export const FeedLayout = async () => {
  const posts = await getAllPosts();
  return (
    <section className="grid lg:grid-cols-[200px_1fr] h-[calc(100vh-57px)]  translate-y-[57px]">
      <Sidebar />
      <div className="order-3 lg:order-2 *:px-4 py-4 space-y-2  ">
        <FeedHeader />
        <Suspense fallback={<Spinner />}>
          <FeedList posts={posts} />
        </Suspense>
      </div>
    </section>
  );
};
