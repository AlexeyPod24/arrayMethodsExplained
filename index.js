// // SLICE

// const numbers = [1, 2, 3, 7, 10, 6, 7, 8]
// const a = 1;
// const b = 6;
// const newArray = numbers.slice(a, b)
// console.log(newArray)

// // Explanation positive numbers

// let sliced = []

// for (let i = 0; i < numbers.length; i++) {

// if (i >= a && i < b) {
//     sliced.push(numbers[i])
    
// }

  
// }


// console.log(sliced)
// ///////////////////////////////////////




// // FILTER 

// const numbers = [1, 2, 3, 7, 10, 6, 7, 8]

// const newArray = numbers.filter(num => {
//     return num < 8
// })

// console.log(newArray)

// // Explanation

// const newArrayTwo = []

// for (let number of numbers) {

//     if (number < 8) {
//         newArrayTwo.push(number)
//     }
// }

// console.log(newArrayTwo)



// MAP

// const items = [
//     {name: 'Bike', price: 100 },
//     {name: 'TV', price: 200 },
//     {name: 'Album', price: 10 },
//     {name: 'Book', price: 5 },
//     {name: 'Phone', price: 500 },
//     {name: 'Computer', price: 1000 },
//     {name: 'Keyboard', price: 25 }
// ]

// const prices = items.map((item) => {
//     return item.price
    
// })

// console.log(prices)

// // Explanation

// let pricesTwo = []


// for (const item of items) {
//     pricesTwo.push(item.price)
// }

// console.log(pricesTwo)

// // ////////////////////////////////////////


// FIND METHOD

// const items = [
//     {name: 'Bike', price: 100 },
//     {name: 'TV', price: 200 },
//     {name: 'Album', price: 10 },
//     {name: 'Book', price: 5 },
//     {name: 'Phone', price: 500 },
//     {name: 'Computer', price: 1000 },
//     {name: 'Keyboard', price: 25 }
// ]

// const book = items.find((foundBook) => {
//     return foundBook.name === 'Book'
// })

// console.log(book)

// // Explanation

// const bookTwo = []

// for (let item of items) {
//     if (item.name === 'Book') {
//         bookTwo.push(item)
//     }
// }

// console.log(bookTwo)

// //////////////////////////////////

// SOME

// const items = [
//     {name: 'Bike', price: 100 },
//     {name: 'TV', price: 200 },
//     {name: 'Album', price: 10 },
//     {name: 'Book', price: 5 },
//     {name: 'Phone', price: 500 },
//     {name: 'Computer', price: 1000 },
//     {name: 'Keyboard', price: 25 }
// ]

// const itemLessThanSix = items.some((item) => {
//     return item.price < 6
// })

// console.log(itemLessThanSix)

// // Explanation

// let inexpensive = false

// for (let itemPrice of items) {
//     if (itemPrice.price < 6) {
//         inexpensive = true
//     }
// }

// console.log(inexpensive)

// // //////////////////////////


// EVERY

// const items = [
//         {name: 'Bike', price: 100 },
//         {name: 'TV', price: 200 },
//         {name: 'Album', price: 10 },
//         {name: 'Book', price: 5 },
//         {name: 'Phone', price: 500 },
//         {name: 'Computer', price: 1000 },
//         {name: 'Keyboard', price: 25 }
//     ]
    
//     const itemLessThanOneThousandOne = items.every((item) => {
//         return item.price <= 1000
//     })
    
//     console.log(itemLessThanOneThousandOne)
    
//     // Explanation
    
//     let inexpensive = []
    
//     for (let itemPrice of items) {

//         if (itemPrice.price <= 1000) {
//             inexpensive.push(itemPrice.price)
//         }

        
//     }

//     if (inexpensive.length === items.length) {
//         inexpensive = true
//     } else {
//         inexpensive = false
//     }
    
//     console.log(inexpensive)

    // Logic here:

    // 1. I loop through all the numbers in an array and if they are less than or equal to a thousand, i add them to an array.
    // 2. In order to check if ALL numbers are less or equal to 1000, the length of items array will have to equal to the amount of numbers
    // pushed into the new array. If there are 7 numbers in items array and all 7 got pushed into the new array, that means 
    // "all 7 numbers OR EVERY NUMBER" met the criteria, in this case being equal to or less than 1000.

    // /////////////////////////////////////////


    // REDUCE METHOD

//     const items = [
//                 {name: 'Bike', price: 100 },
//                 {name: 'TV', price: 200 },
//                 {name: 'Album', price: 10 },
//                 {name: 'Book', price: 5 },
//                 {name: 'Phone', price: 500 },
//                 {name: 'Computer', price: 1000 },
//                 {name: 'Keyboard', price: 25 }
//             ]

// const totalPriceForAllItems = items.reduce((currentTotal, itemprice) => {
// return itemprice.price + currentTotal
// }, 0)


// console.log(totalPriceForAllItems)

// // Explanation
// let totalsum = 0;

// for (let i = 0; i < items.length; i++) {
//     totalsum += items[i].price
// }

// console.log(totalsum)

// // //////////////////////////////////////////////////////////

// INCLUDES METHOD

// const myArray = [1, 2, 4, 5, 6]

// const includesFive = myArray.includes(5)

// console.log(includesFive)

// // Explanation

// let isTrue = false;

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
//     if (myArray[i] === 5) {
//         isTrue = true;
//     }
   
// }

// console.log(isTrue)




// findIndex METHOD


// const items = [
//         {name: 'Bike', price: 100 },
//         {name: 'TV', price: 200 },
//         {name: 'Album', price: 10 },
//         {name: 'Book', price: 5 },
//         {name: 'Phone', price: 500 },
//         {name: 'Computer', price: 1000 },
//         {name: 'Keyboard', price: 25 }
//     ]

//     const computer = items.findIndex((pc) => {
//         return pc.name === 'Computer'
//     })

//     // console.log(computer)


//     // Explanation

// let myIndex = 0

//  for (let i = 0; i < items.length; i++) {
//     if (items[i].name === 'Computer') {
//         myIndex = i
//     }
//  }

//  console.log(myIndex)'


// // IndexOF Method


// const names = ['Alex', 'Nikita', 'Max', 'Maria', 'Nikita']

// // console.log(names.indexOf('Nikita'))
// // console.log(names.lastIndexOf('Nikita'))

// // Explanation

// let myIndexOf = []

// for (let i = 0; i < names.length; i++) {
// if (names[i] === 'Nikita') {
//     myIndexOf.push(i)
// }
// }


// console.log(myIndexOf)

// // Why when you make it myIndexOf = i, it shows 4 as index and not 1?????????