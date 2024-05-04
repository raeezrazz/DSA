
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



class Node{
    constructor(value){
        this.value =value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head =null
        this.size = 0
    }
    isEmpty(){
        return this.size ===0
    }
    getSize(){
        return this.size
    }
    addNode(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size ++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev =prev.next
            }
            prev.next = node
        }
        this.size ++

    }


    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }else{
            let curr = this.head
            let listValue = ''
            while(curr){
                listValue +=`${curr.value} `
                curr =curr.next
            }
            console.log(listValue)
        }
    }
}

const list = new LinkedList()
console.log("list is empty " ,list.isEmpty())
console.log("sizw",list.getSize())
list.print()
list.addNode(10)
list.print()

list.append(20)
list.print()

list.addNode(103)
list.append(103)

list.print()

