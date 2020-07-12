/*
    * Problem:
    *     Convert binary tree to full tree by removing half nodes
    *     Given a binary tree, convert it to full treee by removing half nodes(remove nodes having one children).
    * */
class Node{
    constructor(key=null, left=null, right=null){
        this.key = key;
        this.left=left;
        this.right=right;
    }
}
function binaryTree(){
    x = new Node(0)
    x.left = new Node(1)
    x.left.left = new Node(3)
    x.left.left.left = new Node(5)
    x.right = new Node(2)
    x.right.left = new Node(4)
    x.right.left.left = new Node(6)
    x.right.left.right = new Node(7)
    return x
}
function truncate(root){
    if (root==null) return
    root.left = truncate(root.left)
    root.right = truncate(root.right)
    if((root.left && root.right) || (root.left==null && root.right==null)){
        return root
    }
    return root.left?root.left:root.right
}
function run(){
    const root = binaryTree()
    console.log(root)
    truncate(root)
    console.log(root)
}
run()
