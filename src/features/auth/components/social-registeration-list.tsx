import { signUpWithEmailPath } from "@/paths";
import Link from "next/link";

export const SocialRegisterationList = () => {
  return (
    <ul className="space-y-2.5 w-full *:font-semibold">
      <div className="flex items-center justify-center py-3 border border-border rounded">
        Sign up with Facebook
      </div>
      <div className="flex items-center justify-center py-3 border border-border rounded">
        Sign up with Forem
      </div>
      <div className="flex items-center justify-center py-3 border border-border rounded">
        Sign up with Github
      </div>
      <div className="flex items-center justify-center py-3 border border-border rounded">
        Sign up with Google
      </div>
      <Link
        href={signUpWithEmailPath}
        className="flex items-center justify-center py-3 border border-border rounded"
      >
        Sign up with Email
      </Link>
    </ul>
  );
};
