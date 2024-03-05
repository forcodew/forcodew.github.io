
// list
export class List {
    constructor(input) {
        this.input = input;
    }

    list() {
        const ul = document.querySelector(".ul__area");

        const li = document.createElement("li");
        li.setAttribute("class", "li__text");

        let liList = document.querySelectorAll(".li__text");
        let counter = 0;
        for(let i = 0; i < liList.length; i++) {
        counter++;
        };

        li.innerHTML = `
        
            <label class="label--check__box" for=${counter}></label>
            <input type="checkbox" class="check__box" id=${counter}>
            <p class="input__p"> ${this.input} </p>
            <button class="del__btn" type="button">삭제</button>

        `;

        ul.appendChild(li);

        if(this.input === "") {
            li.style.display = "none";
        };

    }

    selectDel() {
        const checkBox = document.querySelectorAll(".check__box");
        const listContent = document.querySelectorAll(".li__text");

        for(let i = 0; i < checkBox.length; i++) {
            if(checkBox[i].checked) {
                listContent[i].style.display = "none";
            };
        };
    }
};