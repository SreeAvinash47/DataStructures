/*
    * Problem:
    *      Given a binary tree, print vertical sum of it. Assume, left and right child of a node makes degree angle with the parent
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
    x.right.left = new Node(5)
    x.right.right = new Node(6)
    x.right.left.left = new Node(7)
    x.right.left.right = new Node(8)
    return x
}
const hash_map = {}
function create_vertical_sum_hashmap(root, breadth){
    if (root==null) return
    if (Object.keys(hash_map).find(item=>item==breadth)){
        hash_map[breadth] += root.key
    }
    else{
        hash_map[breadth] = root.key
    }
    create_vertical_sum_hashmap(root.left, breadth-1)
    create_vertical_sum_hashmap(root.right, breadth+1)
}

function run(){
    const root = binaryTree()
    create_vertical_sum_hashmap(root, 0)
    Object.keys(hash_map).sort((a,b)=>a-b).forEach(item => console.log(hash_map[item]))
}
run()
