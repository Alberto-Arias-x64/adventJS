// In the toy factory of the North Pole, each toy has a unique identification number.

// However, due to an error in the toy machine, some numbers have been assigned to more than one toy.

// Find the first identification number that has been repeated, where the second occurrence has the smallest index!

// In other words, if there is more than one repeated number, you must return the number whose second occurrence appears first in the list. 
// If there are no repeated numbers, return -1.

// const giftIds = [2, 1, 3, 5, 3, 2]
// const firstRepeatedId = findFirstRepeated(giftIds)
// console.log(firstRepeatedId) // 3
// // Even though 2 and 3 are repeated
// // 3 appears second time first

// const giftIds2 = [1, 2, 3, 4]
// const firstRepeatedId2 = findFirstRepeated(giftIds2)
// console.log(firstRepeatedId2) // -1
// // It is -1 since no number is repeated

// const giftIds3 = [5, 1, 5, 1]
// const firstRepeatedId3 = findFirstRepeated(giftIds3)
// console.log(firstRepeatedId3) // 5

function findFirstRepeated(gifts = []) {
    if (gifts.length === 0) return -1
    const repeatedArray = []
    for (let index = 0; index < gifts.length; index++) {
        for (let index_2 = index + 1; index_2 < gifts.length; index_2++) {
            if (gifts[index] === gifts[index_2]) repeatedArray.push([index_2, gifts[index_2]])
        }
    }
    if (repeatedArray.length === 0) return -1
    const sortArray = repeatedArray.sort((a,b) => a[0] - b[0])
    return sortArray[0][1]
}

console.log(findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7]))