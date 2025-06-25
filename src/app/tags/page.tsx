import { TagsHeader } from "@/features/tags/components/tags-header";
import { TagsList } from "@/features/tags/components/tags-list";
import React from "react";

const TagsPage = () => {
  return (
    <section className="px-5 py-4  space-y-4 translate-y-[57px] ">
      <TagsHeader />
      <TagsList />
    </section>
  );
};

export default TagsPage;
