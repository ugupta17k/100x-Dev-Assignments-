//Find student with highest average mark
// A
const obj = { A: [80, 90], B: [70, 75, 85] }



let AverageA = (obj.A[0] + obj.A[1]) / 2
let AverageB = (obj.B[0] + obj.B[1] + obj.B[2]) / 3
function Average(AverageA, AverageB) {
    if(AverageA > AverageB) {
        return "A";
    }
    else return "B";
}

let ans = Average(AverageA, AverageB);
console.log(ans);
