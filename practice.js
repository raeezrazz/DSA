
//   TWO SUM

// const arr = [6,7,8,4,5,1,0]
// const target = 10
// function twoSum(arr,target){

//     const s = new Set

// for(let i = 0 ; i < arr.length ; i ++){
//     let k = arr[i]
//     let remaining = target - k
//     if(s.has(remaining)){
//         return b =[k,remaining]
//     }else{
//         s.add(k)
//     }
// }
// }

// let result = twoSum(arr,target)
// console.log(result)




// PRACTICE 1

// const arr =[6,5,6,3,7,9,5,6,2,6]
// function replaceToEnd(arr,target){
//     let j = arr.length-1

//     for(let i = 0 ; i < arr.length ; i++ ){
//         if(i==j){
//             break
//         }
//         if(arr[i]===target){
//             let temp =arr[j]
//             arr[j]=arr[i]
//             arr[i]=temp
//             j--
//             i--
//         }
//     }
//     return arr
// }
// let target =6
// const result = replaceToEnd(arr,target)
// console.log(result)



// LINKED LIST

// SETTING VALUES AND PRINTING VALUES IN LINKED LIST

// class Node{
//     constructor(value){
//         this.value =value
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head =null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size ===0
//     }
//     getSize(){
//         return this.size
//     }
//     addNode(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size ++
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('List is Empty');
//         }else{
//             let curr = this.head
//             let listValue = ''
//             while(curr){
//                 listValue +=`${curr.value} `
//                 curr =curr.next
//             }
//             console.log(listValue)
//         }
//     }
// }

// const list = new LinkedList()
// console.log("list is empty " ,list.isEmpty())
// console.log("sizw",list.getSize())
// list.print()
// list.addNode(10)
// list.print()

// list.addNode(20)
// list.print()

// list.addNode(103)
// list.print()




// APPEND VALUES



// class Node{
//     constructor(value){
//         this.value =value
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head =null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size ===0
//     }
//     getSize(){
//         return this.size
//     }
//     addNode(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size ++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev =prev.next
//             }
//             prev.next = node
//         }
//         this.size ++

//     }


//     print(){
//         if(this.isEmpty()){
//             console.log('List is Empty');
//         }else{
//             let curr = this.head
//             let listValue = ''
//             while(curr){
//                 listValue +=`${curr.value} `
//                 curr =curr.next
//             }
//             console.log(listValue)
//         }
//     }
// }

// const list = new LinkedList()
// console.log("list is empty " ,list.isEmpty())
// console.log("sizw",list.getSize())
// list.print()
// list.addNode(10)
// list.print()

// list.append(20)
// list.print()

// list.addNode(103)
// list.append(103)

// list.print()



// INSERTING VALUES IN BETWEEN NODES




// class Node{
//     constructor(value){
//         this.value =value
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head =null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size ===0
//     }
//     getSize(){
//         return this.size
//     }
//     addNode(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size ++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev =prev.next
//             }
//             prev.next = node
//         }
//         this.size ++

//     }

//     insert(value,index){
//         if(index<0 || index > this.size){
//             return 
//         }
//         if(index===0){
//             console.log("efso")
//             this.addNode(value)
//         }else{
//             const node = new Node(value)
//             let prev =this.head
//             for(let i =0;i<index-1 ; i ++){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
            
//         }
//     }

//     remove(index){
//         if(index < 0 || index >= this.size ){
//             console.log("List is Empty")
//             return null
//         }
//         let removedNode 
//         if(index ===0){
//             removedNode =this.head
//             this.head  =this.head.next
//         }else{
//             let prev = this.head
//             for( let i =0 ; i < index -1; i ++){
//                 prev = prev.next
//             }
//             removedNode = prev.next
//             prev.next = removedNode.next
//         }
//         this.size--
//         return removedNode.value

//     }

//     // REMOVE VALUE

//     removeValue(value){

//         if(this.isEmpty()){

//             return null
//         }
//         if(this.head.value ===value){

//             this.head = this.head.next
//             this.size--
//             return value
//         }else{
//             let prev = this.head
//             while(prev.next && prev.next.value !== value){
//                 prev =prev.next
//             }

//             if(prev.next){
//                 const removedNode = prev.next
//                 prev.next = removedNode.next
//                 this.size --
//                 return value
//             }
//             return null
//           }
//         }
//         search(value){
//             if(this.isEmpty()){
//                 return -1
//             }
//              let i =0 ;
//              let curr =this.head
//              while(curr){
//                 if(curr.value === value){
//                     return i
//              }
//                 curr = curr.next
//                 i++
//              }
//              return -1
//         }

//         reverse(){
//             let prev =null
//             let curr = this.head
//             while(curr){
//                 let next = curr.next
//                 curr.next = prev
//                 prev=curr
//                 curr=next                
//             }
//             this.head = prev
//         }

//     print(){
//         if(this.isEmpty()){
//             console.log('List is Empty');
//         }else{
//             let curr = this.head
//             let listValue = ''
//             while(curr){
//                 listValue +=`${curr.value} `
//                 curr =curr.next
//             }
//             console.log(listValue)
//         }
//     }
// }

// const list = new LinkedList()
// console.log("list is empty " ,list.isEmpty())
// console.log("sizw",list.getSize())
// list.print()
// list.insert(20,0)
// list.print()

// list.insert(100,0)
// list.insert(110,1)

// list.print()
// console.log(list.search(20))

// list.print()
// list.reverse()
// list.print()
