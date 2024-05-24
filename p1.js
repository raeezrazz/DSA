const arr = [5,2,34,56326,57,735,26,2,5245,5,5,25,5,252,5]

// function bubble(arr){
//     for(let i = 0 ; i < arr.length ; i ++){
//         for(let j = 0 ; j < arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp =arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }

// console.log(bubble(arr))

// function insertion(arr){
//     for(let i =0 ;i<arr.length ; i ++ ){
//         let curr = arr[i]
//         let j =i-1
//         while(j>=0 && arr[j]>curr){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=curr
//     }
//     return arr
// }
// console.log(insertion(arr))



/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

function merge(arr){
    if(arr.length <=1){
        return arr
    }

    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0,middle)
    let right =arr.slice(middle)

    return sort(merge(left),merge(right))
}

function sort(left,right){
    let i =0 
    let j =0 
    const sortArray =[]
    while(i<left.length &&j<right.length){
        if(left[i]<right[j]){
            sortArray.push(left[i])
            i++
                
        }else{
                sortArray.push(right[j])
                j++
            }
        }
        while(i<left.length){
            sortArray.push(left[i])
            i++
        }
        while(j<right.length){
            sortArray.push(right[i])
            j++


        }
        return sortArray
    }

    console.log(merge(arr))




function quick(arr){
    if(arr.length <=1){
        return arr
    }
    let pivot = arr[0]
    let left =[]
    let right =[]
    for(let i = 1 ; i < arr.length; i ++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }

    }
    return [...quick(left),pivot,...quick(right)]
}
console.log(quick(arr))