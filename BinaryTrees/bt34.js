/*
    * Problem:
    *     Given a binary tree,, calculate the sum of all nodes in diagonal havinf nefative slope
    * */
class Node{
    constructor(key=null, left=null, right=null){
        this.key = key;
        this.left=left;
        this.right=right;
    }
}
function binaryTree(){
    x = new Node(1)
    x.left = new Node(2)
    x.right = new Node(3)
    x.left.left = new Node(4)
    x.right.left = new Node(5)
    x.right.right = new Node(6)
    x.right.left.left = new Node(7)
    x.right.left.right = new Node(8)
    return x
}
const hashmap = {}
function diagonal_sum(root, breadth){
    if(root==null) return
    if(Object.keys(hashmap).find(item=>item==String(breadth))){
        hashmap[breadth] += root.key
    }else{
        hashmap[breadth] = root.key
    }
    diagonal_sum(root.left, breadth+1)
    diagonal_sum(root.right, breadth)
}

function run(){
    const root = binaryTree()
    diagonal_sum(root,0)
    Object.keys(hashmap).sort((a, b)=>a-b).forEach(item=>console.log(hashmap[item]))
}
run()
