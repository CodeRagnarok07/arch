import { ImageResponse } from "next/server";

export const runtime = "edge";

// Image metadata
export const size = {
  width: 16,
  height: 16,
};

export const contentType = "image/png";



export function generateImageMetadata() {
  const sizes = [
    2048,
    1668,
    1536,
    1125,
    1242,
    750,
    640,
    ];
  const sizes_data = sizes.map((v) => {
    const data = {
      contentType: "image/png",
      size: { width: v, height: v },
      id: `size_${v}x${v}`,
    };

    return data;
  });

  return sizes_data;
}

export default function Icon() {
  return new ImageResponse( // ImageResponse JSX element
    (
      <div className="text-2xl bg-black w-full h-full grid place-content-center text-white">
        {" "}
        A
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
