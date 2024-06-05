class TreeNode{
    constructor(value){
        this.value = value
        this.left= null;
        this.right = null;

    }
}
class BinaryTree{
    constructor(){
        this.root =null
    }
    insertion(value){
        const newNode = new TreeNode(value)
        if(this.root = null){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(node , newNode){
        if(newNode.value <node.value){
            if(node.left === null){
                node.left =newNode
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(this.right ===null){
                node.right = newNode

            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }

    inOrderTraversal(node,callback){
        if(node !== null){
            this.inOrderTraversal(node.left,callback);
            callback(node.value)
            this.inOrderTraversal(node.right,value)
        }
    }
}