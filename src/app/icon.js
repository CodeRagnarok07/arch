import { ImageResponse } from "next/server";

export const runtime = "edge";
// Image metadata
export const contentType = "image/png";
const sizes = [
  9, 10, 16, 24, 32, 48, 57, 58, 60, 62, 64, 70, 72, 76, 80, 96, 99, 114, 120,
  128, 150, 152, 173, 180, 192, 200, 256, 310, 384, 512, 1024, 1800,
];

export function generateImageMetadata() {
  const sizes_data = sizes.map((v) => {
    const data = {
      contentType: "image/webp",
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
      <div
      style={{
        fontSize: 24,
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      🌀
    </div>
    ),
  );
}
