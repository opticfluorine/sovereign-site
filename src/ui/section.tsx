import {clsx} from "clsx";

/** Template component for a content section. */
export default function Section({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={clsx(
        "rounded-lg bg-white/5 backdrop-blur-md border border-slate-400/30 shadow-lg shadow-slate-400/10 p-2 xl:p-4 my-4",
        className,
      )}
    >
      {children}
    </section>
  );
}
