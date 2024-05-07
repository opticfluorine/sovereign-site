import Section from "@/ui/section";

export default function DownloadPage() {
    return <>
        <h1 className={"text-3xl font-bold p-4"}>Downloads</h1>
        <Section className={"max-w-screen-md"}>
            <h2 className={"text-2xl font-bold"}>Current Release: Sovereign Engine v0.3.0</h2>
            <div className={"p-4"}>
                <p className={"mb-4"}>This is a development prerelease of Sovereign Engine.
                    This release includes the following new features:</p>

                <ul className={"list-disc"}>
                    <li>Add in-game chat.</li>
                    <li>Add admin roles for users.</li>
                    <li>Add integrated resource editor for client-side resources.</li>
                </ul>
            </div>
            <div>
                <h3 className={"text-2xl font-bold"}>Download</h3>
                <ul>
                    <li>Client (Windows 64-bit):
                        <a className={"font-bold"}
                           href={"https://github.com/opticfluorine/sovereign/releases/download/v0.3.0/SovereignClient-v0.3.0-win-x64.zip"}>
                            SovereignClient-v0.3.0-win-x64.zip</a></li>
                    <li>Server (Windows 64-bit):
                        <a className={"font-bold"}
                           href={"https://github.com/opticfluorine/sovereign/releases/download/v0.3.0/SovereignServer-v0.3.0-win-x64.zip"}>
                            SovereignServer-v0.3.0-win-x64.zip</a></li>
                    <li>Client (Linux 64-bit):
                        <a className={"font-bold"}
                           href={"https://github.com/opticfluorine/sovereign/releases/download/v0.3.0/SovereignClient-v0.3.0-linux-x64.tar.gz"}>
                            SovereignClient-v0.3.0-linux-x64.tar.gz
                        </a></li>
                    <li>Server (Linux 64-bit):
                        <a className={"font-bold"}
                           href={"https://github.com/opticfluorine/sovereign/releases/download/v0.3.0/SovereignServer-v0.3.0-linux-x64.tar.gz"}>
                            SovereignServer-v0.3.0-linux-x64.tar.gz
                        </a></li>
                    <li>Source Code (.zip):
                        <a className={"font-bold"}
                           href={"https://github.com/opticfluorine/sovereign/archive/refs/tags/v0.3.0.zip"}>
                            v0.3.0.zip
                        </a></li>
                    <li>Source Code (.tar.gz):
                        <a className={"font-bold"}
                           href={"https://github.com/opticfluorine/sovereign/archive/refs/tags/v0.3.0.tar.gz"}>
                            v0.3.0.tar.gz
                        </a></li>
                </ul>
            </div>
        </Section></>;
}