class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev=null
    }
}
class Que{
    constructor(){
        this.head =null
        this.tail = null
        this.size = 0
      
    }

    enqeue(data){

        let node= new Node(data)
        if(this.size==0){
            this.head =node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size ++
    }
    deqeue(){
        let curr =this.head
        for(let i = 0; i < this.size -2 ; i ++){
            curr = curr.next
        }
        this.tail = curr
        this.size --
        
    }
    print(){
        let curr = this.head
        while(curr){
            console.log(curr.data)
            curr = curr.next
        }
    }
}
const stack = new Que()
stack.enqeue(10)
stack.enqeue(20)
stack.enqeue(30)
stack.print()
console.log("..........")
stack.deqeue()
stack.print()