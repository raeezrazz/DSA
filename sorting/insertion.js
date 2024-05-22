// let arr = [3,4,6,1,33,9,2,8,214,56,875,133]


// function insertion(arr){
//     for(let i =0 ; i < arr.length ; i ++){
//         let curr = arr[i]
//         let j = i -1
//         while( j >= 0 &&arr[j]> curr){ 
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] =curr
       
//     }
//     return arr
// }
// console.log(insertion(arr));




let arr = [13,3242,45,56476,87687,84,635,4,667,67346,4,252,435]

// function insertion(arr){
//     for(let i =0 ; i < arr.length ; i++){
//         let curr =arr[i]
//         let j = i-1
//         while(j>=0 && arr[j]>curr){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=curr
//     }
//     return arr
// }

// console.log(insertion(arr))


function insertion(arr){
    for(let i =0 ; i < arr.length ; i ++){
        let curr =arr[i]
        let j = i-1
        while(i>=0 && arr[j]>curr){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=curr
    }
    return arr
}

console.log(insertion(arr))