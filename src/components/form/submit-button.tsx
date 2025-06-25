"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";

type SubmitButtonProps = {
  label: string;
  className?: string;
  disabled?: boolean;
};
export const SubmitButton = ({
  label,
  className,
  disabled,
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending || disabled}
      className={cn(className)}
    >
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
