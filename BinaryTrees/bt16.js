/*
    Problem:
        Given a binary tree, in-place convert it to its sum tree. In a sum tree, value at each nofe is equal to the sum of all elements pressent in its left and right subtree. The value of an empty node is considered as 0
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
function sum_tree(x){
    if(x==null) return 0
    let leftSum = sum_tree(x.left)
    let rightSum = sum_tree(x.right)
    let old = x.key
    x.key = leftSum + rightSum
    return x.key+old
}
function run(){
    const x = binaryTree()
    console.log(x)
    sum_tree(x)
    console.log(x)
}
run()
