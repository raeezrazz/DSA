// class Stack{
//     constructor(){
//         this.item = []
//     }
//     push(val){
//         this.item.push(val)
//     }
//     pop(){

//         if(this.isEmpty()){
//             console.log("stack is empty")
//         }else{
//         return this.item.pop()
//         }
//     }
//     peek(){
//         if(this.isEmpty()){
//             console.log("stack is empty")
//         }else{
//         return this.item[this.items.length-1]
//         }
//     }
//     print(){
        
//         for(let i = 0 ; i < this.item.length ;  i++){
//           console.log(this.item[i])  
//         }
//     }
//     isEmpty(){
//         return this.item.length ===0
//     }
//     size(){
//         return this.item.length
//     }
//     clear(){
//         this.item=[]
//     }
// }
// const stack = new Stack()
// stack.push(45)
// stack.push(4)
// stack.push(5)
// stack.print()
// console.log("...........")
// stack.pop()
// stack.print()



/////////////////////// USING LINKED LIST //////////////////////////

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
        
//     }
// }
//     class Stack {
//         constructor(){
//             this.top = null
//             this.size = 0
//         }

//         push(val){
//             const node = new Node()
//             if(this.size ===0){
//                 this.top = node
//             }else{
//                 this.top.next = node
//                 this.top = node
//             }
//             this.size++
//         }
//         pop(){
//             this.
//         }
//     }


/////////////////////// QUEUE //////////////////////////


/////////////////////// 5 Types Of Sorting //////////////////////////

// function bubble(arr){
//     for(let i =0 ; i < arr.length ; i ++){
//         for(let j =0 ; j < arr.length-i-1 ; j ++){
//             if(arr[j]>arr[j+1] ){
//                 let temp = arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }
// console.log(bubble([4,452,5256,53,6,52,56,4,25,25,2]))


// function insertion(arr){
//     for(let i = 0 ; i < arr.length ; i++){
//         let curr = arr[i]
//         let j = i-1
//         while(j>=0 && arr[j]>curr){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=curr
//     }
//     return arr
// }
// console.log(insertion([2334,3,45,56345,454,5414,3,14,114,4]))



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
//     let i = 0
//     let j = 0
//     const sortArray=[]
//     while(i<left.length && j <right.length){
//         if(left[i]<right[j]){
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
// console.log(merge([2,45425,25,642542,5,4455,4,2,544,3,2]))


// function quick(arr){
//     if(arr.length <=1)return arr

//     let pivot=arr[0]
//     let left = []
//     let right = []
//     for(let i = 1 ; i < arr.length ; i ++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quick(left),pivot,...quick(right)]
// }

// console.log(quick([4,2,66,522,42,566,73,52]))


class HashTable{
    constructor(size){
        this.items= new Array(size)
        this.size = size
    }

    hash(key){
        let hashVal = 0
        for(let i = 0 ; i < key.length ; i ++){
            hashVal += key.charCodeAt[0]
        }
        return hashVal %this.size
    }

    set(key,val){
        let index = this.hash(key)
        const bucket = this.items[index]
        if(!bucket){
            this.items[index]= [[key,val]]
        }else{
            let sameItem = bucket.find(item => item[0]==key )
            if(sameItem){
                sameItem[1]=val
            }else{
                bucket.push([key,val])
            }
        }
    }
    get(key){
        let index = this.hash(key)
        const bucket = this.items[index]
        if(bucket){
            let sameItem = bucket.find(item=>item[0]==key)
            if(sameItem){
                return sameItem[1]
            }
        }else{
            return undefined
        }
    }
    print(){
        for(let i = 0 ; i < this.size ; i ++){
            if(this.items[i]){
                console.log(i,"value:",this.items[i])
            }
        }
    }
}
const hash = new HashTable()

hash.set("hi","rahees")
hash.set("kooi","shalik")
hash.set("m","jaz")
hash.print()