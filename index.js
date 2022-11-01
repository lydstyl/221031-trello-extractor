const fs = require("fs")

// const GenerateSchema = require("generate-schema")
const data = require("./data.json") // exported from trello

// // Log card schema
// const schema = GenerateSchema.json("Card schema", data.cards[0])
// console.log(`gb🚀 ~ schema`, schema)

// Log selected cards' name, url and due date
const cards = data.cards
    .filter(card => !card.closed)
    .map(card => {
        const { name, shortUrl, due } = card
        return { name, link: shortUrl, fixedDate: due }
    })

cards.forEach(card => {
    console.log(`gb🚀 ~ card`, card)
})

console.log("Number of cards : ", cards.length)

fs.writeFile("generated.json", JSON.stringify(cards, null, 4), function (err) {
    if (err) throw err
    console.log("Saved!")
})
