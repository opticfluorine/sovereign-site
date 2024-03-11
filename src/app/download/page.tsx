import Section from "@/ui/section";

export default function DownloadPage() {
    return <>
        <h1 className={"text-3xl font-bold p-4"}>Downloads</h1>
        <Section className={"max-w-screen-md"}>
            <h2 className={"text-2xl font-bold"}>Current Release: Sovereign Engine v0.2.0</h2>
            <div className={"p-4"}>
                <p className={"mb-4"}>This is a development prerelease of Sovereign Engine.
                    This release includes the following new features:</p>

                <ul className={"list-disc"}>
                    <li>Add login GUI.</li>
                    <li>Add registration GUI.</li>
                    <li>Add player selection GUI.</li>
                    <li>Add player creation GUI.</li>
                    <li>Add support for deleting players.</li>
                    <li>Add player debug window.</li>
                    <li>Add entity debug window.</li>
                    <li>Make client connection information configurable from configuration file.</li>
                </ul>

                <p>This release includes the following bugfixes:</p>

                <ul className={"list-disc"}>
                    <li>Fix multiple issues with world segment load/unload.</li>
                    <li>Fix issues with missing client data in release binaries.</li>
                    <li>Fix missing runtime dependencies in release binaries.</li>
                </ul>
            </div>
            <div>
                <h3 className={"text-2xl font-bold"}>Download</h3>
                <ul>
                    <li>Client (Windows 64-bit):
                        <a className={"font-bold"}
                           href={"https://github.com/opticfluorine/sovereign/releases/download/v0.2.0/SovereignClient-v0.2.0-win-x64.zip"}>
                            SovereignClient-v0.2.0-win-x64.zip</a></li>
                    <li>Server (Windows 64-bit):
                        <a className={"font-bold"}
                           href={"https://github.com/opticfluorine/sovereign/releases/download/v0.2.0/SovereignServer-v0.2.0-win-x64.zip"}>
                            SovereignServer-v0.2.0-win-x64.zip</a></li>
                    <li>Client (Linux 64-bit):
                        <a className={"font-bold"}
                           href={"https://github.com/opticfluorine/sovereign/releases/download/v0.2.0/SovereignClient-v0.2.0-linux-x64.tar.gz"}>
                            SovereignClient-v0.2.0-linux-x64.tar.gz
                        </a></li>
                    <li>Server (Linux 64-bit):
                        <a className={"font-bold"}
                           href={"https://github.com/opticfluorine/sovereign/releases/download/v0.2.0/SovereignServer-v0.2.0-linux-x64.tar.gz"}>
                            SovereignServer-v0.2.0-linux-x64.tar.gz
                        </a></li>
                    <li>Source Code (.zip):
                        <a className={"font-bold"}
                           href={"https://github.com/opticfluorine/sovereign/archive/refs/tags/v0.2.0.zip"}>
                            v0.2.0.zip
                        </a></li>
                    <li>Source Code (.tar.gz):
                        <a className={"font-bold"}
                           href={"https://github.com/opticfluorine/sovereign/archive/refs/tags/v0.2.0.tar.gz"}>
                            v0.2.0.tar.gz
                        </a></li>
                </ul>
            </div>
        </Section></>;
}