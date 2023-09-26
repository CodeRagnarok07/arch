import { ImageResponse } from "next/server";
import IconPng from "./IconPng"

export function generateImageMetadata() {
  const sizes = [144, 192,384];

  const sizes_data = sizes.map((v) => {
    const data = {
      contentType: "image/png",
      size: { width: v, height: v },
      id: v,
    };

    return data;
  });

  return sizes_data;
}

export default function Icon({ id }) {
  const size = { width: id, height: id };

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div style={{display:"flex"}}>

      <IconPng/>
      </div>

    ),

    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
