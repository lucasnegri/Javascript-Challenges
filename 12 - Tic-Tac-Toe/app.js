"use strict";

const Player = (sign) => {
    this.sign = sign;
    
    const getSign = () =>{
        return sign
    };

    return {getSign};
}



const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
    
    const setField = (index, sign) => {
        if(index > board.length) return;
        board[index] = sign;
    };

    const getField = (index) => {
        if(index > board.length) return;
        return board[index];
    };

    const reset = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };

    return {setField, getField, reset};
})();





const displayController = (() => {
    const fields = document.querySelectorAll(".field");
    const message = document.querySelector("#message");
    const resetButton = document.querySelector("#reset");

    fields.forEach((field) =>
        field.addEventListener("click", (e) => {
            if(gameController.getIsOver() || e.target.textContent !== "") return;
            gameController.playRound(parseInt(e.target.dataset.index));
            updateGameBoard();
        })
    );;

    resetButton.addEventListener("click", () => {
        gameBoard.reset();
        gameController.reset();
        updateGameBoard();
        setMessageElement("Player X's turn");
    });

    const updateGameBoard = () => {
        for(let i=0; i<fields.length; i++){
            fields[i].textContent = gameBoard.getField(i);
        }
    };

    const setResultMessage = (result) => {
        if(result === "draw") setMessageElement("It's a draw!");
        else setMessageElement(`Player ${result} won!`);
    };

    const setMessageElement = (text) => {
        message.textContent = text;
    };

    return {setResultMessage, setMessageElement};
})();



const gameController = (() => {
    const playerX = Player("X");
    const playerO = Player("O");
    let round = 0;
    let isOver = false;

    const playRound = (fieldIndex) => {
        gameBoard.setField(fieldIndex, getCurrentPlayer().getSign());
        if(checkForWinner(fieldIndex)) {
            displayController.setResultMessage(getCurrentPlayer().getSign());
            isOver = true;
            return;
        }
        if(round === 9) {
            displayController.setResultMessage("draw");
            isOver = true;
            return;
        }
        round++;
        displayController.setMessageElement(`Player ${getCurrentPlayer().getSign()}'s turn`);
    };

    const getCurrentPlayer = () => {
        return round % 2 === 0 ? playerX : playerO;
    };

    const checkForWinner = (fieldIndex) => {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winningCombos.filter((combo) => {
            return combo.includes(fieldIndex) && combo.every((index) => gameBoard.getField(index) === getCurrentPlayer().getSign());
        }).length > 0;
    };

    const getIsOver = () => {
        return isOver;
    };

    const reset = () => {
        round = 1;
        isOver = false;
    };

    return {playRound, getIsOver, reset};
})();
        






