//Merge Sorted Array

let one = [0,0,0,0,1,2,3,4,5]
let two = [0,8,9,8]
let n = two.length
let m = one.length 

function merge(one1, m, two2, n){
    for(let i = m, j = 0; j < n ; i++, j++){
      one1[i] = two2[j]
    }

    // slice
    let j = 0
    one1.sort((a,b) => a - b )
    for(let i = 0; i < one1.length + 1; i++){
      one1[i] === 0 ? j++ : null
    }
    one = one1.slice(j, one1.length) 

    // splice
    one.sort((a,b) => b - a )
    for(let i = 0; i < one.length + 1; i++){
      one[i] === 0 ? one = one.splice(0,i): null
    }
  }
    
  this.merge(one, m, two, n)
  console.log("Merge Sorted Array final result", one)
