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

// function merge(arr){
//     if(arr.length <=1){
//         return arr
//     }

//     let middle = Math.floor(arr.length/2)
//     let left = arr.slice(0,middle)
//     let right =arr.slice(middle)

//     return sort(merge(left),merge(right))
// }

// function sort(left,right){
//     let i =0 
//     let j =0 
//     const sortArray =[]
//     while(i<left.length &&j<right.length){
//         if(left[i]<right[j]){
//             sortArray.push(left[i])
//             i++
                
//         }else{
//                 sortArray.push(right[j])
//                 j++
//             }
//         }
//         while(i<left.length){
//             sortArray.push(left[i])
//             i++
//         }
//         while(j<right.length){
//             sortArray.push(right[i])
//             j++


//         }
//         return sortArray
//     }

//     console.log(merge(arr))




// function quick(arr){
//     if(arr.length <=1){
//         return arr
//     }
//     let pivot = arr[0]
//     let left =[]
//     let right =[]
//     for(let i = 1 ; i < arr.length; i ++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }

//     }
//     return [...quick(left),pivot,...quick(right)]
// }
// console.log(quick(arr))

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// class hashtable{
//     constructor(size){
//         this.item = new Array(size)
//         this.size =size
//     }
//     hash(key){
//         let hashkey = key.toString()
//         let hashvalue = 0
//         for(let i =0 ; i < hashkey.length ; i ++){
//             hashvalue +=hashkey.charCodeAt(0)
//         }
//         return hashvalue % this.size
//     }
//     set(key,val){
//         const index = this.hash(key)
//         this.item[index] = val
//     }
//     get(key){
//         const index = this.hash(key)
//         return this.item[index]
//     }

//     print(){
//         for(let i = 0 ; i < this.item.length ; i ++){

//             if(this.item[i]){
//                 console.log(i,"value",this.item[i])
//             }
//         }
//     }
    
// }

// const hash = new hashtable(50)
// hash.set("hello","rahees")
// hash.set("print","shalik")
// let b = hash.get("hello")
// hash.print()
// console.log(b)




// class hashmap{
//     constructor(size){
//         this.item=new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let hashkey = key.toString()
//         let hashValue=0
//         for(let i =0 ; i < hashkey.length ; i ++){
//             hashValue +=hashkey.charCodeAt(0)
//         }
//         return hashValue % this.size
//     }
//     set(key,val){
//         const index = this.hash(key)
//         this.item[index]=val
//     }
//     get(key){
//         const index = this.hash(key)
//         return this.item[index]
//     }
//     print(){
//         for(let i =0; i < this.item.length ; i ++){
//             if(this.item[i]){
//                 console.log(i,"data is:",this.item[i])
//             }
//         }
//     }
// }
// const hash = new hashmap(50)

// hash.set("one","rahees")
// hash.set("two","akhil")
// const b = hash.get("two")
// console.log(b)
// hash.print()


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Stack {
    constructor(){
        this.item = []
    }

    push(element){
        this.item.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return "stack is empty"
        }else{
            return this.item.pop()
        }
    }
    display(){
        console.log(this.item)
    }
    isEmpty(){
        return this.item.length ===0
    }
}


const stack = new Stack()

stack.push("n")
stack.push("i")
stack.push("h")
stack.push("a")
stack.push("l")
stack.push("a")

stack.display()
console.log(stack.item.length)
let k=[]
while(stack.item.length >0){
    k.push(stack.pop())
}
console.log(k)
stack.display()
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class Que{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size =0
//     }

//     enqeue(data){
//         const node = new Node(data)
//         if(this.size===0){
//             this.head = node
//             this.tail = node
//         }else{
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }
//     deqeue(){
//         this.head = this.head.next
//         this.size--
//     }
//     peek(){
//         return this.tail.data
//     }
//     print(){
//         if(this.size===0){
//             console.log("que is empty")
//         }else{
//             let curr = this.head
//             for(let i = 0 ; i < this.size ; i ++){
//                 console.log(curr.data)
//                 curr =curr.next
//             }
//         }
//     }
// }
// const que = new Que()
// que.enqeue(10)
// que.enqeue(4)
// que.enqeue(6)
// que.enqeue(76)
// que.enqeue(89)

// que.print()
// console.log("fadjlkgakj")
// que.deqeue()
// que.deqeue()
// que.print()




// var isValid = function (s) {
//     let stack = []
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] == '{' || s[i] == '(' || s[i] == '[') {
//         stack.push(s[i])
//       } else if (s[i] == '}' && stack.length && stack[stack.length - 1] == '{') {
//         stack.pop()
//       } else if (s[i] == ')' && stack.length && stack[stack.length - 1] == '(') {
//         stack.pop()
//       } else if (s[i] == ']' && stack.length && stack[stack.length - 1] == '[') {
//         stack.pop()
//       } else {
//         return false
//       }
//     }
//     return stack.length === 0
//   }
  
  
//   console.log(isValid("()[]{}"))  //ANSWER
  
  






///////////////////////////////////////////////////////////////////////////////////////////////////////
// HASH TABLE POLLUTION

// class hashmap{
//     constructor(size){
//         this.item = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let hashkey = key.toString()
//         let hashVal = 0
//         for(let i = 0 ; i < key.length ; i ++){
//             hashVal +=  hashkey.charCodeAr(0
//                 )
//         }
//         return hashVal % this.size
//     }

//     set(key,val){

//         const index = this.hash(key)
//         const  bucket = this.item[index]
//         if(bucket){
//             const sameItem= bucket.find(item=>item[0]===key)
//             if(sameItem){
//                 sameItem[1]=val
//             }else{
//                 bucket.push([key,val])
//             }

//         }else{
//             this.item[index]=[[key,val]]
//         }
//     }
//     get(key){
//         const index = this.hash(key)
//         const bucket = this.item[index]
//         if(!bucket){
//             return "no data"
//         }else{

//         }
//     }
// }

/////////////////////////////////////////////////////////////////////////////////////////
// DUPLICATE ELEMENts FINDING USING MAP FUNCTION


const array =""

function duplicates(arr){
    const duplicateElements=[]
    const map = new Map()

    for(let i =0 ; i < arr.length ; i ++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1)
        }else{
            map.set(arr[i],1)
        }
    }
    for(const [num,val] of map){
       console.log(num,"count:",val)
    }
    return duplicateElements
}

duplicates(array)












