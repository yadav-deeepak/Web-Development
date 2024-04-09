console.log("working");

// VISUALIZING CALL STACK
function one(){
    return 1;
}

function two(){
    return one()+one();
}

function three(){
    let ans = two()+one();
    console.log(ans);
}

three();
// first two() is called and then it will call one() one function will return 1 and it will be removed from the call stack then two function wil executed and it will return 2 as output and it will be removed from the stack at last three() will be executed.