import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { SignInWithEmailForm } from "@/features/auth/components/sign-in-with-email-form";
import { SocialRegisterationList } from "@/features/auth/components/social-registeration-list";
import { signUpPath } from "@/paths";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col gap-4 max-w-lg mx-auto">
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
        <div className="grid grid-cols-[1fr_20px_1fr] items-center justify-center gap-3 w-full">
          <Separator />
          <span>OR</span>
          <Separator />
        </div>
        <SignInWithEmailForm />
        <p className="max-w-[80%] w-full mx-auto text-center text-sm">
          By signing up, you are agreeing to our{" "}
          <span className="text-blue-500">privacy policy</span>,{" "}
          <span className="text-blue-500">terms of use </span>
          and <span className="text-blue-500">code of conduct</span>.
        </p>
        <Separator />
        <p className="text-muted-foreground text-sm text-center py-4">
          New to BLOGSY Community?{" "}
          <Link href={signUpPath} className="text-blue-500 text-lg ml-0.5">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
