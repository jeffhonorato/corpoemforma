const itemMenu = document.querySelectorAll(".js-maquinas-item-menu");
const maquinasConteudo = document.querySelectorAll(".js-conteudo-maquinas")



//////////// CARDS PEITO ////////////
const peitoCard1 = () => {
    const imagensP = document.querySelectorAll(".js-peito-card1-imgP");
    imagensP.forEach((img) => {
        img.addEventListener("click", () => {
            const imagemG = document.querySelector(".js-peito-card1-imgG");
            imagemG.src = img.src;
        });
    });
};

const peitoCard2 = () => {
    const imagensP = document.querySelectorAll(".js-peito-card2-imgP");
    imagensP.forEach((img) => {
        img.addEventListener("click", () => {
            const imagemG = document.querySelector(".js-peito-card2-imgG");
            imagemG.src = img.src;
        });
    });
};

const peitoCard3 = () => {
    const imagensP = document.querySelectorAll(".js-peito-card3-imgP");
    imagensP.forEach((img) => {
        img.addEventListener("click", () => {
            const imagemG = document.querySelector(".js-peito-card3-imgG");
            imagemG.src = img.src;
        });
    });
};

peitoCard1();
peitoCard2();
peitoCard3();


