let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    })
}); 

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `We got our winner ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(patterns of winPatterns){
        console.log(patterns);
        let pos1Value = boxes[patterns[0]].innerText;
        let pos2Value = boxes[patterns[1]].innerText;
        let pos3Value = boxes[patterns[2]].innerText;

        if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                console.log("winner", pos1Value);
                showWinner(pos1Value);
            }
        }
    }
};

reset.addEventListener("click", resetGame);

