const ferragensCard1 = () => {
    const imgPequenas = document.querySelectorAll(".js-f-card1-imgP-1")
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-f-card1-imgG-1")
            imgGrande.src = img.src;
        });
    });
};

const ferragensCard2 = () => {
    const imgPequenas = document.querySelectorAll(".js-f-card2-imgP-1")
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-f-card2-imgG-1")
            imgGrande.src = img.src;
        });
    });
};

const ferragensCard3 = () => {
    const imgPequenas = document.querySelectorAll(".js-f-card3-imgP-1")
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-f-card3-imgG-1")
            imgGrande.src = img.src;
        });
    });
};

const ferragensCard4 = () => {
    const imgPequenas = document.querySelectorAll(".js-f-card4-imgP-1")
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-f-card4-imgG-1")
            imgGrande.src = img.src;
        });
    });
};


ferragensCard1()
ferragensCard2()
ferragensCard3()
ferragensCard4()
