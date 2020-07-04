/*
    Problem:
        Given a binary tree and a node in it, write an efficinent algorithm to find its next node in same laevel as given node
    */
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
function find_node(x, inp){
    const queue = []
    let ele
    let row_length;
    let flag=false
    queue.push(x)
    while(queue.length!=0){
        row_length = queue.length
        while(row_length!=0){
            ele = queue.pop()
            if(flag==true){
                return ele.key
            }
            if(ele.key==inp){
                flag=true
            }
            if(ele.left) queue.unshift(ele.left)
            if(ele.right) queue.unshift(ele.right)
            row_length--
        }
        if((flag==true)) return
    }
}
function run(){
    const x = binaryTree()
    console.log(find_node(x, 15))
    console.log(find_node(x, 10))
    console.log(find_node(x, 16))
    console.log(find_node(x, 25))
}
run()
