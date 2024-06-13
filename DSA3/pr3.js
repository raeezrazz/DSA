class Node {
    constructor(val){
        this.val=val
        this.left=null
        this.right=null
    }
}
class Tree{
    constructor(){
        this.root=null
    }
    insert(val){
        const node = new Node(val)
        if(this.root===null){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){

        if(node.val<root.val){
            if(root.left===null){
                root.left=node
            }else{
            this.insertNode(root.left,node)

            }
        }else{
            if(root.right===null){
                root.right=node
            }else{
                this.insertNode(root.right,node)

            }
        }
    }
    search(root,val){
        
        if(root===null){
            return false
        }
        if(root.val== val){
           return true

        }else if(val< root.val){
            return this.search(val.left,val)
        }else{
            return this.search(root.right,val)
        }
    }
    min(root){
        if(!root.left){
            console.log(root.val)
        }else{
            this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            console.log(root.val)
        }else{
            this.max(root.right)
        }
    }

    inorder(root){
        if(root==null){
            return 
        }
        this.inorder(root.left)
        console.log(root.val)
        this.inorder(root.right)
    }
}
const tree= new Tree()
tree.insert(10)
tree.insert(20)
tree.insert(6)
tree.insert(2)
console.log("Ggggg")
tree.inorder(tree.root)
console.log(tree.search(tree.root,20))
tree.min(tree.root)
tree.max(tree.root)
