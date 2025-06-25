import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const TagsSearch = () => {
  return (
    <div className="border border-border rounded max-w-sm w-full flex items-center px-2 focus-within:border-primary transition-all duration-300">
      <Input
        placeholder="Search for tag"
        className="focus-visible:border-none !bg-transparent  shadow-none focus-visible::outline-0 border-0 focus-visible:ring-0 w-full"
      />
      <Search className="opacity-80" />
    </div>
  );
};
