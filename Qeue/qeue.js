class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class Que{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    enqeue(val){
        const node = new Node(val)
        if(this.head ===0){
            this.head = node
            this.tail = node
        }
        size++
    }
    deqeue(){
        this.head = this.head.next
        size--
    }
    print(){
         
    }
}