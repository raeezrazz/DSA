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

    insert(x){
        const node = new Node(x)
        if(this.root== null){
            this.root=node
        }else{
            this.insertHelper(this.root,node)
        }
    }
    insertHelper(root,node){
        
        if(root==null){
            root=node
        }else{
        if(node.val<root.val){
           this.insertHelper(root.left,node)
        }else{
            this.insertHelper(root.right,node)
        }
    }
    }
    inorder(root){
        if(!root){
            return 
        }
        this.inorder(root.left)
        console.log(root.val)
        this.inorder(root.right)
    }
    bst(){
        let arr=[]
        this.isBst(this.root,arr)
        console.log(arr)
        for()
    }

    isBst(root,arr){
        if(!root){
            return arr
        }
     
        this.isBst(root.left)
        arr.push(root.val)
        this.isBst(root.right)
    }

}
const tree = new Tree()
tree.insert(10)
tree.insert(20)
tree.insert(5)
tree.inorder(tree.root)
tree.bst()