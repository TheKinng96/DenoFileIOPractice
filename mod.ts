async function readFile() {
  const data = await Deno.readTextFile("hello.txt");
  for await (const dirEntry of Deno.readDir(".")) {
    console.log(dirEntry.name);
  }
  console.log(data)
}

await readFile();