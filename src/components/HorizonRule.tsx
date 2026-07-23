export function HorizonRule({ fullWidth = false }: { fullWidth?: boolean }) {
  return (
    <div
      className={`h-0.5 border-0 bg-primary/18 ${fullWidth ? "my-0" : "my-10"}`}
      aria-hidden="true"
    />
  );
}
