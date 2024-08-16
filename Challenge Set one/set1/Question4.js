function firstPalindrome(words) {
    for (let element of words){
        let reversedElement=element.split("").reverse().join("")
        return element
    }
}
let someArray=["ada","car","kayak","flower"]
let someArray2=["a","b","c"]
// let j=someArray2.join("")
// let q="car".split("").reverse().join(""))
firstPalindrome(someArray)
