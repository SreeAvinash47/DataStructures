/*
    * Problem:
    *     Convent binary tree to its mirror
    * */
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

function mirrorTree(x){
    if(x==null) return
    mirrorTree(x.left)
    mirrorTree(x.right)
    let temp = x.left
    x.left = x.right
    x.right = temp
}
function run(){
    const x = binaryTree()
    console.log(x)
    mirrorTree(x)
    console.log(x)

}
run()
