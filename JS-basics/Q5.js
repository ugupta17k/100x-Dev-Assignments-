//Flatten object of arrays into one array
//["apple", "banana", "carrot", "pea"]

const obj = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

function FlattenObj(){
    let flatten = [];
    for(let i = 0; i<obj.fruits.length; i++ ){
        flatten.push(obj.fruits[i])
    }
    for(let i = 0; i<obj.veggies.length; i++ ){
        flatten.push(obj.veggies[i])
    }
    return flatten;
}
let ans = FlattenObj(obj)
console.log(ans);

