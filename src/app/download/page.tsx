import Section from "@/ui/section";
import Link from "next/link";

export default function DownloadPage() {
  return (
    <>
      <h1 className={"text-3xl font-bold p-4"}>Downloads</h1>
      <Section className={"max-w-screen-md"}>
        <h2 className={"text-2xl font-bold"}>
          Current Release: Sovereign Engine v0.5.0
        </h2>
        <div className={"p-4"}>
          <p className={"mb-4"}>
            This is a development prerelease of Sovereign Engine. This release
            includes the following new features:
          </p>

          <ul className={"list-disc"}>
            <li>Added dynamic lighting and shadows</li>
            <li>Added Lua 5.4 as a server-side scripting language</li>
            <li>Display player name above each player in game</li>
            <li>Fix various graphical bugs in renderer</li>
            <li>Improved database performance</li>
          </ul>
        </div>
        <div>
          <h3 className={"text-2xl font-bold"}>Download</h3>
          <ul>
            <li>
              Client (Windows 64-bit):{" "}
              <Link
                className={"font-bold"}
                href={
                  "https://github.com/opticfluorine/sovereign/releases/download/v0.5.0/SovereignClient-v0.5.0-win-x64.zip"
                }
              >
                SovereignClient-v0.5.0-win-x64.zip
              </Link>
            </li>
            <li>
              Server (Windows 64-bit):{" "}
              <Link
                className={"font-bold"}
                href={
                  "https://github.com/opticfluorine/sovereign/releases/download/v0.5.0/SovereignServer-v0.5.0-win-x64.zip"
                }
              >
                SovereignServer-v0.5.0-win-x64.zip
              </Link>
            </li>
            <li>
              Client (Linux 64-bit):{" "}
              <Link
                className={"font-bold"}
                href={
                  "https://github.com/opticfluorine/sovereign/releases/download/v0.5.0/SovereignClient-v0.5.0-linux-x64.tar.gz"
                }
              >
                SovereignClient-v0.5.0-linux-x64.tar.gz
              </Link>
            </li>
            <li>
              Server (Linux 64-bit):{" "}
              <Link
                className={"font-bold"}
                href={
                  "https://github.com/opticfluorine/sovereign/releases/download/v0.5.0/SovereignServer-v0.5.0-linux-x64.tar.gz"
                }
              >
                SovereignServer-v0.5.0-linux-x64.tar.gz
              </Link>
            </li>
            <li>
              Source Code (.zip):{" "}
              <Link
                className={"font-bold"}
                href={
                  "https://github.com/opticfluorine/sovereign/archive/refs/tags/v0.5.0.zip"
                }
              >
                sovereign-v0.5.0.zip
              </Link>
            </li>
            <li>
              Source Code (.tar.gz):{" "}
              <Link
                className={"font-bold"}
                href={
                  "https://github.com/opticfluorine/sovereign/archive/refs/tags/v0.5.0.tar.gz"
                }
              >
                sovereign-v0.5.0.tar.gz
              </Link>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
}
