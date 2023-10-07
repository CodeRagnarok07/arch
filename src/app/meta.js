import { headers } from 'next/headers';
import { meta } from '/src/consts'


export default async function myFunction(cookies) {
    // const headersList = headers();
    // const host = headersList.get("host")
    // meta.metadataBase = new URL("http://" + host)
    
    let url = "https://code-ragnarok.vercel.app/"
    meta.metadataBase = url
    return meta
}