function outer(a){
    console.log("The value of a list:"+ a);
    function innerFun(b){
        console.log("the value of b is:"+b);
        return a+b;

    }
    return innerFun;
}

const addTen = outerFun(10);
console.log(addTen(5));