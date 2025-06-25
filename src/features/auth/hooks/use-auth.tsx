import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import { getAuth } from "../queries/get-auth";
import { usePathname } from "next/navigation";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isFetched, setIsFetched] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    const fetchUser = async () => {
      const { user } = await getAuth();

      setUser(user as User);
      setIsFetched(true);
    };

    fetchUser();
  }, [pathName]);

  return { isFetched, user };
};
