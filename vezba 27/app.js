function showResult(some) {
    console.log(some);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, showResult);

//

greeting = function (name) {
    console.log("Hello" + name);
};

function Name(arg1) {
    var name = "Aaaa";
    arg1(name);
}

Name(greeting);
