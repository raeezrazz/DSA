class Node{
    constructor(){
        this.children={}
        this.isEnd=false;
    }
}
class Trie {
    constructor(){
        this.root=new Node();
    }
    insert(word){
        let curr =this.root;
        for(let val of word){
            if(!curr.children[val]){
                curr.children[val]=new Node();
            }
            curr=curr.children[val];
        }
        curr.isEnd =true
    }

search(word){
    let curr= this.root;
    for(let val of word){
        if(!curr.children[val]){
            return false;
        }
        curr=curr.children[val]
    }
    return true
}
// display(root= this.root,prefix=''){
//     if(root.isEnd){
//         console.log(prefix);
//     }
//     for(let char in root.children){
//         this.display(root.children[char],prefix+char);
//     }
// }
startWithPrefix(word){
    let curr =this.root;
    for(let val of word){
        if(!curr.children[val]){
            return 'no matching prefix';
        }
        curr = curr.children[val]
    }
    this.display(curr,word);
}
delete(word){
    this.deleteHelper(this.root,word,0);
}
deleteHelper(root,word,level){
    if(word.length ===level){
        if(root.isEnd){
            root.idEnd=false;
        }
        return Object.keys(root.children).length ===0
    }
    let child = root.children[word[level]];
    if(!child){
        return false;
    }
    let deleted  = this.deleteHelper(child,word,level+1);

    if(deleted){
        delete root.children[word[level]];
        if(Object.keys(child.children).length === 0 && !child.isEnd){
            return true
        }
    }
    return false
}

display(root=this.root,prefix=''){
    if(root.isEnd){
        console.log(prefix)
    }
    for(let char in root.children){
        this.display(root.children[char],prefix+char)
    }
}
}

const trie = new Trie();

trie.insert("apple");
trie.insert("apples");
trie.insert("banana");
trie.insert("car");
trie.insert("cat");
trie.insert("catering");
trie.insert("caterpillar");
// trie.display()
trie.startWithPrefix("cat")
// console.log(trie.delete("cat"))   