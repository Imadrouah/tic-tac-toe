let span = document.querySelector(".choice span");
let blocks = document.querySelectorAll("table td");
let stat = document.querySelector(".status");
let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let counter = 0;
let px = [];
let po = [];
document.body.classList.add("o");
span.textContent = "X";
span.classList.add("rd");
blocks.forEach((block, i) => {
    block.addEventListener("click", () => {
        if (counter <= 9 && !block.classList.contains("click")) {
            document.body.classList.toggle("o");
            document.body.classList.toggle("x");
            block.classList.add("click");
            counter++;
            block.textContent = document.body.className;
            if (document.body.className == "x") {
                span.textContent = "O";
                px.push(i);
                block.classList.remove("bl");
                block.classList.add("rd");
                span.classList.add("bl");
                span.classList.remove("rd");
            } else if (document.body.className == "o") {
                block.classList.add("bl");
                block.classList.remove("rd");
                span.classList.remove("bl");
                span.classList.add("rd");
                span.textContent = "X";
                po.push(i);
            }
            if (check(px, po) == "x") {
                stat.querySelector(".who").innerHTML =
                    "<span class='rd'>Player 1 (X)</span> wins!";
                stat.classList.add("show");
            } else if (check(px, po) == "o") {
                stat.querySelector(".who").innerHTML =
                    "<span class='bl'>Player 2 (O)</span> wins!";
                stat.classList.add("show");
            }
        }
        if (check(px, po) == "even" && counter == 9) {
            stat.querySelector(".who").textContent = "It's a draw!";
            stat.classList.add("show");
        }
    });
});
function check(p1, p2) {
    let winner = "even";
    win.forEach((e) => {
        let c1 = 0;
        let c2 = 0;
        p1.forEach((el) => {
            e.forEach((n) => {
                if (n == el) {
                    c1++;
                }
            });
        });
        p2.forEach((el) => {
            e.forEach((n) => {
                if (n == el) {
                    c2++;
                }
            });
        });
        if (c1 == 3) {
            winner = "x";
        } else if (c2 == 3) {
            winner = "o";
        }
    });
    return winner;
}
stat.querySelector(".relo").addEventListener("click", () => {
    window.location.reload();
});
