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

peitoCard1();


