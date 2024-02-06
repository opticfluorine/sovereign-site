import Image, {StaticImageData} from "next/image";
import Section from "@/ui/section";

import ScreenshotV010 from '../../../public/screenshot-v0.1.0.png';

/** Type describing a screenshot in the gallery. */
interface ImageRecord {
    image: StaticImageData;
    title: string;
    description: JSX.Element;
}

/** List of screenshots to include in the gallery. */
const imageRecords: ImageRecord[] = [
    {
        image: ScreenshotV010,
        title: "Sovereign Engine v0.1.0",
        description: <>
            Screenshot of Sovereign Engine v0.1.0 showing a player character in a small world with
            debug test data.
        </>
    },
];

/** React component that displays a single screenshot in the gallery. */
function GalleryImage({imageRecord}: { imageRecord: ImageRecord }) {
    return <Section className={""}>
        <h2 className={"text-xl font-bold pb-4 text-center"}>{imageRecord.title}</h2>
        <a href={imageRecord.image.src}>
            <Image src={imageRecord.image} alt={imageRecord.title}/>
        </a>
        <div className={"font-medium text-center pt-4"}>{imageRecord.description}</div>
    </Section>;
}

/** React component that displays the full gallery. */
export default function Gallery() {
    return <>
        <h1 className={"text-3xl font-bold p-4"}>Gallery</h1>
        {imageRecords.map(rec => {
            return <GalleryImage imageRecord={rec} key={rec.title}/>;
        })}
    </>;
}