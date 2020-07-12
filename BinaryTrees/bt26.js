/*
    * Problem:
    *      Find the lowest common ancestor of two node in a binary tree
    * */
const {stack_track} = require('./binary_tree_utils.js');
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
    x.left.right.left = new Node(32)
    x.left.right.right = new Node(44)
    return x
}

function find_lca(root, lca, x, y){
    stack_track('push', `find_lca(${root?root.key:root},${lca},${x.key},${y.key})`)
    if(root==null) return stack_track('pop', [false, lca])
    if (root==x || root==y){
        return stack_track('pop', [true, root])
    }
    const left_lca = find_lca(root.left, lca, x, y)
    let left = left_lca[0]
    lca = left_lca[1]
    const right_lca = find_lca(root.right, lca, x, y)
    let right = right_lca[0]
    lca = right_lca[1]
    if (left && right){
        console.log('LCA found')
        lca = root
    }
    return stack_track('pop', [left || right, lca])
}
function run(){
    const root = binaryTree()
    const x = root.left.left
    const y = root.left.right.right
    const z = root.right.left
    const lca = find_lca(root, null, x, y)[1]
    console.log(lca)
}
run()
