 let boxes = document.querySelectorAll(".box");
 let resetbtn = document.querySelector(".resetbtn");
 let newGameBtn = document.querySelector(".newBtn");
 let msgContainer = document.querySelector(".msg-container");
 let msg = document.querySelector(".msg");

 let turnO =  true// playerX , playerO

 const winPatterns = [
    [0 , 1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [3 , 4 , 5],
    [6 , 7 , 8],
 ];

 const resetGame = () =>
 {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
 };
 


boxes.forEach((box) => {
    box.addEventListener("click" , () => {
       
        if(turnO) //playerO
        {
            box.innerText = "O";
            turnO = false; //Ab playerX ki turn aa gayi
        }else{ //playerX
            box.innerText = "X";
            turnO = true;// Ab playerO ki turn aa gayi
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () =>{
for(let box of boxes)
    {
        box.disabled = true;
    }

};

const enableBoxes =() => {
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner =(winner) =>{
    msg.innerText =`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
   
};

const checkWinner = () => {
    for(let pattern of winPatterns ){
            let positionVal1 = boxes[pattern[0]].innerText;
            let positionVal2 = boxes[pattern[1]].innerText;
            let positionVal3 = boxes[pattern[2]].innerText;
            if(positionVal1 != "" && positionVal2 != "" && positionVal3 != ""){
                if(positionVal1 === positionVal2 && positionVal2 === positionVal3){
                    console.log("Winner",positionVal1);
                    showWinner(positionVal1);//positionVal1 par jo value wo hamari winner hogi
                }
            }
    }
};
 
newGameBtn.addEventListener("click" ,resetGame);
resetbtn.addEventListener("click" ,resetGame);