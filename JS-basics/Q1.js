const obj = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }

function Sum(data){
    let objSum = {
        food:0,
        travel:0,
        bills:0,
    };
    for(let i = 0; i<data.food.length; i++){
        objSum.food =  objSum.food + data.food[i]
    }
    for(let i = 0; i<data.travel.length; i++){
        objSum.travel =  objSum.food + data.food[i]
    }
    for(let i = 0; i<data.bills.length; i++){
        objSum.bills =  objSum.food + data.food[i]
    }
    return objSum
}

let ans = Sum(obj)
console.log(ans);
