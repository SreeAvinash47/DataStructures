/*
    * Problem:
    *    Determine if binary tree can be converted to another binary tree by doing any number of swaps of left and right child
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
    x = new Node(15)
    x.left = new Node(10)
    x.right = new Node(20)
    x.left.left = new Node(12)
    x.left.right = new Node(8)
    x.right.left = new Node(16)
    x.right.right = new Node(25)
    return x
}
function equal(x, y){
    if (x==y) return true
    return (x && y) && (x.key==y.key) &&
        ((equal(x.left,y.left) && equal(x.right, y.right)) || ((equal(x.left,y.right) && equal(x.right, y.left))))
}
function run(){
    const x = binaryTree()
    const y = binaryTree2()
    console.log(equal(x, y))

}
run()
