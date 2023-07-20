const ferragensCard1 = () => {
    const imgPequenas = document.querySelectorAll(".js-f-card1-imgP-1")
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-f-card1-imgG-1")
            imgGrande.src = img.src;
        });
    });
};

ferragensCard1()
