const file = await Deno.writeTextFile("write.txt", "Writing some Deno cool shiz!");

console.log('File sucessfully written');