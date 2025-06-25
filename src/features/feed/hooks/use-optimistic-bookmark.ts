import { useOptimistic } from "react";
import { ExtendedPost } from "../queries/get-all-posts";

export const useOptimisticBookmark = (post: ExtendedPost) => {
  const [optimisticBookmarks, addOptimisticBookmarks] = useOptimistic(
    {
      isPostBookmarked: post.isBookmarkedByUser,
      totalBookmarks: post.totalBookmarks,
    },
    (state, action: { toggle: boolean }) => {
      return {
        isPostBookmarked: action.toggle,
        totalBookmarks: state.totalBookmarks + (action.toggle ? 1 : -1),
      };
    }
  );

  return { optimisticBookmarks, addOptimisticBookmarks };
};
