/*
 * Problem:
    Spiral order tree traversal
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
const out = []
function spiral_order(x, flag=true){
    if(x==null) return
    const deque=[]
    deque.push(x)
    let row_length;
    let ele;
    while(deque.length!=0){
        row_length = deque.length
        while(row_length!=0){
            if(flag){
                ele = deque.pop()
                if(ele.left) deque.unshift(ele.left)
                if(ele.right) deque.unshift(ele.right)
            }else{
                ele = deque.shift()
                if(ele.right) deque.push(ele.right)
                if(ele.left) deque.push(ele.left)
            }
            out.push(ele.key)
            row_length--
        }
        flag = !flag
    }
}
function run(){
    x = binaryTree()
    spiral_order(x, false)
    console.log(out)
}
run()
