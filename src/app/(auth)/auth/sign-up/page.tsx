import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { SocialRegisterationList } from "@/features/auth/components/social-registeration-list";
import { signInPath } from "@/paths";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col gap-4">
        <Logo />
        <div className="space-y-1">
          <h2 className="text-foreground text-2xl text-center font-bold">
            Join the BLOGSY Community
          </h2>
          <p className="text-muted-foreground text-[1rem] text-center">
            BLOGSY Community is a community of 3,217,011 amazing developers
          </p>
        </div>
        <SocialRegisterationList />
        <p className="max-w-[80%] w-full mx-auto text-center text-sm">
          By signing up, you are agreeing to our{" "}
          <span className="text-blue-500">privacy policy</span>,{" "}
          <span className="text-blue-500">terms of use </span>
          and <span className="text-blue-500">code of conduct</span>.
        </p>
        <Separator />
        <p className="text-muted-foreground text-sm text-center py-4">
          Already have an account?{" "}
          <Link href={signInPath} className="text-blue-500 text-lg ml-0.5">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
