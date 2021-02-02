const filenames = Deno.args;    // Save all argument files to filenames const

if (filenames.length > 0) {
    for (const filename of filenames) {
        const file = await Deno.readTextFile(filename);     // Everything in Deno is a promise
        console.log('File: ', file);
    }
} else {
    console.log('No files given.. ');
}