import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ErrorField } from "./error-field";
import { ActionState } from "./to-action-state";

type FormItemProps = {
  name: string;
  label: string;
  type?: string;
  formState: ActionState;
  placeholder?: string;
};

export const FormItem = ({
  name,
  label,
  type = "text",
  placeholder,
  formState,
}: FormItemProps) => {
  return (
    <div className="w-full flex flex-col gap-2.5">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="py-2.5 h-auto border !border-zinc-300"
        defaultValue={formState?.payload?.get(name) as string}
      />
      <ErrorField formState={formState} name={name} />
    </div>
  );
};
