/*
    * Problem:
    *     Print all the ancestors for a given node
    * */
class Node{
    constructor(key=null, left=null, right=null){
        this.key = key;
        this.left=left;
        this.right=right;
    }
}
function binaryTree(){
    x = new Node(1)
    x.left = new Node(2)
    x.right = new Node(3)
    x.left.left = new Node(4)
    x.left.right = new Node(5)
    x.right.left = new Node(6)
    x.right.right = new Node(7)
    x.right.left.left = new Node(8)
    x.right.left.right = new Node(9)
    x.right.right.right = new Node(10)
    return x
}
function ancestors(root, x, inter){
    if(root==null) return
    inter.push(root.key)
    ancestors(root.left, x, inter)
    ancestors(root.right, x, inter)
    if(root==x){
        res = inter.slice(0,-1)
    }
    inter.pop()
}
let res=[]
function run(){
    const root = binaryTree()
    const node = root.right.left.left
    ancestors(root, node, [])
    console.log(res)
    res = []
    ancestors(root, root.right.right.right, [])
    console.log(res)

}
run()
