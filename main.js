
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/
for (const flower of flowers) {
    // console.log(flower)
    for (const flo of flower.usdaZones) {
        // console.log(flo)
    }
    for (const color of flower.colors) {
        // console.log(color)
    }
}

/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/
const inexpensiveFlowers = () => {
    const filteredFlowers = []  // Do not modify


    // Write your algorithm first, and then your code. Feel free to remove this comment

    for (const flower of flowers) {
        if (flower.price < 2) {
            filteredFlowers.push(flower)
        }
    }

    return filteredFlowers  // Do not modify

}

// console.log(inexpensiveFlowers())

/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.
*/
const zoneFlowers = () => {
    const filteredFlowers = [];

    for (const flower of flowers) {
        if (flower.usdaZones.includes(3) && flower.usdaZones.includes(8)) {
            filteredFlowers.push(flower);
        }
    }
    return filteredFlowers;
}
// console.log(zoneFlowers());

/*
    This function should return flowers that come in the color Orange
*/
const orangeFlowers = () => {
    const filteredFlowers = []  // Do not modify
    /* 
     {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    }, 
    */

    for (const flower of flowers) {
        if (flower.colors.includes("Orange")) {
            filteredFlowers.push(flower)
        }
    }
    // Write your algorithm first, and then your code. Feel free to remove this comment

    return filteredFlowers  // Do not modify
}
// console.log(orangeFlowers())

/*
    This function should return an HTML representation of each flower.

    Expected string format:
        <article>
            <h1>Bird of Paradise</h1>

            <h2>Colors</h2>
            <section>White</section>
            <section>Orange</section>

            <h2>USDA Zones</h2>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </article>
*/
const flowersAsHTML = () => {

    let flowersHTMLString = ""  // Do not modify

    // iterate flowers array
    for (const flower of flowers) {
        //add <article> to 
        flowersHTMLString += `<article>`
        flowersHTMLString += `<h1>${flower.type}</h1>`
        flowersHTMLString += ' <h2>Colors</h2>'

        for (const flo of flower.colors) {
            flowersHTMLString += `<section>${flo}</section>`
        }

        flowersHTMLString += `<h2>USDA Zones</h2>`

        for (const usda of flower.usdaZones) {
            flowersHTMLString += `<div>${usda}</div>`
        }

        flowersHTMLString += `</article> `
    }
    return flowersHTMLString  // Do not modify
}
// console.log(flowersAsHTML())

//create a function
const flowerAsHTML2 = () => {
    // to build a string as seen above
    // declare a variable equal to an empty string using let declaration to ensure ability to update
    let string = ''
    // iterate flowers array
    for (const flower of flowers) {
        // build the string
        string += `<article>\n `
        string += `\t<h1>${flower.type}</h1>\n\n`
        string += `\t<h2>Colors</h2> \n`
        for (const color of flower.colors) {
            string += `\t  <section>${color}</section> \n`
        }
        string += `\n\t<h2>USDA Zones</h2>\n`
        for (const zones of flower.usdaZones) {
            string += `\t  <div>${zones}</div>\n`
        }
        string += '</article>\n'
    }
    // return the string
    return string
}

// console log results...}or call function and use debug output instead of terminal.
console.log(flowerAsHTML2())










































































/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers
module.exports = {
    inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
}
/*  DO NOT TOUCH THIS CODE  */

