import Section from "@/ui/section";
import Link from "next/link";

export default function DownloadPage() {
  return (
    <>
      <h1 className={"text-3xl font-bold p-4"}>Downloads</h1>
      <Section className={"max-w-screen-md"}>
        <h2 className={"text-2xl font-bold"}>
          Current Release: Sovereign Engine v0.6.0
        </h2>
        <div className={"p-4"}>
          <p className={"mb-4"}>
            This is a development prerelease of Sovereign Engine. This release
            includes the following new features:
          </p>

          <ul className={"list-disc"}>
            <li>Added physics and collisions</li>
            <li>Added in-game calendar with day/night cycle</li>
            <li>Improved world editor UI/UX</li>
            <li>Network performance improvements</li>
            <li>Various lighting and shadow fixes</li>
            <li>Added support for running server as Windows Service or systemd service</li>
            <li>Added Windows installer for client and server</li>
          </ul>
        </div>
        <div>
          <h3 className={"text-2xl font-bold"}>Download</h3>
          <ul>
            <li>
              Installer (Windows 64-bit):{" "}
              <Link
                className={"font-bold"}
                href={
                  "https://github.com/opticfluorine/sovereign/releases/download/v0.6.0/Sovereign_Install_v0.6.0.exe"
                }
              >
                Sovereign_Install_v0.6.0.exe
              </Link>
            </li>
            <li>
              Client (Linux 64-bit):{" "}
              <Link
                className={"font-bold"}
                href={
                  "https://github.com/opticfluorine/sovereign/releases/download/v0.6.0/SovereignClient-v0.6.0-linux-x64.tar.gz"
                }
              >
                SovereignClient-v0.6.0-linux-x64.tar.gz
              </Link>
            </li>
            <li>
              Server (Linux 64-bit):{" "}
              <Link
                className={"font-bold"}
                href={
                  "https://github.com/opticfluorine/sovereign/releases/download/v0.6.0/SovereignServer-v0.6.0-linux-x64.tar.gz"
                }
              >
                SovereignServer-v0.6.0-linux-x64.tar.gz
              </Link>
            </li>
            <li>
              Source Code (.zip):{" "}
              <Link
                className={"font-bold"}
                href={
                  "https://github.com/opticfluorine/sovereign/archive/refs/tags/v0.6.0.zip"
                }
              >
                sovereign-v0.6.0.zip
              </Link>
            </li>
            <li>
              Source Code (.tar.gz):{" "}
              <Link
                className={"font-bold"}
                href={
                  "https://github.com/opticfluorine/sovereign/archive/refs/tags/v0.6.0.tar.gz"
                }
              >
                sovereign-v0.6.0.tar.gz
              </Link>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
}
