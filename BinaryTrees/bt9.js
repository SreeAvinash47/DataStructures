/*
    * Problem: Reverse Level order tree traversal
*/
class Node{
    constructor(key=null, left=null, right=null){
        this.key = key;
        this.left=left;
        this.right=right;
    }
}
function binaryTree(){
    x = new Node(15)
    x.left = new Node(10)
    x.right = new Node(20)
    x.left.left = new Node(8)
    x.left.right = new Node(12)
    x.right.left = new Node(16)
    x.right.right = new Node(25)
    return x
}
let out = []
function level_order(x){
    if(x===null) return
    const queue = []
    let ele;
    queue.push(x)
    let row_length = 1
    while(queue.length!=0){
        let row = []
        row_length = queue.length
        while(row_length!=0){
            ele = queue.pop()
            row.push(ele.key)
            if(ele.left) queue.unshift(ele.left)
            if(ele.right) queue.unshift(ele.right)
            row_length--
        }
        out.push(row)
    }
    out = out.reverse().reduce((aggr, item)=>aggr.concat(item), [])
}
function run(){
    const x = binaryTree()
    level_order(x)
    console.log(out)

}
run()
