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


// class HashTable{
//     constructor(size){
//         this.items= new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let hashVal = 0
//         for(let i = 0 ; i < key.length ; i ++){
//             hashVal += key.charCodeAt[0]
//         }
//         return hashVal %this.size
//     }

//     set(key,val){
//         let index = this.hash(key)
//         const bucket = this.items[index]
//         if(!bucket){
//             this.items[index]= [[key,val]]
//         }else{
//             let sameItem = bucket.find(item => item[0]==key )
//             if(sameItem){
//                 sameItem[1]=val
//             }else{
//                 bucket.push([key,val])
//             }
//         }
//     }
//     get(key){
//         let index = this.hash(key)
//         const bucket = this.items[index]
//         if(bucket){
//             let sameItem = bucket.find(item=>item[0]==key)
//             if(sameItem){
//                 return sameItem[1]
//             }
//         }else{
//             return undefined
//         }
//     }
//     print(){
//         for(let i = 0 ; i < this.size ; i ++){
//             if(this.items[i]){
//                 console.log(i,"value:",this.items[i])
//             }
//         }
//     }
// }
// const hash = new HashTable()

// hash.set("hi","rahees")
// hash.set("kooi","shalik")
// hash.set("m","jaz")
// hash.print()


// function merge(arr){
//     if(arr.length<=1){
//         return arr
//     }

//     let middle = Math.floor(arr.length/2)
//     let left = arr.slice(0,middle)
//     let right = arr.slice(middle)

//     return sort(merge(left),merge(right))
// }

// function sort(left,right){
//     let i =0
//     let j=0
//     const sortArray=[]
//     while(i< left.length && j < right.length){
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
//      while(j<right.length){
//         sortArray.push(right[j])
//         j++
//     }
//     return sortArray
// }
// console.log(merge([12,35,2456,63,6,5,634,6]))


// function insertion(arr){
//     for(let i =0 ; i < arr.length ; i ++){
// let curr = arr[i]
// let j =i-1
// while(j>=0 && arr[j]>curr){
//     arr[j+1]=arr[j]
//     j--
// }
// arr[j+1]=curr
// }
// return arr
// }
// console.log(insertion([45,435,6,34,55,6,7,8,64,3,3]))



// class HashTable{
//     constructor(size){
//         this.items = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let hashVal = 0
//         for(let i =0 ; i < key.length ; i++){
//             hashVal += key.charCodeAt(i)
//         }
//         return hashVal % this.size
//     }
//     set(key,val){
//         const hashval = this.hash(key)
//         console.log(hashval)
//         let bucket = this.items[hashval]
//         if(bucket){
//             let same = bucket.find(item=>item[0]==key)
//             if(same){
//                 same[1]=val
//             }else{
//                 bucket.push([key,val])
//             }
//         }else{
//             this.items[hashval]=[[key,val]]
//         }
//     }
//     get(key){
//         const index = this.hash(key)
//         let bucket = this.items[index]
//         if(bucket){
//             let same = bucket.find(item=>item[0]==key)
//             if(same){
//                 return same[1]
//             }
//         }
//         return undefined
//     }
//     print(){
//         for(let i=0; i< this.size ; i++){
//             if(this.items[i]){
//                 console.log(i,"value",this.items[i])
//             }
//         }
//     }
// }
// const hash= new HashTable(50)
// hash.set("hi","k")
// hash.set("h4","2k")

// hash.set("hi1","k2")
// hash.print()




// class stack{
//     constructor(){
//         this.items=[]
//     }
//     push(x){
//         this.items.push(x)
//     }
//     pop(){
//         if(this.items.length ===0)return "stacki is empty"
//         return this.items.pop()
//     }
//     peek(){
//         if(this.items.length ===0)return "stacki is empty"
//         return this.items[this.items.length-1]
//     }
//     print(){
//         if(this.items.length ===0)return "stacki is empty"
//         for(let i = 0 ; i < this.items.length ; i ++){
//             console.log(this.items[i])
//         }
//     }
// }
// const sta= new stack()
// sta.push(3)
// sta.push(4)
// sta.push(4)
// sta.push(3)
// sta.push(6)
// sta.push(8)
// sta.print()
// console.log("jahfa")
// sta.pop()
// sta.print()

// class queue{
//     constructor(){
//         this.items=[]

//     }
//     enqueue(x){
//         this.items.push(x)
//     }
//     dequeue(){
//         if(this.items.length ===0)return "queue is empty"

//         return this.items.shift()
//     }
//     front(){
//         if(this.items.length ===0)return "queue is empty"
//         return this.items[0]
//     }
//     print(){
//         for(let i = 0 ; i < this.items.length ; i ++){
//             console.log(this.items[i])
//         }
//     }
// }
// const que = new queue()
// que.enqueue(3)
// que.enqueue(3)
// que.enqueue(6)
// que.enqueue(3)
// que.dequeue()
// que.print()




// let arr = [1,1,1,1,2,2,2,3,3]

// function freq(arr){
//     let m = new Map()
//     for(let i =0 ; i < arr.length ; i ++){
//         if(m.has(arr[i])){
//             m.set(arr[i],m.get(arr[i])+1)
//         }else{
//             m.set(arr[i],1)
//         }
//     }
//     let max =0
//     let value 
//     for([key,val] of m){
//         if(val>max){
//             max=val
//             value=key
//         }
//     }
//     console.log(value,":",max)
// }
// console.log(freq(arr))



// class Node{
//     constructor(value){
//         this.value = this.value
//         this.next = null
//         this.prev=null
//     }
// }
// class doubleLinked{
//     constructor(){
//         this.size=null
//         this.head =null
//         this.tail = null
//     }
//     append(value){
//         const node = new Node(value)
//         if(this.head ===null){
//             this.head =node
//             this.tail=node
//         }else{
//         node.next=this.head
//         this.head=node
//         }
//         this.size++
//     }
//    print(){
//     let curr = this.head
//     while(curr.next !=null){
//         console.log(curr.value)
//         curr = curr.next
//     }
//    }
// }

// const list = new doubleLinked()
// list.append(10)

// list.print()


// let str ="muhammed"

// function recurtion(str){
//    return str[str.length-2]
    
// }


// class queue{
//     constructor(){
//         this.items=[]
//     }
//     equeue(x){
//         this.items.push(x)
//     }
//     dequeue(){
//         if(this.items.length===0)return "que is empty"
//         this.items.shift()
//     }
//     print(){
//         for(let i = 0 ; i  < this.items.length ; i ++){
//             console.log(this.items[i])
//         }
//     }
// }

// const que = new queue()
// que.equeue(10)
// que.equeue(20)
// que.equeue(30)
// que.print()
// console.log("////////////////////")
// que.dequeue()
// que.print()





///////////////////////////////////    TREE  //////////////////////////////////////////////

// class Node{
//     constructor(value){
//         this.value = value
//         this.left =null
//         this.right = null
//     }
// }
// class BinaryTree{
//     constructor(){
//         this.root = null
//     }

//     insertion(value){
//         const node = new Node(value)
//         if(this.root === null){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left === null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right , node)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value === value)return true
//             else if(value< root.value) return this.search(root.left,value)
//             else return this.search(root.right,value)
//         }
//     }
//     inOrderTraversal(node,callback){
//         if(node !== null){
//             this.inOrderTraversal(node.left,callback);
//             callback(node.value)
//             this.inOrderTraversal(node.right,callback)
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

// }

// const tree = new BinaryTree()

// tree.insertion(10)
// tree.insertion(3)
// tree.insertion(2)
// tree.insertion(31)

// tree.insertion(4)
// tree.insertion(1)

// tree.insertion(7)
// tree.insertion(15)
// // tree.inOrderTraversal(tree.root,value=>console.log(value))
// // console.log(tree.search(tree.root,10))
// tree.postOrder(tree.root)


class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinaryTree{
    constructor(){
        this.root = null
    }
    insert(value){
        const node = new Node(value)
        if(this.root === null){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
       
        if(node.value < root.value){
            if(root.left===null){
                root.left = node
            }else{
            this.insertNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right =node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    min(root){
        if(!root.left){
            console.log(root.value)
        }else{
            this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            console.log(root.value)
        }else{
            this.max(root.right)
        }
    }
    search(root,value){
        if(!root){
            console.log("false")
        }else{
        if(root.value===value){
            console.log("true")

        }else if(value<root.value){
            this.search(root.left,value)
        }else{
            this.search(root.right,value)
        }
    }
        
    }
    inOrderTraverse(root){
        if(root !== null){
       
            this.inOrderTraverse(root.left)
            console.log(root.value)
            this.inOrderTraverse(root.right)
        }
    }

}

const tree = new BinaryTree()
tree.insert(10)
tree.insert(5)
tree.insert(3)
tree.insert(2)
tree.insert(13)
tree.insert(11)
tree.min(tree.root)
tree.search(tree.root,131)
console.log("?/////////////////////")
tree.inOrderTraverse(tree.root)

