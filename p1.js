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

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        
    }
}
    class Stack {
        constructor(){
            this.top = null
            this.size = 0
        }

        push(val){
            const node = new Node()
            if(this.size ===0){
                this.top = node
            }else{
                this.top.next = node
                this.top = node
            }
            this.size++
        }
        pop(){
            this.
        }
    }


/////////////////////// QUEUE //////////////////////////


