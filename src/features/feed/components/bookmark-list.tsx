import { Card, CardContent } from "@/components/ui/card";
import { BookmarkType } from "../actions/get-bookmarked-posts";
import { BookmarkListItem } from "./bookmark-list-item";

type BookmarkListProps = {
  bookmarks: BookmarkType[];
};
export const BookmarkList = ({ bookmarks }: BookmarkListProps) => {
  return (
    <section className="px-20 space-y-6 ">
      <h1>Reading list ({bookmarks.length})</h1>
      <div>
        {/* <aside></aside> */}
        <Card className="border-0 pb-10">
          <CardContent>
            <ul className="space-y-5">
              {bookmarks.map((post) => (
                <BookmarkListItem post={post} key={post.id} />
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
