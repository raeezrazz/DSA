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
    insert(value){
        const newNode = new TreeNode(value)
        if(this.root == null){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(node , newNode){
        if(newNode.value < node.value){
            if(node.left === null){
                node.left =newNode
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(node.right ===null){
                node.right = newNode

            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value ===value){
                return true
            }else if(value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

    levelOrder(){
        const queue=[]
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
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


    inOrderTraversal(node,callback){
        if(node !== null){
            this.inOrderTraversal(node.left,callback);
            callback(node.value)
            this.inOrderTraversal(node.right,callback)
        }
    }

    preorder(root){
        if(root){
            console.log(root.value)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
    inorder(root){
        if(root){
            console.log(root.value)
            this.inorder(root.left)
            this.inorder(root.right)
        }
    }
    postorder(root){
        if(root){
            console.log(root.value)
            this.postorder(root.left)
            this.postorder(root.right)
        }
    }
   
}
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);       
tree.insert(3);
tree.insert(7);

tree.levelOrder()
tree.inOrderTraversal(tree.root, value => console.log(value));
tree.min(tree.root)
tree.max(tree.root)
tree.min(tree.root)

