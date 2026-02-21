//Swap keys and values of object
const obj = { a: "x", b: "y", c: "z" }

function swap(obj) {
    let swapresult = {};
    for (let key in obj) {
        swapresult[obj[key]] = key;
    }
    return swapresult;
}

let ans = swap(obj);
console.log(ans);
