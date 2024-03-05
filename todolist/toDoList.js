import { List } from "./toDoBoard.js";


// list add and delete
export function addList() {


    let inputValue = document.querySelector(".input-text").value;

    let inputList = new List(inputValue);
    inputList.list();

    let input = document.querySelector(".input-text");

    input.value = "";


    let checkBoxCount = document.querySelector(".check__box");
    checkBoxCount.getAttribute("id");

    let checkBoxLabelCount = document.querySelector(".label--check__box");
    checkBoxLabelCount.getAttribute("for");

    let btnDel = document.querySelectorAll(".del__btn");
    for(let i = 0; i < btnDel.length; i++) {
        btnDel[i].addEventListener("click", () => {
            let listContent = document.querySelectorAll(".li__text");
            listContent[i].style.display = "none";
        });
    };


};