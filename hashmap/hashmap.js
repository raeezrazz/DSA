// class hashTable { 
//     constructor(size) { 
//         this.items = new Array(size) 
//         this.size = size 
//     } 
 
//     hash(key) { 
//         let hashKey = key.toString() 
//         let hashedVal = 0; 
//         for (let i = 0; i < hashKey.length; i++) { 
//             hashedVal += hashKey.charCodeAt(i); 
//         } 
//         console.log(hashedVal)
//         return hashedVal % this.size 
//     } 
 
//     set(key,val) { 
//         const index = this.hash(key) 
//         this.items[index] = val 
//     } 
 
//     get(key) { 
//         const index = this.hash(key) 
//         return this.items[index] 
//     } 
 
//     remove(key) { 
//         const index = this.hash(key) 
//         delete this.items[index] 
//     } 
 
//     print() { 
//         for (let i = 0; i < this.items.length; i++) { 
//             if(this.items[i]) { 
//                 console.log(i,this.items[i]) 
//             } 
              
//         } 
//     } 
// } 
 
// const hash = new hashTable(50) 
 
// hash.set("mane","muhammed") 
// hash.set("name","rahees") 
// hash.set("manse","cdv") 
// hash.set("maxscdnse","efdsv") 


// hash.print() 
//  console.log(hash.get("name"))
// hash.remove("name") 
// hash.print()
// console.log(hashTable.this.items)


/////////////////////////////////////////////////////////////////////////////////////////////////////


class hashTavle{
    constructor(size){
        this.item = new Array(size)
        this.size = size
    }

    hash(key){
        let hashKey = key.toString()
        let hashedVal = 0
        for(let i =0 ; i < hashKey.length ; i ++){
            hashedVal += hashKey.charCodeAt(i)
        }
        return hashedVal % this.size
    }
    set(key,val){
        let index = this.hash(key)
        this.item[index]=val
    }
    get(key){
        let index =this.hash(key)
        return this.item[index]
    }

    remove(key){
        let index = this.hash(key)
        delete this.item[key]

    }

    print(){
        for(let i = 0 ; i < this.item.length ; i ++){
            if(this.item[i]){
                console.log(i,this.item[i])
            }
        }
    }
}

const hash = new hashTavle(50)
hash.set("hello","rahees")
hash.set("hi","kooi")
hash.print()
console.log(hash.get("hi"))
