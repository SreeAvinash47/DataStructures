/*
    * Problem:
    *     Given a binary trr, a compltee path is defines as path from root to a leaf. The sum of all nodes in a path is defines as the sum of that path. Given a number K, remove nodes from the reee which ler on a path having sum less than K
    * */
class Node{
    constructor(key=null, left=null, right=null){
        this.key = key;
        this.left=left;
        this.right=right;
    }
}
function binaryTree(){
    const x = new Node(6)
    x.left = new Node(3)
    x.right = new Node(8)
    x.right.left = new Node(4)
    x.right.right = new Node(2)
    x.right.right.right = new Node(3)
    x.right.left.left = new Node(1)
    x.right.left.right = new Node(7)
    return x
}
function truncate_to_sum(root, sum, k){
    if(root==null) return
    sum += root.key
    root.left = truncate_to_sum(root.left, sum, k)
    root.right = truncate_to_sum(root.right, sum, k)
    if((root.left==null && root.right==null) && sum<k) return
    return root
}

function run(){
    const root = binaryTree()
    console.log(root)
    truncate_to_sum(root, 0, 20)
    console.log(root)
}
run()
