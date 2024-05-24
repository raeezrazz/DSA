// let arr = [3,4,6,1,33,9,2,8,214,56,875,133]

// function merge(arr){
//     if(arr.length <=1){
//         return arr
//     }

//     let middle = Math.floor(arr.length /2)
//     let left = arr.slice(0,middle)
//     let right = arr.slice(middle)

//     return sort(merge(left),merge(right))
// }
// function sort(left,right){
//     let sortArray =[]
//     let i =0 
//     let j =0
//     while( i < left.length && j< right.length){
//         if(left[i] < right[j]){
//             sortArray.push(left[i])
//             i++
//         }else{
//             sortArray.push(right[j])
//             j++
//         }
//     }
//     while(i< left.length){
//         sortArray.push(left[i])
//         i++
//     }
//     while(j<right.length){
//         sortArray.push(right[j])
//         j++
//     }
//     return sortArray
// }

// console.log(merge(arr))




// function merge(arr){

// if(arr.length <=1){
//     return arr
// }

//     let middle = Math.floor(arr.length/2)
//     let left = arr.slice(0,middle)
//     let right = arr.slice(middle)

//     return sort(merge(left),merge(right))
// }
// function sort(left,right){
//     let sortArray=[]
//     let i =0 
//     let j =0
//     while(i<left.length && j< right.length){
//         if(left[i] < right[j]){
//             sortArray.push(left[i])
//             i++
//         }else{
//             sortArray.push(right[j])
//             j++
//         }
//     }
//     while(i<left.length){
//         sortArray.push(left[i])
//         i++
//     }
//     while(j<right.length){
//         sortArray.push(right[j])
//         j++
//     }
//     return sortArray
// }

// console.log(merge([2,6,9,64,3,25,7,8,9,342,6547,87789,7965]))

