/*
    * Problem:
    *    Given a binary tree, determine if two given nodes are cousins of each othere or not. Two nodes of binary tree are cousins of each other only if they have different parents but they have same level
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
function in_order(x, parent, level, c1, c2){
    if(x==null) return
    in_order(x.left, x, level+1, c1, c2)
    if(x.key==c1.key){
        c1.parent = parent
        c1.level = level
    }
    if(x.key==c2.key){
        c2.parent = parent
        c2.level = level
    }
    in_order(x.right, x, level+1, c1, c2)
}
function check_cousins(x, c1, c2){
    c1 = new Node(c1)
    c2 = new Node(c2)
    in_order(x, null, 0, c1, c2)
        console.log(c1, c2)
    if((c1.level == c2.level) && (c1.parent!=c2.parent)){
        console.log(`${c1.key} and ${c2.key} are cousins`)
    }else{
        console.log(`${c1.key} and ${c2.key} are not cousins`)
    }

}
function run(){
    const x = binaryTree()
    check_cousins(x, 8, 25)
    check_cousins(x, 16, 20)
}
run()
