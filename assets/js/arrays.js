//array examples


const pets = ["dog", "cat", "horse", "goldfish"]
//indexes:      0      1       2         3

const temps = [78, 67, 75, 80, 86, 76, 71, 75]


let avgTemp = 0, sumTemp = 0
for(let i = 0; i < temps.length; i++) {
    //this for loop will loop through all the indices in the array
    sumTemp += temps[i]
}

avgTemp = sumTemp / temps.length
console.log("Average temp = ", avgTemp)

avgTemp = 0, sumTemp = 0

temps.forEach((element, index) => {
    //this for loop will loop through each element in the array
    sumTemp += element
})

avgTemp = sumTemp / temps.length
console.log("Average temp = ", avgTemp)

let str = "I want to pet the "

pets.forEach(element => str += element + " and the ")

str = str.replace(/\sand\sthe\s$/, ".");
console.log(str)

for(let i=0; i < pets.length; i++) {
    //this for loop will loop through all the indices in the array
    pets[i] += 's'
}

console.log(pets)

for(let p of pets) {
    //this loops through each element in an array
    console.log(`Is ${p} spelled correctly?`)
}

