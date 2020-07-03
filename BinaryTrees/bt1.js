/*
Problem:
    Write an efficient algorithm to check if two binary trees are identical or not. i.e if they have identical structure and their contents are also same
*/
class Node{
    constructor(key=null, left=null, right=null){
        this.key = key;
        this.left=left;
        this.right=right;
    }
}

function isIdentical(x, y){
    if((x===null)&&(y===null)) return true
    return ((x && y) &&(x.key===y.key)&&(isIdentical(x.left, y.left))&&(isIdentical(x.right, y.right)))
}

function run(){
    // construct first tree
    x = new Node(15)
    x.left = new Node(10)
    x.right = new Node(20)
    x.left.left = new Node(8)
    x.left.right = new Node(12)
    x.right.left = new Node(16)
    x.right.right = new Node(25)

    // construct second tree
    y = new Node(15)
    y.left = new Node(10)
    y.right = new Node(20)
    y.left.left = new Node(8)
    y.left.right = new Node(12)
    y.right.left = new Node(16)
    y.right.right = new Node(25)

    if(isIdentical(x,y)){
        console.log('Both binary trees are identical')
    }else{
        console.log('Both binary trees are not identical')
    }
}
run()