export { fruitsList, Fruits };

const fruitsList = [

    {
        name: "네모 스티커",
        price: 2500,
    },

    {
        name: "동그라미 스티커",
        price: 2000,
    },

    {
        name: "삼각형 스티커",
        price: 1000,
    },

];



class Fruits {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    showInfo() {

        const section = document.createElement("section");
        document.body.appendChild(section);

        fruitsList.forEach((el) => {

            const div = document.createElement("div");
            
            div.innerHTML = `
           
                <span class="img__area"> <span></span> </span>
                <p id="${el.name}">${el.name}</p>
                <p>${el.price}원</p>
            
            `;

            section.appendChild(div);
            div.id = "products";

        });

        const divPrice = document.createElement("div");
        document.body.appendChild(divPrice);
        divPrice.id = "price__sum";

        let priceSum = document.querySelector("#price__sum");

        priceSum.innerHTML = `
        
            <span>합계 금액은 <strong>0</strong>원 입니다.</span>
        
        `;

    }


    productSum() {

        let sum = 0;

        const divProducts = document.querySelectorAll("#products");

        for(let i = 0; i < divProducts.length; i++) {

            divProducts[i].addEventListener("click", () => {

                if(fruitsList[i].name) {
                    let strongSum = document.querySelector("strong");

                    sum += fruitsList[i].price;

                    strongSum.innerHTML = `
                    
                        ${sum}
                    
                    `;
                };

            });

        };

    }

};