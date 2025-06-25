import { getAllPosts } from "../queries/get-all-posts";
import { FeedListItem } from "./feed-list-item";

export const FeedList = async () => {
  const posts = await getAllPosts();
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 py-2">
      {posts.map((post) => (
        <FeedListItem key={post.id} post={post} />
      ))}
    </ul>
  );
};
