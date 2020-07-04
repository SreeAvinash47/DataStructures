/*
    Problem:
        Left view of a binary tree
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
const out = []
function leftView(x){
    if(x==null) return
    const queue = []
    queue.push(x)
    let ele
    let row_length;
    while(queue.length!=0){
        row_length = queue.length
        count=0
        while(row_length!=0){
            ele = queue.pop()
            if(count==0) out.push(ele.key)
            if(ele.left) queue.unshift(ele.left)
            if(ele.right) queue.unshift(ele.right)
            row_length--
            count++
        }
    }
}
function run(){
    const x = binaryTree()
    leftView(x)
    console.log(out)
}
run()
