// let arr = [3,4,6,1,33,9,2,8,214,56,875,133]

// function bubble(arr){
//     for(let i = 0 ; i < arr.length  ; i++){
//         for(let j = 0 ; j < arr.length -1-i ; j ++){
//             if(arr[j]>arr[j+1]){
//                 tem = arr[j]
//                 arr[j]= arr[j+1]
//                 arr[j+1] = tem
//             }
//         }
//     }
//     return arr
// }

// console.log(bubble(arr))



// practicing

let arr =[4,52,7,7,225,2656,265425,524,4,454,543,3]

function bubbleSort(arr){
    for(let i =0; i < arr.length -1 ; i ++){
        for(let j = 0 ; j < arr.length -i-1; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}
console.log(bubbleSort(arr))

function bubble(arr){
    for(let i = 0 ; i < arr.length ; i ++){
        for (let j= 0 ; j < arr.length -i -1; i ++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}