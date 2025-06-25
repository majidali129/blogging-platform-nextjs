import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { FeedHeader } from "@/features/feed/components/feed-header";
import { FeedList } from "@/features/feed/components/feed-list";

export const FeedLayout = () => {
  return (
    <section className="grid lg:grid-cols-[200px_1fr] h-[calc(100vh-57px)]  translate-y-[57px]">
      <Sidebar />
      <div className="order-3 lg:order-2 *:px-4 py-4 space-y-2  ">
        <FeedHeader />
        <FeedList />
      </div>
    </section>
  );
};
