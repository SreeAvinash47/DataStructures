/*
    * Problem:
    *      Sink nodes with value=0 to the bottom of the tree
    * */
class Node{
    constructor(key=null, left=null, right=null){
        this.key = key;
        this.left=left;
        this.right=right;
    }
}
function binaryTree(){
    x = new Node(0)
    x.left = new Node(1)
    x.right = new Node(0)
    x.right.left = new Node(0)
    x.right.right = new Node(2)
    x.right.left.left = new Node(3)
    x.right.left.right = new Node(4)
    return x
}
function post_order(root){
    const out = []
    function post_order_util(root){
        if (root==null) return
        post_order_util(root.left)
        post_order_util(root.right)
        out.push(root.key)
    }
    post_order_util(root)
    console.log(out.join(' '))
}
function sink_node(root){
    if (root.left && root.left.key!=0){
        let temp = root.left.key
        root.left.key = root.key
        root.key = temp
        sink_node(root.left)
    }
    else if (root.right && root.right.key!=0){
        let temp = root.right.key
        root.right.key = root.key
        root.key = temp
        sink_node(root.right)
    }
}
function sink_tree(root){
    if(root==null) return
    sink_tree(root.left)
    sink_tree(root.right)
    if(root.key==0) sink_node(root)
}
function run(){
    const root = binaryTree()
    post_order(root)
    sink_tree(root)
    post_order(root)
}
run()
