//Filter object by values > 50
//{ b: 60, d: 90 }

const obj = { a: 20, b: 60, c: 40, d: 90 }

function filterObj(obj){
    let filter = {}
    for(let key in obj){
        if(obj[key] > 50){
            filter[key] = obj[key]
        }
    }
    return filter
}
let ans = filterObj(obj)
console.log(ans);
