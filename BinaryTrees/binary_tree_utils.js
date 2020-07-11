function get_stack_trace(){
    const stack = []
    function stack_track(action, item=null, print=true){
        if(action=='push'){
            stack.push(item)
            if(print) console.log(stack)
        }else if(action=='pop'){
            let ele = stack.pop()
            if(print) console.log(stack, ' => ', item)
        }
        return item
    }
    return stack_track
}
function level_order(x){
    const queue = []
    const out = []
    if(x == null) return
    queue.push(x)
    let level = 0
    let ele
    while(queue.length!=0){
        let row_length = queue.length
        let row = []
        while(row_length != 0){
            ele = queue.shift()
            row.push(ele?ele.key:ele)
            if(ele){
            if(ele.left) queue.push(ele.left)
            else queue.push(null)
            if(ele.right) queue.push(ele.right)
            else queue.push(null)
            }else{
                queue.push(null)
                queue.push(null)
            }
            row_length--
        }
        if(row.every((item, ind)=>item==null)) break
        out.push(row)
    }
    return out
}
class Node{
    constructor(key=null, left=null, right=null){
        this.key = key;
        this.left=left;
        this.right=right;
    }
}
function binaryTree(){
    const x = new Node(15)
    x.left = new Node(10)
    x.right = new Node(20)
    x.left.left = new Node(8)
    x.left.right = new Node(12)
    x.left.right.left = new Node(456)
    //x.right.left = new Node(16)
    x.right.right = new Node(25)
    x.right.right.right = new Node(45)
    return x
}
function print_binary_tree(x){
    const stack = level_order(x)
    console.log(x)
    console.log(stack)
}
//print_binary_tree(binaryTree())

module.exports = {
    'stack_track': get_stack_trace()
}
