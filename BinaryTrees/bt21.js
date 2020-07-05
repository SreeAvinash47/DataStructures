/*
    * Problem:
    *       Check if given tree is subtree of another binary tree
    * */
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
function binaryTree2(){
    y = new Node(10)
    y.left = new Node(8)
    y.right = new Node(12)
    return y
}
function areIdentical(x, y){
    if(x==null && y==null) return true
    if(x==null || y==null) return false
    return (x.key==y.key && areIdentical(x.left, y.left) && areIdentical(x.right, y.right))
}
function isSubtree(x, y){
    if(y==null) return true
    if(x==null) return false
    if(areIdentical(x, y)) return true
    return isSubtree(x.left, y) || isSubtree(x.right, y)
}
function run(){
    const x = binaryTree()
    const y = binaryTree()
    console.log(isSubtree(x, y))
}
run()
