/*
    * Problem:
    *     Print corner node of every level in binary tree
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
function print_corners(root){
    if (root==null) return
    const q = []
    q.push(root)
    let ele, row;
    while(q.length!=0){
        let row_length = q.length
        let q_length = q.length
        row=[]
        while(row_length!=0){
            ele = q.shift()
            if(row_length==1 || row_length==q_length){
                row.push(ele.key)
            }
            if(ele.left) q.push(ele.left)
            if(ele.right) q.push(ele.right)
            row_length--
        }
        console.log(row.join(' '))
    }
}

function run(){
    const root = binaryTree()
    print_corners(root)
}
run()
