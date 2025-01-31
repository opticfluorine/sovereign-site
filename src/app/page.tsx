import Image from "next/image";
import Screenshot from "../../public/screenshot-v0.5.0.png";
import Link from "next/link";

function HeroScreenshot() {
  return (
    <div className={"py-4 md:-mb-64"}>
      <Image
        src={Screenshot}
        alt={"Screenshot of the Sovereign Engine client, v0.5.0."}
        priority={true}
      />
    </div>
  );
}

function IntroText() {
  return (
    <div className={"p-2 font-bold max-w-3xl"}>
      <p className={"text-3xl pb-4 mr-8"}>
        Build multiplayer RPGs with Sovereign Engine.
      </p>
      <ul className={"text-xl font-normal"}>
        <li>Build your own multiplayer RPGs and MMORPGs with ease.</li>
        <li>
          Create detailed worlds filled with towns, caves, dungeons, and more.
        </li>
        <li>Easily deploy a server and share your world with others.</li>
      </ul>
    </div>
  );
}

function ReleaseInfo() {
  return (
    <div
      className={
        "p-4 mt-4 md:mt-0 md:ml-auto rounded-lg bg-white/5 backdrop-blur-md border border-slate-400/30 shadow-lg shadow-slate-400/10"
      }
    >
      <h1 className={"font-bold text-2xl"}>Latest Release: v0.5.0</h1>
      <p>
        Head over to the{" "}
        <Link href={"/download"} className={"font-bold"}>
          Download
        </Link>{" "}
        page for more details.
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <section className={"space-y-2 max-w-screen-xl flex flex-col flex-grow"}>
      <HeroScreenshot />
      <div
        className={
          "p-4 flex flex-col md:flex-row flex-grow bg-gradient-to-b from-zinc-600/40 via-zinc-600/60 to-zinc-600 min-h-64"
        }
      >
        <IntroText />
        <ReleaseInfo />
      </div>
    </section>
  );
}
