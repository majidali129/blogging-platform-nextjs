import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export const PostAuthorCard = () => {
  return (
    <Card className="relative pt-0 gap-0">
      <div className="h-8 bg-primary/50 rounded-t"></div>
      <CardHeader className="px-3  relative py-1">
        <div className="flex items-center gap-3 ">
          <Avatar className="rounded-full size-11 absolute -top-3.5">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <h4 className="text-lg font-semibold ml-14">Majid Ali</h4>
        </div>
      </CardHeader>
      <CardContent className="px-3 space-y-4">
        <Button className="w-full">Follow</Button>
        <ul className="flex items-center gap-2.5 flex-wrap *:!text-muted-foreground">
          <Badge variant="outline">Web developer</Badge>
          <Badge variant="outline">Self thought</Badge>
          <Badge variant="outline">Youtuber</Badge>
        </ul>
        <p>
          <span className="font-semibold text-muted-foreground">EDUCATION</span>{" "}
          <br /> Self Thought
        </p>
        <p>
          <span className="font-semibold text-muted-foreground">WORK</span>{" "}
          <br /> Founder & CEO at codewithsadee
        </p>
        <p>
          <span className="font-semibold text-muted-foreground">JOINED</span>{" "}
          <br /> Jun 11, 2021
        </p>
      </CardContent>
    </Card>
  );
};

export const MorePostsFromPostAuthorCard = () => {
  return (
    <Card className="pt-0">
      <CardHeader className="px-3  relative !py-2.5 border-b border-border">
        <h4 className="text-lg font-bold">
          More from <span className="text-primary">Majid Ali</span>{" "}
        </h4>
      </CardHeader>
      <CardContent className="px-0 *:px-3 space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 not-last:border-b pb-2.5"
          >
            <Link href="" className="text-foreground/80">
              How to build AI-Powered SaaS Platform with React, ShadCN, Appwrite
              & Clerk
            </Link>
            <div className="flex items-center gap-2 *:text-sm flex-wrap *:text-muted-foreground">
              <span>#react</span>
              <span>#javascript</span>
              <span>#typescript</span>
              <span>#node</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
