"use client";

import { BookmarkIcon, LucideHeartPlus, MessageCircle } from "lucide-react";
import { PostDetailsSocialShareDropdown } from "./post-details-social-share-dropdown";
import { toggleBookmark } from "../../actions/bookmark-post";
import { startTransition } from "react";
import { useOptimisticBookmark } from "../../hooks/use-optimistic-bookmark";
import { ExtendedPost } from "../../queries/get-all-posts";

type PostDetailsStatsSidebarProps = {
  post: ExtendedPost;
  onCommentClick: () => void;
};
export const PostDetailsStatsSidebar = ({
  post,
  onCommentClick,
}: PostDetailsStatsSidebarProps) => {
  const { optimisticBookmarks, addOptimisticBookmarks } =
    useOptimisticBookmark(post);
  const handleToggleBookmark = async () => {
    startTransition(async () => {
      addOptimisticBookmarks({ toggle: !optimisticBookmarks.isPostBookmarked });
      await toggleBookmark(post.id);
    });
  };

  return (
    <aside className="bg-transparent max-sm:border-t border-t-input w-full md:w-[72px]  fixed  left-0 max-md:bottom-0  !z-50 ">
      <div className=" md:space-y-7 text-center  w-full py-3 md:py-8 max-md:flex items-center justify-around max-md:bg-background max-md:rounded-t">
        <div className="flex items-center gap-2 md:flex-col ">
          <LucideHeartPlus className="hover:text-red-500" />
          <span className="text-sm">1234</span>
        </div>
        <div className="flex items-center gap-2 md:flex-col ">
          <MessageCircle
            className="hover:text-orange-500"
            onClick={onCommentClick}
          />
          <span className="text-sm">{post.comments.length}</span>
        </div>
        <div
          className="flex items-center gap-2 md:flex-col "
          role="button"
          onClick={handleToggleBookmark}
        >
          <BookmarkIcon
            className={` cursor-pointer ${
              optimisticBookmarks.isPostBookmarked
                ? "fill-zinc-900 dark:fill-white "
                : ""
            }`}
          />
          <span className="text-sm">{optimisticBookmarks.totalBookmarks}</span>
        </div>
        <PostDetailsSocialShareDropdown />
      </div>
    </aside>
  );
};
