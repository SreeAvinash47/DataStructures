/*
    * Problem:
    *   Given an binary tree , write an iterative and recursive algrithm for printing the postorder tree traversal*/
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
function postorder_recursive(x){
    if(x==null) return
    postorder_recursive(x.left)
    postorder_recursive(x.right)
    out_recursive.push(x.key)
}
let out_iterative = []
function postorder_iterative(x){
    if(x==null) return
    const stack = []
    let ele;
    stack.push(x)
    while(stack.length!=0){
        ele = stack.pop()
        out_iterative.push(ele.key)
        if(ele.left) stack.push(ele.left)
        if(ele.right) stack.push(ele.right)
    }
    out_iterative = out_iterative.reverse()
}
function run(){
    const x = binaryTree();
    postorder_recursive(x)
    console.log(out_recursive)
    postorder_iterative(x)
    console.log(out_iterative)
}
run()
