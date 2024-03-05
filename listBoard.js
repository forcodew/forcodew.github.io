export { portfolioList, List };

const portfolioList = [

    {
        title: "To do list",
        description: "오늘 할 일을 목록으로 기록해줘요.",
        url: "todolist/index.html",
    },

    {
        title: "Shopping",
        description: "선택한 품목의 가격을 합산해줘요.",
        url: "sum-products/index.html",
    },

];



class List {
    title;
    description;
    url;

    constructor(title, description, url) {
        this.title = title;
        this.description = description;
        this.url = url;
    }
    
    addList() {

        portfolioList.forEach((el) => {

            let section = document.createElement("section");

            section.innerHTML = `
            
                <div>
                    <h2>${el.title}</h2>
                    <a href=${el.url}> 자세히 보기 </a>
                </div>
                <p>${el.description}</p>
            
            `;

            document.body.appendChild(section);

        });

    }


};