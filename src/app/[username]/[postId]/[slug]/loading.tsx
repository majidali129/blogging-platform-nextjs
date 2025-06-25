import { Spinner } from "@/components/spinner";

export default function Loading() {
  return (
    <div className="translate-y-[57px] h-[calc(100vh-57px)] border text-lg flex items-center justify-center">
      <Spinner />
    </div>
  );
}
