/*
    Problem:
        Bottom view of a binary tree
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
const out = []

function bottomView(x){
    if(x==null) return
    const queue = []
    let hash_map={};
    x.side_level = 0
    queue.push(x)
    let ele
    let row_length;
    while(queue.length!=0){
        row_length = queue.length
        count=0
        while(row_length!=0){
            ele = queue.pop()
            if(Object.keys(hash_map).find((item, ind)=>item==ele.side_level)){
                hash_map[ele.side_level].push(ele.key)
                }else{
                    hash_map[ele.side_level] = [ele.key]
                }
            if(ele.left) {
                ele.left.side_level = ele.side_level-1
                queue.unshift(ele.left)
            }
            if(ele.right) {
                ele.right.side_level = ele.side_level+1
                queue.unshift(ele.right)
            }
            row_length--
        }
    }
    console.log(hash_map)
    let a = Object.keys(hash_map).sort((i,j)=>i-j)
    for(let ele of a){
        out.push(hash_map[ele].pop())
    }
}
function run(){
    const x = binaryTree()
    bottomView(x)
    console.log(out)
}
run()
