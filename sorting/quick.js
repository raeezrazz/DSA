function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [3, 4, 6, 1, 33, 9, 2, 8, 214, 56, 875, 133];
console.log(quickSort(arr));

const arr2 = [3, 4, 6, 1, 33, 9, 2, 8, 214, 56, 875, 133,352,3,4,6];
console.log(quickSort(arr2));



// let arr=[7,54,52,635,663,773,6,,6,45,743,54,7,4365,65,63,432]

function quick(arr){
    if(arr.length <=1){
        return arr
    }

    const pivot =arr[0]
    let left = []
    let right =[]

    for(let i =1 ; i < arr.length ; i++){
        if(arr[i]< pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }

    }
    return [...quick(left),pivot,...quick(right)]
}

console.log(quick(arr))