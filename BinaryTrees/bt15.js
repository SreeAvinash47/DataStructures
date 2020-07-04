/*
    Problem:
        Given a binary tree check whether it is complete binary tree or not
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
function height(x){
    if(x==null) return -1
    let left = height(x.left)
    let right = height(x.right)
    return 1+Math.max(left, right)
}
function bt_util(x, arr, i){
    if(x==null) return
    arr[i]=true
    bt_util(x.left, arr, 2*i+1)
    bt_util(x.right, arr, 2*i+2)
}
function check_complete_bt(x){
    let ht = height(x)
    let arr = Array.from({length: 2**(ht+1)-1}, (ite, ind)=>null)
    bt_util(x, arr, 0)
    for(let item of arr){
        if (item==null) return false
    }
    return true

}
function run(){
    const x = binaryTree()
    if(check_complete_bt(x)){
        console.log('Given binary tree is a complete one')
    }
    else{
        console.log('Given binary tree is not a complete one')
    }
}
run()
