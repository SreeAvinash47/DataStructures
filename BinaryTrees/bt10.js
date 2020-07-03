/*
 * Problem:
 *  Given a perfect binary tree, write an efficient algorithm to print all nodes of it in specific order. We need to print nodes of every level in alternating left and right
 * Top-Down / Bottom-up */

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
let out = []
function print_topDown_and_bottomUp(x, topDown=true){
    if(x==null) return
    const stack1 = []
    const stack2 = []
    let stack1Length
    let stack2Length
    let out_temp
    let ele
    if(x.left) stack1.push(x.left)
    if(x.right) stack2.push(x.right)
    out.push([x.key])
    while((stack1.length+stack2.length)!=0){
        stack1Length = stack1.length
        stack2Length = stack2.length
        out_temp = []
        while((stack1Length+ stack2Length) !=0){
            ele = stack1.pop()
            out_temp.push(ele.key)
            if(ele.left) stack1.unshift(ele.left)
            if(ele.right) stack1.unshift(ele.right)
            stack1Length--

            ele = stack2.pop()
            out_temp.push(ele.key)
            if(ele.right) stack2.unshift(ele.right)
            if(ele.left) stack2.unshift(ele.left)
            stack2Length--
        }
        out.push(out_temp)
    }
    if(topDown){
        out = out.reduce((aggr, item)=>aggr.concat(item), [])
    }else{
        out = out.reverse().reduce((aggr, item)=>aggr.concat(item), [])
    }
}
function run(){
    x=binaryTree()
    print_topDown_and_bottomUp(x, false)
    console.log(out)
}
run()
