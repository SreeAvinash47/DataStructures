/*
    * Problem:
    *     Print all paths from root to leaf
    * */
const {stack_track} = require('./binary_tree_utils')
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
function print_paths(root, path){
    stack_track('push', `print_paths(${root?root.key:root}, [${path}])`, false)
    if(root==null) return stack_track('pop', null, false)
    path.push(root.key)
    if((root.left==null)&&(root.right==null)){
        console.log(path)
    }
    print_paths(root.left, path)
    print_paths(root.right, path)
    path.pop()
    stack_track('pop', null, false)
}
function run(){
    const root = binaryTree()
    const path = []
    print_paths(root, path)

}
run()
