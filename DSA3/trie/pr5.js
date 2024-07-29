// class Node{
//     constructor(value){

//     this.value=value
//     this.left=null
//     this.right=null
// }
// }
// class Tree {
//     constructor(){
//         this.root=null
//     }

//     insert(value){
//         const node = new Node(value)
//         if(this.root==null){
//             this.root=node
//         }else{
//             this.inserNode(this.root,node)
//         }
//     } 
//     inserNode(root,node){
//         if(node.value<root.value){
//             if(root.left===null){
//                 root.left=node
//             }else{
//                 this.inserNode(root.left,node)
//             }
//         }else{
//             if(root.right==null){
//                 root.right=node
//             }else{
//                 this.inserNode(root.right,node)
//             }
//         }
//     }
//     search(root,value){
//         if(root==null){
//             console.log("false")
//             return false
//         }
//         if(root.value==value){
//             console.log("true")

//             return true
//         }else{
//             if(value<root.value){
//                 this.search(root.left,value)
//             }else{
//                 this.search(root.right,value)
//             }
//         }
//     }
//     inorder(root){
//         if(root==null){
//             return 
//         }else{
//             this.inorder(root.left)
//             console.log(root.value)
//             this.inorder(root.right)
//         }
//     }
//    isBST(){
//     return this.checkBST(this.root,-Infinity,Infinity)
//    }
//    checkBST(node,min,max){
//     if(node==null){
//         return true
//     }
//     if(node.value<=min || node.value >=max){
//         return false
//     }
//     return this.checkBST(node.left,min,node.value)&&this.checkBST(node.right,node.value,max)
//    }

// }

// const tree =new Tree()
// tree.insert(10)
// tree.insert(20)
// tree.insert(9)
// tree.insert(1)
// tree.insert(5)
// tree.inorder(tree.root)
// console.log(tree.search(tree.root,500))

// console.log("kkkkkkkkkkkk")
// console.log(tree.isBST())



////////////////////////////////// TRIE /////////////////////////

class Node {
    constructor(){
        this.children={}
        this.isEnd=false
    }
}

class Trie{
    constructor(){
        this.root=new Node()
    }

  insert(word){
    let curr = this.root;
    for(let char of word){
        if(!curr.children[char]){
            curr.children[char]=new Node()
        }
        curr=curr.children[char]
    }
    curr.isEnd=true
    
  }

  display(root=this.root,prefix=''){
    if(root.isEnd){
        console.log(prefix)
    }
   for(let char in root.children){
    this.display(root.children[char],prefix+char)
   }
  }

  delete(word){
    this.deleteHelper(this.root,word,0)
  }

  deleteHelper(root,word,level){
    if(word.length===level){
        if(root.isEnd){
            root.isEnd=false
        }
        return Object.keys(root.children).length===0
    }

    let child= root.children[word[level]]

    if(!child){
        return false
    }
    let deleted= this.deleteHelper(child,word,level+1)

    if(deleted){
        delete root.children[word[level]]
        if(Object.keys(root.children).length===0 && !child.isEnd){
            return true
        }
    }
    return false
  }

}


const trie = new Trie()

trie.insert("words")
trie.insert("wpwmwmwm")
trie.insert("wpwmwdfdgfhmwm")

trie.display()
console.log("lllllllllllllllllllllllllllllllllll")
console.log(trie.delete('words'))
trie.display()
