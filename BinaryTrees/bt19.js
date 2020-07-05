/*
    * Problem:
    *     Check whether given bnary tree is sum tree or not
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
function create_sum_tree(){
    x = new Node(44)
    x.left = new Node(9)
    x.right = new Node(13)
    x.left.left = new Node(4)
    x.left.right = new Node(5)
    x.right.left = new Node(6)
    x.right.right = new Node(7)
    return x
}
let check=true;
function check_sum_tree(x){
    if (x==null) return 0
    let left = check_sum_tree(x.left)
    let right = check_sum_tree(x.right)
    if(x.left==null && x.right==null){

    }else{
        if(x.key != left+right) {
            check=false
        }
    }
    let old = x.key
    x.key = left+right
    return left+right+old
}

function run(){
    const x = binaryTree()
    const y = create_sum_tree()
    check_sum_tree(x)
    if(check) console.log('Given binary tree is a sum tree')
    else console.log('Given binary tree is not a sum tree')
    check=true
    check_sum_tree(y)
    if(check) console.log('Given binary tree is a sum tree')
    else console.log('Given binary tree is not a sum tree')

}
run()
