const myArray = [1, 10, 3, 6, 'ArrayElement'];

/**
 * 1. Log 3 and 6 elements from myArray to console
 * Please, use more than on solution
 */

console.log(`3: ${myArray[2]}`);
console.log(`6: ${myArray.at(-1)}`);

/**
 *  2. Log type of each element
 */

myArray.forEach((item) => {
    console.log(typeof item);
});

/**
 *  3. Check if all elements in array is Number
 *  Should return Boolean
 */

const isNumber = myArray.every(Boolean);

console.log({
    isNumber,
});

/**
 * 4. Check if at least one element is bigger than 5
 * Should return Boolean
 */

const isBiggerThanFive = myArray.some(num => num > 5);

console.log({
    isBiggerThanFive,
});

/**
 * 5. Create another variable that will include only elements that bigger than 5
 * Should return another Array
 */

const elementsBiggerThanFive = myArray.filter(el => el > 5);

console.log({
    elementsBiggerThanFive,
});

/**
 * 6. Multiply numbers of Array by 2
 * Should return another Array
 */

const multiplied = myArray.filter(Number).map(num => num * 2);

console.log({
    multiplied,
});

/**
 * 7. Calculate array sum
 */

const sum = myArray.filter(num => typeof num === 'number').reduce((a,b) => a + b, 0);

console.log({
    sum,
});

/**
 * 8. Sort array in ascending and descending order
 */

const asc = [...myArray].sort((a,b) => a - b);
const desc = [...asc].reverse();

console.log({
    asc,
    desc,
});