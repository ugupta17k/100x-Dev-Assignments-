//Group people by city
//{ Delhi: ["A", "C"], Mumbai: ["B"] }

const arr = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]

function GroupPeople(arr){
    let grouped = {
        Delhi :[],
        Mumbai : [],
    }
    for(let i = 0; i<arr.length ; i++){
        if(arr[i].city == "Delhi"){
            grouped.Delhi.push(arr[i].name)
        }
        if(arr[i].city == "Mumbai"){
            grouped.Mumbai.push(arr[i].name)
        }
    }
    return grouped;
}
let ans = GroupPeople(arr)
console.log(ans);
