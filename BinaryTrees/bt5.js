/*
    * Problem:
    *   Given an binary tree , write an iterative and recursive algrithm for printing the preorder tree traversal*/
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
const out_recursive = []
function preorder_recursive(x){
    if(x==null) return
    out_recursive.push(x.key)
    preorder_recursive(x.left)
    preorder_recursive(x.right)
}
const out_iterative = []
function preorder_iterative(x){
    if(x==null) return
    const stack = []
    let ele;
    stack.push(x)
    while(stack.length!=0){
        ele = stack.pop()
        out_iterative.push(ele.key)
        if(ele.right) stack.push(ele.right)
        if(ele.left) stack.push(ele.left)
    }
}
function run(){
    const x = binaryTree();
    preorder_recursive(x)
    console.log(out_recursive)
    preorder_iterative(x)
    console.log(out_iterative)
}
run()
