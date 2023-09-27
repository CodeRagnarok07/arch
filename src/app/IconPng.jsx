


export default async function IconPng({ size = 150 }) {


  return (
    <div style={{ width: size, height: size, borderRadius: "50%", backgroundColor: "#005E94", padding: `${size / 10}` }} >
      <div
        style={{
          backgroundImage: `url(/icons/icon.png)`,
          backgroundSize: "contain",
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
    </div>

  )
}