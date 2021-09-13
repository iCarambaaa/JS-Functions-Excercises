/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

function sum(x, y) {
    let sum
    if (x !== y) {
        sum = x + y
    } else {
        sum = (x + y) * 3
    }
    console.log(sum)
    return sum
}

sum(1, 3)
console.log(sum)

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */

function check(x, y) {
    let check
    if ((x === 50) || (y === 50)) {
        check = true
        console.log(check)
        return check
    } else if (x + y === 50) {
        check = true
        console.log(check)
        return check
    } else {
        check = false
        console.log(check)
        return check
    }
}
check(24, 24)

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

function removeChar(pos, str) {
    let string = str
    // string = string.substr(pos, 1)
    return string.substr(0, pos) + string.substr(pos + 1, string.length)
}

console.log(removeChar(0, "hello how are you doing?"))

/* 4. Create a function to find and return the largest of three given integers. */

function largestInt(x, y, z) {
    let largest = Math.max(x, y, z)
    return largest
}

console.log(largestInt(3, 6, 1))

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100.
    Return `true` if they do, return `false` if one (or both) don't. */

function rangeCheck(x, y) {
    let check
    if (((x <= 60 && x >= 50) || (x <= 100 && x >= 70)) && ((y <= 60 && y >= 50) || (y <= 100 && y >= 70))) {
        check = true
        return check
    } else {
        check = false
        return check
    }
}

console.log(rangeCheck(99, 100))

/* 6. Create a function to create a new string composed of a specified number of copies of a given string.
    Pass the string and the number of copies as parameters. */

function copyStr(str, num) {
    let newStr = ""
    let i = 0
    while (i < num) {
        newStr = newStr.concat(str)
        i++
    }
    return newStr
}

console.log(copyStr("helloWorld", 4))

/* 7. Create a function to display the city name if the string begins with "Los" or "New".
    Pass the city name as a parameter. Return `false` if they start with a different string. */

function cityName(name) {
    if ((name.startsWith("Los")) || (name.startsWith("New"))) {
        return name
    } else {
        return false
    }
}

console.log(cityName("New York"))

/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements.
    Pass the array as a parameter. */

function arraySum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}

console.log(arraySum([1, 2, 7]))

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3.
    Return `true` if it does, `false` if it doesn't. */

function oneOrThree(array) {
    if ((array.includes(1)) || (array.includes(3))) {
        return true
    } else {
        return false
    }
}

console.log(oneOrThree([1, 3]))

/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3.
    Return `true` if it doesn't, `false` if it does. */

function oneNorThree(array) {
    if (!(array.includes(1)) && !(array.includes(3))) {
        return true
    } else {
        return false
    }
}

console.log(oneNorThree([1, 3]))


/* 11. Create a function to find the longest string from a given array of strings.
    Pass the array as parameter and return the longest string. */

function longestStr(array) {
    let longest = ""

    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longest.length) {
            longest = array[i];
        }
    }
    return longest;
}

console.log(longestStr(["qwe", "asrgasgr", "öRLKGARGÖLJWrg"]))

/* 12. Create a function to find the types of a given angle:
  1. Acute angle â‡’ between 0 and 90 degrees. Return `acute`.
    2. Right angle â‡’ 90 degree. Return `right`
    3. Obtuse angle â‡’ between 90 and 180. Return `obtuse`
    4. Straight angle â‡’ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/



/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */


/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */


/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative.
    Return `true` if that's the case, return `false` if it's not. */


/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case.
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */


/* 17. Create a function to calculate the sum of two integers (passed as parameters).
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */


/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example:
    The number has 3 as a factor â‡’ return `Diego`
    The number has 5 as a factor â‡’ return `Riccardo`
    The number has 7 as a factor â‡’ return `Stefano`
    If the number does not have 3,5, or 7, return the original number.
    âš ï¸ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names.
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */


/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */