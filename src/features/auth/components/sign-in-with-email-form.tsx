"use client";
import { FormItem } from "@/components/form/form-item";
import { SubmitButton } from "@/components/form/submit-button";
import { useActionState } from "react";
import { loginUser } from "../actions/sign-in";
import { Empty_Action_State } from "@/components/form/to-action-state";

export const SignInWithEmailForm = () => {
  const [formState, action] = useActionState(loginUser, Empty_Action_State);
  return (
    <div className="w-full  space-y-5 py-3">
      <form action={action} className="space-y-3">
        <FormItem formState={formState} name="email" label="Email" />
        <FormItem formState={formState} name="password" label="Password" />
        <div className="flex items-center justify-end">
          <SubmitButton label="Sign In" className="w-full" />
        </div>
      </form>
    </div>
  );
};
