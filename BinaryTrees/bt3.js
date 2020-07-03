/*
Problem:
    Delete a given binary tree
*/
class Node{
    constructor(key=null, left=null, right=null){
        this.key = key;
        this.left=left;
        this.right=right;
    }
}
var x = new Node(15)
function binaryTree(){
    //x = new Node(15)
    x.left = new Node(10)
    x.right = new Node(20)
    x.left.left = new Node(8)
    x.left.right = new Node(12)
    x.right.left = new Node(16)
    x.right.right = new Node(25)
}
function delete_bt(x){
    if(x==null) return
    delete_bt(x.left)
    delete_bt(x.right)
    x=null
}
function run(){
    //let x = binaryTree()
    binaryTree()
    console.log(x)
    let a = x.left.left
    delete_bt(x)
    if(x==null) {
        console.log(`Binary Tree is deleted`)
    }else console.log(`Binary tree is not deleted`)
}
run()
