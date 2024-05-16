let arr = [3,4,6,1,33,9,2,8,214,56,875,133]


function insertion(arr){
    for(let i =0 ; i < arr.length ; i ++){
        let curr = arr[i]
        let j = i -1
        while( j >= 0 &&arr[j]> curr){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] =curr
       
    }
    return arr
}
console.log(insertion(arr));