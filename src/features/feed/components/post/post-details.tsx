"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PostDetailsStatsSidebar } from "./post-details-stats-sidebar";
import PostImage from "@/assets/images/react.webp";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { formatDistance } from "date-fns";
import {
  MorePostsFromPostAuthorCard,
  PostAuthorCard,
} from "./post-author-card";
import { ExtendedPost } from "../../queries/get-all-posts";
import { Separator } from "@/components/ui/separator";
import { PostComments } from "@/features/comments/components/post-comments";
import { use, useRef } from "react";
import { notFound } from "next/navigation";

type PostDetailsProps = {
  postPromise: Promise<ExtendedPost | null>;
};
export const PostDetails = ({ postPromise }: PostDetailsProps) => {
  const commentsRef = useRef<HTMLDivElement | null>(null);
  const post = use(postPromise);

  if (!post) notFound();

  const handleScrollToComments = () => {
    if (commentsRef.current) {
      commentsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        commentsRef.current?.focus();
      }, 300);
    }
  };

  return (
    <section className="grid md:grid-cols-[72px_1fr] md:gap-y-4  min-h-screen pt-[57px]">
      <div>
        <PostDetailsStatsSidebar
          post={post}
          onCommentClick={handleScrollToComments}
        />
      </div>
      <div className="w-full lg:flex p-4 lg:gap-4 space-y-4 max-md:pb-16">
        <Card className="pt-0 border-0 rounded-md flex-1 ">
          <Image
            src={PostImage}
            alt="post-image"
            height={100}
            width={100}
            objectFit="cover"
            priority
            layout="responsive"
            className="rounded-md rounded-b-none"
          />
          <CardHeader className=" px-6 md:px-10 ">
            {/* WRITER INFO */}
            <div className="flex items-start gap-2">
              <Avatar className="rounded-full">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-[.8rem] font-semibold">
                  {post.author.name}
                </h4>
                <span className="text-sm text-muted-foreground">
                  {formatDistance(post.createdAt, new Date(), {
                    addSuffix: true,
                  })}
                </span>
              </div>
            </div>
            {/* STATS */}
            <div className="flex items-center flex-wrap gap-5">
              <span>💖 2</span>
              <span>🐎 2</span>
              <span>🤯 2</span>
              <span>🙌 2</span>
              <span>🐦‍🔥 2</span>
            </div>
            {/* TITLE */}
            <CardTitle>
              <h1>{post.title}</h1>
            </CardTitle>
            {/* TAGS */}
            <ul className="*:hover:outline *:py-1.5 space-x-2 ">
              {post.tags.map((tag) => (
                <Badge key={tag.id} variant="ghost" className="hover:outline">
                  #{tag.name}
                </Badge>
              ))}
            </ul>
          </CardHeader>
          <CardContent className=" px-6 md:px-16 pb-3" id="comments">
            <article className="prose prose-code:text-green-300 prose-img:rounded !w-full prose-p:text-[1rem] prose-p:leading-7 prose-p:lg:text-lg max-w-none  prose-zinc dark:prose-invert prose-h3:underline">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="!w-full "
                // style={{ whiteSpace: "pre-wrap" }}
              />
            </article>
          </CardContent>
          <Separator />
          <CardContent className="px-6 md:px-16 pb-5">
            <PostComments post={post} commentRef={commentsRef} />
          </CardContent>
        </Card>
        <aside className=" w-full lg:w-80 space-y-4">
          <PostAuthorCard />
          <MorePostsFromPostAuthorCard />
        </aside>
      </div>
    </section>
  );
};
