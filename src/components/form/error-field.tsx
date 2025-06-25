import { ActionState } from "./to-action-state";

type ErrorFieldProps = {
  formState: ActionState;
  name: string;
};
export const ErrorField = ({ formState, name }: ErrorFieldProps) => {
  return (
    <span className="text-xs text-red-500">{formState?.fieldErrors[name]}</span>
  );
};
