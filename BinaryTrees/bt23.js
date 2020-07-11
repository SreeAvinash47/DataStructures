/*
    * Problem:
    *      Check if given binary tree is symmetrical or not
    * */
const { stack_track } = require('./binary_tree_utils.js')
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
    x.right.right = new Node(25)
    //x.right.right.left = new Node(36)
    return x
}
function isSymmetry_util(a, b){
    stack_track('push', `isSymmetry_util(${a?a.key:null, b?b.key:null})`)
    if((a==null && b==null)) return stack_track('pop', true)
    return stack_track('pop', ((a && b)&&(isSymmetry_util(a.left, b.right)&&isSymmetry_util(a.right, b.left))))
}
function isSymmetry(x){
    if(x==null) return true
    return isSymmetry_util(x.left, x.right)
}
function run(){
    x = binaryTree()
    if(isSymmetry(x)) console.log('Given binary tree is symmetrical')
    else console.log('Given binary tree is not symmetrical')
}
run()
