function countCalls(){
    let calls = 0
    return ()=>{
        console.log(calls)
        calls++
    }
}
const a = countCalls()
a()
a()
a()
