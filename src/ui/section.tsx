import {clsx} from "clsx";

/** Template component for a content section. */
export default function Section({className, children}: { className: string, children: React.ReactNode }) {
    return <section className={clsx("bg-zinc-500 rounded-xl p-4", className)}>
        {children}
    </section>;
}
