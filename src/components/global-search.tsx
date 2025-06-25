import { Search } from "lucide-react";
import { Input } from "./ui/input";

export const GlobalSearch = () => {
  return (
    <div className="border border-border rounded max-w-lg w-full hidden md:flex items-center px-3 focus-within:border-primary transition-all duration-300">
      <Search className="opacity-80" />
      <Input
        placeholder="Search...."
        className="focus-visible:border-none !bg-transparent  shadow-none focus-visible::outline-0 border-0 focus-visible:ring-0 w-full"
      />
    </div>
  );
};
