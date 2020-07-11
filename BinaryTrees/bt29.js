/*
    * Problem:
    *      Find the distance between given pari fo nodes in a binary tree
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
    x.left.right = new Node(5)
    x.right.left = new Node(6)
    x.right.right = new Node(7)
    x.right.left.left = new Node(8)
    x.right.left.right = new Node(9)
    x.right.right.right = new Node(10)
    return x
}
function find_lca(root, node1, node2, level, lca){
    if(root==null) return [false, lca]
    root.level = level
    if(root==node1 || root==node2){
        return [true, root]
    }
    const left_lca = find_lca(root.left, node1, node2, level+1, lca)
    let left = left_lca[0]
    lca = left_lca[1]
    const right_lca = find_lca(root.right, node1, node2, level+1, lca)
    let right = right_lca[0]
    lca = right_lca[1]
    if(left && right){
        lca = root
    }
    return [left || right, lca]
}
function run(){
    const root = binaryTree()
    const node1 = root.right.left.left
    const node2 = root.left
    const lca = find_lca(root, node1 , node2, 0,null)[1]
    const distance = node1.level + node2.level - 2*lca.level
    console.log(`Distance between two nodes ${node1.key} and ${node2.key} is ${distance}`)
}
run()
