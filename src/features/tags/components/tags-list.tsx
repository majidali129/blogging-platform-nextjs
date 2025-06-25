import { TagsCard } from "./tags-card";

export const TagsList = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <TagsCard />
      <TagsCard />
      <TagsCard />
      <TagsCard />
    </ul>
  );
};
