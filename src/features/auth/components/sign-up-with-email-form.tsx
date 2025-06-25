"use client";

import { FormItem } from "@/components/form/form-item";
import { SubmitButton } from "@/components/form/submit-button";
import { registerUser } from "../actions/sign-up";
import { useActionState } from "react";
import { Empty_Action_State } from "@/components/form/to-action-state";

export const SignUpWithEmailForm = () => {
  const [formState, action] = useActionState(registerUser, Empty_Action_State);
  console.log("FormState", formState);
  return (
    <div className="max-w-lg mx-auto w-full bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md border space-y-5">
      <h2 className="text-xl font-bold">Create your account</h2>
      <form action={action} className="space-y-3">
        <FormItem formState={formState} label="Name" name="name" />
        <FormItem formState={formState} name="userName" label="Username" />
        <FormItem formState={formState} name="email" label="Email" />
        <FormItem formState={formState} name="password" label="Password" />
        <FormItem
          formState={formState}
          name="confirmPassword"
          label="Confirm Password"
        />
        <div className="flex items-center justify-end">
          <SubmitButton label="Sign Up" />
        </div>
      </form>
    </div>
  );
};
