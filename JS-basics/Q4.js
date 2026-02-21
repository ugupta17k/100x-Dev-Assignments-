//Find the largest value key
const obj = { a: 10, b: 50, c: 20 }

function LargestValueKey() {
    let greaterValueKey = "";
    for (let key in obj) {
        if (obj.a > obj.b && obj.a > obj.c) {
            greaterValueKey = "a"
        }
        else if (obj.b > obj.a && obj.b > obj.c) {
            greaterValueKey = "b"

        }
        else if (obj.c > obj.a && obj.c > obj.b) {
            greaterValueKey = "c"

        }
    }
    return greaterValueKey;
}

let ans = LargestValueKey(obj)
console.log(ans);
