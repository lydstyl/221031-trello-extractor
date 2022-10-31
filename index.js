// const GenerateSchema = require("generate-schema")
const data = require("./data.json") // exported from trello

// // Log card schema
// const schema = GenerateSchema.json("Card schema", data.cards[0])
// console.log(`gb🚀 ~ schema`, schema)

// Log selected cards' name, url and due date
data.cards
    .filter(card => !card.closed)

    .map(card => {
        const { name, shortUrl, due } = card

        return { name, link: shortUrl, fixedDate: due }
    })

    .forEach(card => {
        console.log(`gb🚀 ~ card`, card)
    })

console.log(
    "Number of cards : ",
    data.cards.filter(card => !card.closed).length
)
