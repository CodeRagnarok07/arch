import { ImageResponse } from "next/server";

export const runtime = "edge";

// Image metadata

export const size = { width: 1200, height: 630 }

export const alt = 'My images alt text'

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
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
