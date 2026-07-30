type WordmarkProps = {
  className?: string;
  inverse?: boolean;
  withLlc?: boolean;
};

/**
 * Soft clinical wordmark — tracked uppercase, lighter weight, centered stack.
 */
export function Wordmark({
  className = "",
  inverse = false,
  withLlc = false,
}: WordmarkProps) {
  const heartland = inverse ? "text-white" : "text-primary";
  const accessibility = inverse ? "text-white/80" : "text-subtle";
  console.log(withLlc);
  return (
    <span
      className={`inline-flex flex-col items-center text-center leading-none ${className}`}
      aria-hidden="true"
    >
      <span
        className={`font-sans text-[0.95rem] font-medium tracking-[0.12em] ${heartland}`}
      >
        Heartland
      </span>
      <span
        className={`mt-1.5 font-sans text-[0.7rem] font-normal tracking-[0.04em] ${accessibility}`}
      >
        Accessibility{withLlc ? " LLC" : ""}
      </span>
    </span>
  );
}
