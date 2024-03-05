import { List } from "./toDoBoard.js";
import { addList } from "./toDoList.js";


let wrapper = document.querySelector("#wrapper-list");
let input = document.querySelector(".input-text");
let addBtn = document.querySelector(".add__btn");
let allSelectDelBtn = document.querySelector(".all--select--del__btn");


wrapper.addEventListener("submit", (event) => {

    event.preventDefault();

});



addBtn.addEventListener("click", () => {

    addList();

});



input.addEventListener("keydown", (event) => {

    if(event.key === "Enter"){
        addList();
    };

});



allSelectDelBtn.addEventListener("click", () => {

    let inputAllDel = new List();
    inputAllDel.selectDel();

});