import Ask from 'https://deno.land/x/ask/mod.ts';

const ask = new Ask();

const answers = await ask.prompt([
    {
        name: "customer",
        type: "input",
        message: "Who is the customer?"
    },
    {
        name: "freelancer",
        type: "input",
        message: "Who is the Freelancer?"
    },
    {
        name: "date",
        type: "input",
        message: "What is the active-date of contract?"
    },
    {
        name: "services",
        type: "input",
        message: "What are the services provided?"
    }
]);


const { customer, date, freelancer, services } = answers;

const contractTemplate = await Deno.readTextFile("./template.txt");

const contract = contractTemplate
                .replaceAll("[customer]", customer)
                .replaceAll("[freelancer]", freelancer)
                .replaceAll("[date]", date)
                .replaceAll("[services]", services);

await Deno.writeTextFile(`${date}-contract.txt`, contract);

console.log('Contract Written');