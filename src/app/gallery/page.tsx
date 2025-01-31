import Image, {StaticImageData} from "next/image";
import Section from "@/ui/section";

import ScreenshotV050 from "../../../public/screenshot-v0.5.0.png";
import ScreenshotV040 from "../../../public/screenshot-v0.4.0.png";
import ScreenshotV010 from "../../../public/screenshot-v0.1.0.png";

/** Type describing a screenshot in the gallery. */
interface ImageRecord {
  image: StaticImageData;
  title: string;
  description: JSX.Element;
  priority: boolean;
}

/** List of screenshots to include in the gallery. */
const imageRecords: ImageRecord[] = [
  {
    image: ScreenshotV050,
    title: "Sovereign Engine v0.5.0",
    description: (
      <>
        Screenshot of Sovereign Engine v0.5.0 showing a player character holding
        a small light by the shore at night, demonstrating the new lighting and
        shadow features in v0.5.0.
      </>
    ),
    priority: true,
  },
  {
    image: ScreenshotV040,
    title: "Sovereign Engine v0.4.0",
    description: (
      <>
        Screenshot of Sovereign Engine v0.4.0 showing a player character in a
        small world demonstrating layered blocks and the new block graphics.
      </>
    ),
    priority: false,
  },
  {
    image: ScreenshotV010,
    title: "Sovereign Engine v0.1.0",
    description: (
      <>
        Screenshot of Sovereign Engine v0.1.0 showing a player character in a
        small world with debug test data.
      </>
    ),
    priority: false,
  },
];

/** React component that displays a single screenshot in the gallery. */
function GalleryImage({ imageRecord }: { imageRecord: ImageRecord }) {
  return (
    <Section className={""}>
      <h2 className={"text-xl font-bold pb-4 text-center"}>
        {imageRecord.title}
      </h2>
      <figure title={imageRecord.title}>
        <a href={imageRecord.image.src}>
          <Image
            src={imageRecord.image}
            alt={imageRecord.title}
            className={"max-w-full xl:max-w-screen-lg"}
            priority={imageRecord.priority}
          />
        </a>
        <figcaption
          className={"font-medium pt-4 max-w-full xl:max-w-screen-lg"}
        >
          {imageRecord.description}
        </figcaption>
      </figure>
    </Section>
  );
}

/** React component that displays the full gallery. */
export default function Gallery() {
  return (
    <>
      <h1 className={"text-3xl font-bold p-4"}>Gallery</h1>
      {imageRecords.map((rec) => {
        return <GalleryImage imageRecord={rec} key={rec.title} />;
      })}
    </>
  );
}
