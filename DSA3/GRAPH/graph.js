
////////////////////// ADJUSCENT MATRIX ??????????

// const matrix=[
// [0,1,0],
// [1,0,1],
// [0,1,0]
// ]
// console.log(matrix[1][1])

/////////////////////// ADJUSCENT LIST?????????????????

// adjuscencyLIst ={
//     'A':['B'],
//     'B':['C','A'],
//     'C':['B'],
// }

// console.log(adjuscencyLIst['B'])

/////////////////////// ADJUSCENT LIST?????????????????

class Graph{
    constructor(){
        this.adjacenecyList ={}
    }
    addVertex(vertex){
        if(!this.adjacenecyList[vertex]){
            this.adjacenecyList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacenecyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacenecyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacenecyList[vertex1].add(vertex2)
        this.adjacenecyList[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjacenecyList[vertex1].has(vertex2)&&
            this.adjacenecyList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1,vertex2){
        this.adjacenecyList[vertex1].delete(vertex2)
        this.adjacenecyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacenecyList[vertex]){
            return false
        }
        for(let adjacentVertex  of this.adjacenecyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
    }
    display(){
        for( let vertex in this.adjacenecyList){
            console.log(vertex + '->'+ [...this.adjacenecyList[vertex]])
        }
    }
    print(){
        console.log(this.adjacenecyList)
    }

}

const graph = new Graph()



graph.addEdge('A','B')
graph.addEdge('A','C')

graph.addEdge('B','A')
graph.addEdge('B','C')

graph.display()
console.log(graph.hasEdge('A','h'))
graph.print()
graph.removeVertex('B')
graph.print()
