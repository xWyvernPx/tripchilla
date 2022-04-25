import fs from "fs";
export function blobToBase64(blob: any) {
  blob.data.flat();
  console.log(blob);
  return new Promise((resolve, _) => {
    const string64 = Buffer.from(blob, "base64").toString();
    resolve(string64);
  });
}
