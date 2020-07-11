/*
Problem:
    Write an efficient alogorithm to compute the height of binary tree.
*/
//@format
const {stack_track} = require('./binary_tree_utils.js')
class Node{
    constructor(key=null, left=null, right=null){
        this.key = key;
        this.left=left;
        this.right=right;
    }
}
function height(x){
    stack_track('push', `height(${x?x.key:null})`)
    if(x==null){
        return stack_track('pop', -1)
    }
    let left = height(x.left)
    let right = height(x.right)
    return stack_track('pop', Math.max(left, right)+1)
}
function run(){
    x = new Node(15)
    x.left = new Node(10)
    x.right = new Node(20)
    x.left.left = new Node(8)
    x.left.right = new Node(12)
    x.right.left = new Node(16)
    x.right.right = new Node(25)
    console.log(`Height of the binary tree is ${height(x)}`)
}
run()
