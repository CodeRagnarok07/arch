import { ImageResponse } from "next/server";
import IconPng from "./IconPng";

export function generateImageMetadata() {
  // const sizes = [ 128, 10, 16, 24, 32, 48, 57, 58, 60, 62, 64, 70, 72, 76, 80, 96, 99, 114, 120, 144,  128, 150, 152, 173, 180, 192, 200, 256, 310, 384, 512, 1024, 1800,];

  const sizes = [144, 192, 384];

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
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 88,
          // background: "#000",
          color: "#fafafa",
        }}
      >
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M58.233 36.382C62.98 46.939 57.449 58.519 50.427 64.615C38.936 74.611 20.517 77.089 11.821 67.811C-1.654 53.51 9.072 31.953 29.288 18.484C46.305 7.16403 66.785 0.336027 90 0.495027C70.958 4.77203 49.346 12.221 36.783 23.493C26.494 32.656 23.048 45.369 29.339 55.606C36.312 66.873 57.665 58.536 58.233 36.382ZM31.767 53.617C27.02 43.06 32.551 31.48 39.573 25.384C51.118 15.392 69.487 12.856 78.233 22.192C91.654 36.49 80.928 58.047 60.766 71.52C43.749 82.84 23.269 89.668 0 89.505C19.096 85.232 40.654 77.779 53.271 66.511C63.506 57.344 66.956 44.577 60.661 34.394C53.742 23.131 32.335 31.464 31.767 53.617Z"
            fill="#fafafa"
          />
        </svg>
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
