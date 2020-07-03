/*
Problem:
    Given an binary tree, write iterative and recursive solutionfor Inorder tree traversal
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
    //x.left.right = new Node(12)
    x.right.left = new Node(16)
    //x.right.right = new Node(25)
    return x
}
const out_recursive = []
function inorder_recursive(x){
    if(x==null) return
    inorder_recursive(x.left)
    out_recursive.push(x.key)
    inorder_recursive(x.right)
}
const out_iterative=[]
function inorder_iterative(x){
    if (x==null) return
    const stack = []
    let curr=x;
    stack.push(curr)
    let ele;
    while(stack.length!==0){
        if(curr.left){
            stack.push(curr.left)
            curr = curr.left
        }else{
            ele = stack.pop()
            out_iterative.push(ele.key)
            if(ele.right){
                stack.push(ele.right)
                curr = ele.right
            }
        }

    }
}
function run(){
    let x = binaryTree()
    inorder_recursive(x)
    console.log(out_recursive)
    inorder_iterative(x)
    console.log(out_iterative)
}
run()
