export const Spinner = () => {
  return (
    <div
      className="animate-spin inline-block size-10 border-4 border-current border-t-transparent text-primary rounded-full"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
