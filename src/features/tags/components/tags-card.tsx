import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type TagCardProps = {
  name?: string;
  posts?: number;
  description?: string;
  color?: string;
  background?: string;
};

export const TagsCard = ({
  name,
  posts,
  description,
  color,
  background,
}: TagCardProps) => {
  console.log(name, posts, description, color, background);
  return (
    <Card className="min-h-48 border-none h-full justify-between">
      <CardHeader>
        <div className=" space-y-2.5 ">
          <CardTitle className="flex items-center justify-between ">
            <Link href="">
              <Badge variant="ghost">
                <h4 className="font-semibold ">
                  <span className={``}>#</span>javascript
                </h4>
              </Badge>
            </Link>
            <span className="text-muted-foreground text-xs">2,329 posts</span>
          </CardTitle>
          <p className="text-sm line-clamp-3">
            Once relegated to the browser as one of the 3 core technologies of
            the web
          </p>
        </div>
      </CardHeader>

      <CardFooter className="gap-2">
        <Button>Follow</Button>
        <Button variant="ghost">Hide</Button>
      </CardFooter>
    </Card>
  );
};
