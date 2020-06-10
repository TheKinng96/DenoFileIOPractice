import { join } from "https://deno.land/std/path/mod.ts";

async function readFile() {
  const path = join("text_file", "hello.txt")
  const data = await Deno.readTextFile(path);
  // for await (const dirEntry of Deno.readDir(".")) {
  //   console.log(dirEntry.name);
  // }
  console.log(data)
}

await readFile();