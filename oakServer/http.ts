import { Application, send, Router } from "https://deno.land/x/oak@v6.5.0/mod.ts";
import { indexOf } from "https://deno.land/std@0.84.0/bytes/mod.ts";

const app = new Application();

const router = new Router();

router.get("/hi", (context) => {
    context.response.body = {
        hello: {
            from: {
                bertle: "snart",
                flarty: ["Hardy", "Har", "Harrr"],
                the: {
                    router: "hi"
                }
            }
        }
    }
});

app.use(router.routes())

app.use( async (context) => {
    try {
        await send(context, context.request.url.pathname, {
            root: `${Deno.cwd()}/static`,
            index: "index.html",
        })
    } catch (error) {
        console.log("Error in middleware.." + error);
    }
});


await app.listen({ port: 8090 });