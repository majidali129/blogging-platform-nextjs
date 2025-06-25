import { getBookmarkedPosts } from "@/features/feed/actions/get-bookmarked-posts";
import { BookmarkList } from "@/features/feed/components/bookmark-list";

export default async function ReadingListPage() {
  const bookmarks = await getBookmarkedPosts();
  return <BookmarkList bookmarks={bookmarks} />;
}
