import type { NextApiRequest, NextApiResponse } from "next";
import { writeFile } from "fs/promises";
import { Readable } from "stream";
import path from "path";

/** Reads the content of a readable stream into a buffer */
const readContentReadableStream = async (readable: ReadableStream) => {
  const chunks = [];
  const reader = readable.getReader();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    chunks.push(value);
  }

  console.log(Buffer.concat(chunks));

  return Buffer.concat(chunks);
};

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const formData = await req.body;
  console.log(formData);
  // const buffer = Buffer.from(formData);
  // console.log(buffer);

  await writeFile(
    path.join(process.cwd(), "app/public/assets/test.png"),
    (await readContentReadableStream(formData)).toString()
  );

  return res.status(200).json({ message: "File saved successfully" });

  // const buffer = Buffer.from(await file.arrayBuffer());
  // const filename = file.name.replaceAll(" ", "_");
  // console.log(filename);

  // try {
  //   await writeFile(
  //     path.join(process.cwd(), "public/assets/" + filename),
  //     buffer
  //   );

  //   res.status(200).json({ message: "File saved successfully" });
  // } catch (error: unknown) {
  //   res.status(500).json({ error: "Failed to save file" });
  // }
}
