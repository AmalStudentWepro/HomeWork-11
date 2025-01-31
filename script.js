// дз1
let nums = [1, 2, 5, 6, 22, 44, 66, 3, 4, 17, 22, 444]
let suma = nums.reduce((total, num) => total + num, 0)

console.log("Сумма:", suma)

// дз2
let arr = ["hello", 1234, "", false, NaN, 123, true, " ", null, "29.01.1992"]

let string = []
let number = []
let object = []
let boolean = []

for (let item of arr) {
  if (typeof item === "string") {
    string.push(item)
  } else if (typeof item === "number" && !isNaN(item)) {
    number.push(item)
  } else if (typeof item === "boolean") {
    boolean.push(item)
  } else {
    object.push(item)
  }
}

console.log(string)  
console.log(number) 
console.log(boolean)
console.log(object) 
