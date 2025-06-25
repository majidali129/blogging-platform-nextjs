"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";

type SubmitButtonProps = {
  label: string;
  className?: string;
};
export const SubmitButton = ({ label, className }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className={cn(className)}>
      {pending ? (
        <>
          <Loader className="animate-spin" /> <span>wait</span>
        </>
      ) : (
        label
      )}
    </Button>
  );
};
