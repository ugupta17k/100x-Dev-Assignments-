const arr = ["apple", "banana", "apple", "orange", "banana", "apple"]

let duplicatArr = {
    apple: 0,
    banana: 0,
    orange: 0,
}

function CountOccurences(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "apple") {
            duplicatArr.apple = duplicatArr.apple + 1
        }
        else if (arr[i] == "banana"){
            duplicatArr.banana = duplicatArr.banana + 1
        }
        else if (arr[i] == "orange"){
            duplicatArr.orange = duplicatArr.orange + 1
        }
    }
    return duplicatArr
}

let ans = CountOccurences(arr)
console.log(ans);
