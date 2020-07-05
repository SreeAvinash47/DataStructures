/*
    * Problem:
    *    Given a binary tree, Print all the cousing of a given node
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
function in_order(x, parent, level, c1){
    if(x==null) return
    in_order(x.left, x, level+1, c1)
    x.parent = parent
    x.level = level
    if(x.key==c1.key){
        c1.parent = parent
        c1.level = level
    }
    in_order(x.right, x, level+1, c1)
}
let cousins = []
function get_cousins(x, c1){
    if(x==null) return
    get_cousins(x.left, c1)
    get_cousins(x.right, c1)
    if((x.level==c1.level)&&(x.parent!=c1.parent)){
        cousins.push(x.key)
    }
    return cousins
}
function print_cousins(x, c1){
    c1 = new Node(c1)
    in_order(x, null, 0, c1)
    cousins = get_cousins(x, c1)
    console.log('cousins of ', c1.key, ' are ', cousins)
    cousins=[]
}
function run(){
    const x = binaryTree()
    print_cousins(x, 8)
    print_cousins(x, 16)
}
run()
