// lst1 = ["Aaa", "sklj", "asjdasd", "qwerew"]

// console.log(lst1.join("--"));

// lst1 = ["Banana", "Orange", "Apple", "Mango"];
// var1 = lst1.slice(0, 2);
// console.log(lst1, "Returned value", var1);

// a = 10
// if (a !== 12) {
//     console.log("true");
// }
// console.log("aaaaa");

// god = prompt("Godine: ");
// if (god >= 18) {
//     alert("punoletan");
// }

// spList = ["lemon"]
// choice = 0;
// while (choice !== 3) {
//     choice = parseInt(prompt("0. Show list: \n1. Add Element: \n2. Remove last added element: \n3. End: "));
//     if (choice === 0) {
//         alert(spList);
//     }
//     else if (choice === 1) {
//         el = prompt("Enter an element: ");
//         if (el.length > 7) {
//             alert("element too long");
//         } else {
//             spList.push(el);
//         }
//     }
//     else if (choice === 2) {
//         spList.pop();
//     } 
//     else {
//         break;
//     }
// }

// if (prompt("broj: ")%2==0) {
//     alert("paran broj")
// } else {
//     alert("neparan broj");
// }    

// input = parseInt(prompt("Enter a number: "));

// if (input%3 == 0 && input%5 == 0) {
//     console.log("fizzbuzz");
// } else if (input%3 == 0) {
//     console.log("fizz")
// } else if (input%5 == 0) {
//     console.log("buzz")
// }

// input1 = parseInt(prompt("Enter a number: "));
// input2 = parseInt(prompt("Enter another number: "));

// if (input1 > input2) {
//     console.log(`${input1} greater than ${input2}`);
// } else if (input1 < input2) {
//     console.log(`${input2} greater than ${input1}`);
// } else if (input1 === input2) {
//     console.log(`${input1} equals ${input2}`);
// } else if (input1===0 || input2===0) {
//     console.log("both numbers are 0")
// }

// switch ("nesto1") {
//     case "nesto1":
//         console.log("nesto1");
//         break;
//     case "nesto2":
//         console.log("nesto2");
//         break;
//     default:
//         console.log("pogresan unos");
//         break;
// }

// switch (prompt("Enter a number 1-7: ").toLowerCase().trim()) {
//     case "ponedeljak":
//         console.log("ponedeljak");
//     case "utorak":
//         console.log("utorak");
//     case "sreda":
//         console.log("sreda");
//     case "cetvrtak":
//         console.log("cetvrtak");
//     case "petak":
//         console.log("petak");
//     case "subota":
//         console.log("subota");
//     case "nedelja":
//         console.log("nedelja");
//     default:
//         console.log("invalid");
// }

// input = prompt("Enter a string: ");
// arr = []

// for (let i; i < input.length; i++) {
//     arr.join(input[i]);
// }

// guess = 0;
// num = Math.random() * 11;
// while (guess !== num) {
//     guess = parseInt(prompt("Enter your guess number: "));
//     if (guess === num) {
//         console.log("correct");
//         break;
//     } else if (guess > num) {
//         console.log("too large");
//     } else if (guess < num) {
//         console.log("too low");
//     } else {
//         console.log("invalid");
//     }
// }

// for (i=0; i<5; i++) {
//     console.log("a");
// }

// ran = parseInt(prompt("Enter a range: "));
// str = prompt("enter something: ");

// for (i=0; i<ran; i++) {
//     console.log(str);
// }

// num1 = parseInt(prompt("enter a num: "));
// num2 = parseInt(prompt("enter a num: "));

// for  (i=num1; i<num2; i++) {
//     console.log(i);
// }

// rang = parseInt(prompt("Enter a range: "))
// str = "*"
// for (i=0; i<rang; i++) {
//     console.log(str);
//     str += " *"
// }

// for (i=0; i<5; i++) {
//     console.log("a");
//     for (j=0; j<5; j++)
// }

// a = parseInt(prompt("a: "))
// b = parseInt(prompt("b: "))

// if (a%b == 0) {
//     console.log("deljiv");
// } else {
//     console.log("nedeljiv");
// }


// liste = ["apple", "banana", "kiwi"]

 //var1 = {
 //    firstname: "aaa",
 //    lastname: "bbb",
 //    nesto:true
 //};

//fact = parseInt(prompt("Enter a num: "));
//result = 1;
//for (i = 1; i <= fact; i++) {
//    result *= i;
//}

//console.log(result);

function formatter(string) {
    return string[0].toUpperCase() + string.substr(1).toLowerCase();
}

console.log(formatter(prompt("word: ")));

