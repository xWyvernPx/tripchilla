import axiosClient from "./axiosClient";

export async function imageUrlToBase64(url: string): Promise<any> {
  let image = await axiosClient.get(url, {
    responseType: "arraybuffer",
  });
  let returnedB64 = Buffer.from(image.data).toString("base64");
  console.log(returnedB64);
  return returnedB64;
}
