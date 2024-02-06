import Section from "@/ui/section";

export default function DownloadPage() {
    return <>
        <h1 className={"text-3xl font-bold p-4"}>Downloads</h1>
        <Section className={"max-w-screen-md"}>
            <h2 className={"text-2xl font-bold"}>Current Release: Sovereign Engine v0.1.0</h2>
            <div className={"p-4"}>
                <p className={"mb-4"}>This is the initial development prerelease of Sovereign Engine. This release
                    includes the following
                    features:</p>

                <ul className={"list-disc"}>
                    <li>Client and server supporting Windows and Linux platforms</li>
                    <li>Login and registration (API only, GUI planned for v0.2.0 release)</li>
                    <li>Player listing, creation, selection during login (API only, GUI planned for v0.2.0 release)</li>
                    <li>Basic rendering of world including automatic borders between neighboring tiles, animated
                        sprites, directional sprites
                    </li>
                    <li>Sprite metadata including attribution information for easy inclusion of third party assets</li>
                    <li>Player movement via keyboard</li>
                    <li>Distributed entity-component-system (ECS) data model with full client-side synchronization from
                        server, full server-side persistence in a relational database (SQLite currently supported,
                        Postgres planned)
                    </li>
                </ul>
            </div>
            <div>
                <h3 className={"text-2xl font-bold"}>Download</h3>
                <ul>
                    <li>Client (Windows 64-bit):
                        <a className={"font-bold"}
                           href={"https://github.com/opticfluorine/sovereign/releases/download/v0.1.0/SovereignClient-v0.1.0-win-x64.zip"}>
                            SovereignClient-v0.1.0-win-x64.zip</a></li>
                    <li>Server (Windows 64-bit):
                        <a className={"font-bold"}
                           href={"https://github.com/opticfluorine/sovereign/releases/download/v0.1.0/SovereignServer-v0.1.0-win-x64.zip"}>
                            SovereignServer-v0.1.0-win-x64.zip</a></li>
                    <li>Client (Linux 64-bit):
                        <a className={"font-bold"}
                           href={"https://github.com/opticfluorine/sovereign/releases/download/v0.1.0/SovereignClient-v0.1.0-linux-x64.tar.gz"}>
                            SovereignClient-v0.1.0-linux-x64.tar.gz
                        </a></li>
                    <li>Server (Linux 64-bit):
                        <a className={"font-bold"}
                           href={"https://github.com/opticfluorine/sovereign/releases/download/v0.1.0/SovereignServer-v0.1.0-linux-x64.tar.gz"}>
                            SovereignServer-v0.1.0-linux-x64.tar.gz
                        </a></li>
                </ul>
            </div>
        </Section></>;
}