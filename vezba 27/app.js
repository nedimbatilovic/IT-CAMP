// const unos = document.querySelector("#unos");
// const btn = document.querySelector(".aha");
// const div = document.querySelector(".div1");

// btn.addEventListener("click", () => {
//     ime = unos.value;
//     h1 = document.createElement("h1");
//     h1.innerText = ime;
//     div.appendChild(h1);
// });

// const container = document.querySelector(".container");
// const num = document.querySelector(".number");
// const btn = document.querySelector(".button1");

// btn.addEventListener("click", () => {
//     broj = num.value;
//     if (parseInt(broj) > 1 && parseInt(broj) < 10) {
//         h4 = document.createElement("h4");
//         container.appendChild(h4);
//         h4.innerText = "valid";
//     } else {
//         h4.innerText = "invalid";
//         container.appendChild(h4);
//     }
// });

a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

function comp(array1, array2) {
    bools = [];
    for (i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i] ** 2)) {
            bools.push(true);
        } else {
            bools.push(false);
        }
    }

    if (bools.includes(true)) {
        return true;
    } else {
        return false;
    }
}

comp(a, b);
