/*
    * Problem:
    *    Find diameter of the given binary tree
    *    Diameter is teh longest distnace between two leaf nodes
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
function get_diameter(x, d){
    if(x==null) return [0, d]
    const [lH, lD] = get_diameter(x.left, d)
    const [rH, rD] = get_diameter(x.right, d)
    let maxD = lH + rH + 1
    d = Math.max(maxD, d)
    return [Math.max(lH, rH)+1, d]
}
function diameter(x){
    return get_diameter(x, 0)[1]
}
function run(){
    x = binaryTree()
    console.log('Diameter of the binary tree is ', diameter(x))
}
run()
