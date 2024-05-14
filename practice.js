
// // //   TWO SUM

// // // const arr = [6,7,8,4,5,1,0]
// // // const target = 10
// // // function twoSum(arr,target){

// // //     const s = new Set

// // // for(let i = 0 ; i < arr.length ; i ++){
// // //     let k = arr[i]
// // //     let remaining = target - k
// // //     if(s.has(remaining)){
// // //         return b =[k,remaining]
// // //     }else{
// // //         s.add(k)
// // //     }
// // // }
// // // }

// // // let result = twoSum(arr,target)
// // // console.log(result)




// // // PRACTICE 1

// // // const arr =[6,5,6,3,7,9,5,6,2,6]
// // // function replaceToEnd(arr,target){
// // //     let j = arr.length-1

// // //     for(let i = 0 ; i < arr.length ; i++ ){
// // //         if(i==j){
// // //             break
// // //         }
// // //         if(arr[i]===target){
// // //             let temp =arr[j]
// // //             arr[j]=arr[i]
// // //             arr[i]=temp
// // //             j--
// // //             i--
// // //         }
// // //     }
// // //     return arr
// // // }
// // // let target =6
// // // const result = replaceToEnd(arr,target)
// // // console.log(result)



// // // LINKED LIST

// // // SETTING VALUES AND PRINTING VALUES IN LINKED LIST

// // // class Node{
// // //     constructor(value){
// // //         this.value =value
// // //         this.next = null
// // //     }
// // // }

// // // class LinkedList{
// // //     constructor(){
// // //         this.head =null
// // //         this.size = 0
// // //     }
// // //     isEmpty(){
// // //         return this.size ===0
// // //     }
// // //     getSize(){
// // //         return this.size
// // //     }
// // //     addNode(value){
// // //         const node = new Node(value)
// // //         if(this.isEmpty()){
// // //             this.head = node
// // //         }else{
// // //             node.next = this.head
// // //             this.head = node
// // //         }
// // //         this.size ++
// // //     }
// // //     print(){
// // //         if(this.isEmpty()){
// // //             console.log('List is Empty');
// // //         }else{
// // //             let curr = this.head
// // //             let listValue = ''
// // //             while(curr){
// // //                 listValue +=`${curr.value} `
// // //                 curr =curr.next
// // //             }
// // //             console.log(listValue)
// // //         }
// // //     }
// // // }

// // // const list = new LinkedList()
// // // console.log("list is empty " ,list.isEmpty())
// // // console.log("sizw",list.getSize())
// // // list.print()
// // // list.addNode(10)
// // // list.print()

// // // list.addNode(20)
// // // list.print()

// // // list.addNode(103)
// // // list.print()




// // // APPEND VALUES



// // // class Node{
// // //     constructor(value){
// // //         this.value =value
// // //         this.next = null
// // //     }
// // // }

// // // class LinkedList{
// // //     constructor(){
// // //         this.head =null
// // //         this.size = 0
// // //     }
// // //     isEmpty(){
// // //         return this.size ===0
// // //     }
// // //     getSize(){
// // //         return this.size
// // //     }
// // //     addNode(value){
// // //         const node = new Node(value)
// // //         if(this.isEmpty()){
// // //             this.head = node
// // //         }else{
// // //             node.next = this.head
// // //             this.head = node
// // //         }
// // //         this.size ++
// // //     }

// // //     append(value){
// // //         const node = new Node(value)
// // //         if(this.isEmpty()){
// // //             this.head = node
// // //         }else{
// // //             let prev = this.head
// // //             while(prev.next){
// // //                 prev =prev.next
// // //             }
// // //             prev.next = node
// // //         }
// // //         this.size ++

// // //     }


// // //     print(){
// // //         if(this.isEmpty()){
// // //             console.log('List is Empty');
// // //         }else{
// // //             let curr = this.head
// // //             let listValue = ''
// // //             while(curr){
// // //                 listValue +=`${curr.value} `
// // //                 curr =curr.next
// // //             }
// // //             console.log(listValue)
// // //         }
// // //     }
// // // }

// // // const list = new LinkedList()
// // // console.log("list is empty " ,list.isEmpty())
// // // console.log("sizw",list.getSize())
// // // list.print()
// // // list.addNode(10)
// // // list.print()

// // // list.append(20)
// // // list.print()

// // // list.addNode(103)
// // // list.append(103)

// // // list.print()



// // // INSERTING VALUES IN BETWEEN NODES




// // // class Node{
// // //     constructor(value){
// // //         this.value =value
// // //         this.next = null
// // //     }
// // // }

// // // class LinkedList{
// // //     constructor(){
// // //         this.head =null
// // //         this.size = 0
// // //     }
// // //     isEmpty(){
// // //         return this.size ===0
// // //     }
// // //     getSize(){
// // //         return this.size
// // //     }
// // //     addNode(value){
// // //         const node = new Node(value)
// // //         if(this.isEmpty()){
// // //             this.head = node
// // //         }else{
// // //             node.next = this.head
// // //             this.head = node
// // //         }
// // //         this.size ++
// // //     }

// // //     append(value){
// // //         const node = new Node(value)
// // //         if(this.isEmpty()){
// // //             this.head = node
// // //         }else{
// // //             let prev = this.head
// // //             while(prev.next){
// // //                 prev =prev.next
// // //             }
// // //             prev.next = node
// // //         }
// // //         this.size ++

// // //     }

// // //     insert(value,index){
// // //         if(index<0 || index > this.size){
// // //             return 
// // //         }
// // //         if(index===0){
// // //             console.log("efso")
// // //             this.addNode(value)
// // //         }else{
// // //             const node = new Node(value)
// // //             let prev =this.head
// // //             for(let i =0;i<index-1 ; i ++){
// // //                 prev = prev.next
// // //             }
// // //             node.next = prev.next
// // //             prev.next = node
// // //             this.size++
            
// // //         }
// // //     }

// // //     remove(index){
// // //         if(index < 0 || index >= this.size ){
// // //             console.log("List is Empty")
// // //             return null
// // //         }
// // //         let removedNode 
// // //         if(index ===0){
// // //             removedNode =this.head
// // //             this.head  =this.head.next
// // //         }else{
// // //             let prev = this.head
// // //             for( let i =0 ; i < index -1; i ++){
// // //                 prev = prev.next
// // //             }
// // //             removedNode = prev.next
// // //             prev.next = removedNode.next
// // //         }
// // //         this.size--
// // //         return removedNode.value

// // //     }

// // //     // REMOVE VALUE

// // //     removeValue(value){

// // //         if(this.isEmpty()){

// // //             return null
// // //         }
// // //         if(this.head.value ===value){

// // //             this.head = this.head.next
// // //             this.size--
// // //             return value
// // //         }else{
// // //             let prev = this.head
// // //             while(prev.next && prev.next.value !== value){
// // //                 prev =prev.next
// // //             }

// // //             if(prev.next){
// // //                 const removedNode = prev.next
// // //                 prev.next = removedNode.next
// // //                 this.size --
// // //                 return value
// // //             }
// // //             return null
// // //           }
// // //         }
// // //         search(value){
// // //             if(this.isEmpty()){
// // //                 return -1
// // //             }
// // //              let i =0 ;
// // //              let curr =this.head
// // //              while(curr){
// // //                 if(curr.value === value){
// // //                     return i
// // //              }
// // //                 curr = curr.next
// // //                 i++
// // //              }
// // //              return -1
// // //         }

// // //         reverse(){
// // //             let prev =null
// // //             let curr = this.head
// // //             while(curr){
// // //                 let next = curr.next
// // //                 curr.next = prev
// // //                 prev=curr
// // //                 curr=next                
// // //             }
// // //             this.head = prev
// // //         }

// // //     print(){
// // //         if(this.isEmpty()){
// // //             console.log('List is Empty');
// // //         }else{
// // //             let curr = this.head
// // //             let listValue = ''
// // //             while(curr){
// // //                 listValue +=`${curr.value} `
// // //                 curr =curr.next
// // //             }
// // //             console.log(listValue)
// // //         }
// // //     }
// // // }

// // // const list = new LinkedList()
// // // console.log("list is empty " ,list.isEmpty())
// // // console.log("sizw",list.getSize())
// // // list.print()
// // // list.insert(20,0)
// // // list.print()

// // // list.insert(100,0)
// // // list.insert(110,1)

// // // list.print()
// // // console.log(list.search(20))

// // // list.print()
// // // list.reverse()
// // // list.print()




// // // RECURTION

// // // FACTORIAL

// // // function factorial(n){
// // //     if(n<=1){
// // //         return 1
// // //     }else{
// // //         return n * factorial(n-1)
// // //     }
// // // }

// // // console.log(factorial(5))



// // // fibinacci

// // // function fibinacci(n){
// // //     if(n <=1){
// // //         return 1
// // //     }else{
// // //         return n+fibinacci(n-1)
// // //     }
// // // }
// // // console.log(fibinacci(10))


// BINARY SEARCH


// function binarySearch(arr,target){
//     let left = 0
//     let right = arr.length -1

//     while(left <= right){
//         let middle = Math.floor((left+right)/2)
//         if(target === arr[middle]){
//             return middle
//         }
//         if(target < arr[middle]){
//             right =middle -1

//         }else{
//             left =middle +1
//         }
//     }
//     return -1
// }

//  let arr = [2,3,5,6,7,8,9,12,14,15]

// console.log(binarySearch(arr,6))

// // // function binary(arr,target){
// // //     let left =0
// // //     let right = arr.length -1

// // //     while(left <=right){
// // //         let middle = Math.floor((right +left )/2)
// // //         if(target === arr[middle]){
// // //             return middle
// // //         }
// // //         if(target < arr[middle]){
// // //             right =middle-1
// // //         }else{
// // //             left =middle +1
// // //         }
// // //     }
// // //     return -1
// // // }
// // // let arr = [2,3,5,6,7,8,9,12,14,15]

// // // console.log(binary(arr,15))  
// // // BIG O  = o(logn)




// // // //  BINARY SEARCH USING RECURTION
// function calling(arr,target){
//     return binarySearch(arr,target,0,arr.length)

// function binarySearch(arr,target,left,right){
//     if(left>right){
//         return -1
//     }

//     let middle = Math.floor((left+right)/2)
//     if(arr[middle]=== target){
//         return middle
//     }else{
//         if(arr[middle] > target){
//             return binarySearch(arr,target,left,middle -1)
//         }else{
//             return binarySearch(arr,target,middle+1,right)
//         }
//     }
// }
// }
// let arr = [1,2,3,4,5,6,7,8,9] 
 
// let res = calling(arr,4) 
//  console.log(res)




// // // JAGGED ARRAY TO NORMAL ARRAY

// // // function jagged (arr){
// // //     if(arr.length <= 1){
// // //         return arr
// // //     }

// // //     let arr1 =[]

// // //     for(let i =0 ; i < arr.length ;i ++){
// // //         if(Array.isArray(arr[i])){
// // //             arr1=arr1.concat(jagged(arr[i]))
// // //         }else{
// // //             arr1.push(arr[i])
// // //         }
// // //     }
// // //     return arr1
// // // }

// let arr = [1,2,3,4,5,6,[4,5,[8,[9,[9]]]]]

// let result = jagged(arr)
// console.log(result)


// function jagged(arr){
//     if(arr.length <= 1){
//         return arr
//     }
//     let arr1=[]
//     for(let  i =0 ; i < arr.length ; i ++){
//         if(Array.isArray(arr[i])){
//             arr1=arr1.concat(jagged(arr[i]))
//         }else{
//             arr1.push(arr[i])
//         }
//     }
//     return arr1
// }





// // // function recursion(arr,target){
// // //     return binarySearch(arr,target,0,arr.length)

// // //     function binarySearch(arr,target,left,right){
// // //         let middle= Math.floor((left+right)/2)
// // //         if(left>right){
// // //             return -1
// // //         }

// // //         if(target === arr[middle]){
// // //             return arr[middle]
// // //         }else{
// // //             if(target <arr[middle]){
// // //                 return binarySearch(arr,target,left,middle-1)
// // //             }else{
// // //                 return binarySearch(arr,target,middle+1,right)
// // //             }
// // //         }
// // //         return -1
// // //     }
// // // }



// // // let a=[1,2,3,4,6,11,7,8,9,0,33]
// // // let result =recursion(a,6)
// // // console.log(result)

// // // function recursion (arr,tar) { 
// // //     return center(arr,tar,0,arr.length) 
     
// // // } 
 
// // // function center(arr,tar,left,right) { 
 
// // //     if(left > right) { 
// // //         return -1 
// // //     } 
 
// // //     let middle = Math.floor((left+right) / 2) 
 
// // //     if(arr[middle] === tar) { 
// // //         return middle 
// // //     } else { 
// // //         if(arr[middle] > tar) { 
// // //             return center(arr,tar,left,middle-1) 
// // //         } else { 
// // //             return center(arr,tar,middle+1,right) 
// // //         } 
// // //     } 
 
// // // } 
 
 
 
// // // let arr = [1,2,3,4,5,6,7,8,9] 
 
// // // let res = recursion(arr,4) 
 
// // // console.log(res)


// STRING REVERSSING USING RECURTION

function reverseString(str) {
    if (str.length <= 1) {
        return str;
    }
    
    return reverseString(str.substring(1)) + str.charAt(0);
}
let st2= "hashim";
console.log(st2.substring(2))
let originalString = "Hello, World!";
let reversedString = reverseString(originalString);
console.log(reversedString);


function reversing(str){
    if(str.length <=1){
        return str
    }

    return reversing(str.substring(1))+str.charAt(0)
}

let str ="hashim"
console.log(reversing(str))


// // class Node{
// //     constructor(value){
// //         this.value =value
// //         this.next = null
// //     }
// // }

// // class LinkedList{
// //     constructor(){
// //         this.head = null
// //         this.size = 0
// //     }
// //     isEmpty(){
// //         return this.size === 0
// //     }

// //     getSize(){
// //         return this.size
// //     }

// //     prepend(value){
// //         const node = new Node(value)
// //         if(this.isEmpty()){
// //             this.head = node
// //         }else{
// //             node.next =this.head
// //             this.head =node
// //         }
// //         this.size++
// //     }

// //     append(value){
// //         const node = new Node(value)

// //         if(this.isEmpty){
// //             this.append(value)
// //         }else{
// //             let prev =  this.head
// //             while(prev.next){
// //                 prev = prev.next
// //             }
// //             prev.next = node
// //         }
// //         this.size ++
// //     }

// //     insert(value,index){
// //         // const node = new Node(value)
// //         if(index < 0 || index > this.size)
// //         if(index ==0){
// //            this.prepend(value)
// //         }else{
// //             const node = new Node(value)
// //             let prev = this.head 
// //             for(let i = 1 ; i < index  ; i ++){
// //                 prev = prev.next
// //             }
// //             node.next = prev.next
// //             prev.next = node
// //             this.size++
// //         }
        
// //     }
// //     revove(value,index){
// //         if(index < 0 ||index>this.size){
// //             return
// //         }
// //         if(index===0){
// //             let temp = this.head
// //             this.head = this.head.next
// //         }else{
// //             let temp 
// //             let prev = this.head
// //             for(let i = 1 ; i < index ; i ++){
// //                 prev = prev.next
// //             }
// //             temp = prev.next
// //             prev.next = temp.next
           
// //         }
// //         this.size --
            
// //         }
// //         middle(){
// //             let slow = this.head
// //             let fast = this.head
// //             while(fast !=null & fast.next != null){
// //                 slow = slow.next
// //                 fast = fast.next.next
// //             }
// //             return slow.value
// //         }

// //     print(){
// //         if(this.isEmpty()){
// //             console.log("list is empty")
// //         }else{
// //             let curr = this.head
// //             let listValue = ''
// //             while(curr){
// //                 // listValue +=`${curr.value}`
// //                 console.log(curr.value)
// //                 curr = curr.next
// //             }
// //             // console.log(listValue)
// //         }
// //     }
// //     }


// // const ll = new LinkedList();
// // ll.prepend(10);
// // ll.prepend(103);
// // // ll.prepend(105);

// // console.log(ll)
// // // console.log(ll.append(29))
// // ll.print()
// // console.log("kgjihs")
// // console.log(ll.middle())

// let arr = [1,2,4,34,5,6,7,8]

// function arrsum(arr){
//     if(arr.length ===0){
//         return 0
//     }
//     return arr[0] + arrsum(arr.splice(1))
// }

// console.log(arrsum(arr))


// let str = "hashim"

// function reverese(str){
//     if(str.length <=1){
//         return str
//     }
//     return reverese(str.substring(1)) + str.charAt(0)

// }

// console.log(reverese(str))

// function factorial(value){
//     if(value <=1){
//         return 1
//     }
//     return value + factorial(value-1)
// }
// console.log(factorial(5))


// function binarySearch(arr,target){
//     let left
// }


// let array = [1,2,3,4,5,4,5]

// function dupli(arr){
//     let ma = new Map
//     for (let element of)
// }











class Node{
    constructor(value){
        this.value = value
        this.next =null
}}
class LinkedList{
    constructor(){
        this.head =null
        this.size = 0
    }
    append(value){
        const node = new Node(value)

        if(this.size ===0){
            this.head =node
            
        }else{
            node.next = this.head
            this.head=node
        }
        this.size++
    }
    delete(index){
        if(index < 0 || index > this.size){
        return -1
        }
    let prev= this.head
    for(let i =1 ; i < index-1; i ++){
        prev = prev.next
    }
    let temp = prev.next 
    prev.next = temp.next
    this.size --
    }
    print(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }}}
let newNode = new LinkedList()
newNode.append(10)
newNode.append(20)
newNode.append(30)
newNode.append(40)
newNode.delete(2)
newNode.print()