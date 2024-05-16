let arr = [3,4,6,1,33,9,2,8,214,56,875,133]

function bubble(arr){
    for(let i = 0 ; i < arr.length  ; i++){
        for(let j = 0 ; j < arr.length -1-i ; j ++){
            if(arr[j]>arr[j+1]){
                tem = arr[j]
                arr[j]= arr[j+1]
                arr[j+1] = tem
            }
        }
    }
    return arr
}

console.log(bubble(arr))