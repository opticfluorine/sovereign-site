import Section from "@/ui/section";
import Link from "next/link";

export default function CreditsPage() {
  return (
    <>
      <h1 className={"text-3xl font-bold p-4"}>Credits</h1>
      <Section className={"max-w-screen-md"}>
        <div className={"py-2"}>
          <h2 className={"text-2xl font-bold"}>Software</h2>
          <p className={"mb-4"}>
            Sovereign Engine is developed by opticfluorine (
            <a href={"https://github.com/opticfluorine"}>GitHub profile</a>).
            The source code is released freely under the GNU General Public
            License, Version 3 (GPLv3) license. Refer to the{" "}
            <Link
              href={
                "https://github.com/opticfluorine/sovereign/blob/main/LICENSE"
              }
              className={"font-bold"}
            >
              license file
            </Link>{" "}
            for more information.
          </p>
        </div>

        <div className={"py-2"}>
          <h2 className={"text-2xl font-bold"}>Resources (Graphics, etc.)</h2>
          <p className={"mb-4"}>
            Sovereign Engine includes default game resources from a number of
            sources which are licensed under a permissive license. More
            information is available at{" "}
            <Link
              href={"https://docs.sovereignengine.com/attributions.html"}
              className={"font-bold"}
            >
              this page
            </Link>
            .
          </p>
        </div>

        <div className={"py-2"}>
          <h2 className={"text-2xl font-bold"}>Website</h2>
          <p className={"mb-4"}>
            The slime logo for the Sovereign Engine website is from the
            Liberated Pixel Cup (LPC) base assets, retrieved from{" "}
            <Link
              href={
                "https://opengameart.org/content/liberated-pixel-cup-lpc-base-assets-sprites-map-tiles"
              }
              className={"font-bold"}
            >
              OpenGameArt
            </Link>{" "}
            on July 4, 2018. Credit to Lanea Zimmerman (AKA Sharm), Stephen
            Challener (AKA Redshrike), Charles Sanchez (AKA CharlesGabriel),
            Manuel Riecke (AKA MrBeast), and Daniel Armstrong (AKA
            HughSpectrum). The asset is licensed under CC-BY-SA 3.0.
          </p>
        </div>
      </Section>
    </>
  );
}
