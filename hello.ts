import { serve } from "https://deno.land/std@0.85.0/http/server.ts";

const s = serve({ port: 8000 });

for await ( const req of s ) {
    req.respond({
        body: "<h1>Hello From Inside DENO! (server)</h1><h2>Sup Denosaurs!!</h2>"
    })
};