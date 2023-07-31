const modalBiceps = () => {
    const btnTreino = document.querySelector(".js-btn-biceps");
    const modalBox = document.querySelector(".js-modal-biceps");
   
   
    btnTreino.addEventListener("click", () => {
        modalBox.classList.add("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.add("off");
    });

    modalBox.addEventListener("click", (e) => {
        if(e.target.id == "js-btn-fecharBiceps" || e.target.id == "js-modal-biceps") {
            modalBox.classList.remove("ativo");
            const scroll = document.querySelector(".js-scroll");
            scroll.classList.remove("off");
            const menu = document.querySelector(".js-menu-mobile");
            menu.classList.remove("desativar");
        } 
    })
};

const modalTriceps = () => {
    const btnTreino = document.querySelector(".js-btn-triceps");
    const modalBox = document.querySelector(".js-modal-triceps");
   
    
    btnTreino.addEventListener("click", () => {
        modalBox.classList.add("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.add("off");
        const menu1 = document.querySelector(".js-menu-mobile");
        menu1.classList.add("desativar");
    });

    modalBox.addEventListener("click", (e) => {
        if(e.target.id == "js-btn-fecharTriceps" || e.target.id == "js-modal-triceps") {
            modalBox.classList.remove("ativo");
            const scroll = document.querySelector(".js-scroll");
            scroll.classList.remove("off");
            const menu = document.querySelector(".js-menu-mobile");
            menu.classList.remove("desativar");
        } 
    })
};

const modalOmbro = () => {
    const btnTreino = document.querySelector(".js-btn-ombro");
    const modalBox = document.querySelector(".js-modal-ombro");
   
    
    btnTreino.addEventListener("click", () => {
        modalBox.classList.add("ativo");
        const scroll= document.querySelector(".js-scroll");
        scroll.classList.add("off");
        const menu3 = document.querySelector(".js-menu-mobile");
        menu3.classList.add("desativar");
    });

    modalBox.addEventListener("click", (e) => {
        if(e.target.id == "js-btn-fecharOmbro" || e.target.id == "js-modal-ombro") {
            modalBox.classList.remove("ativo");
            const scroll = document.querySelector(".js-scroll");
            scroll.classList.remove("off");
            const menu = document.querySelector(".js-menu-mobile");
            menu.classList.remove("desativar");
        } 
    })
};

const modalPeito = () => {
    const btnTreino = document.querySelector(".js-btn-peito");
    const modalBox = document.querySelector(".js-modal-peito");
   
    
    btnTreino.addEventListener("click", () => {
        modalBox.classList.add("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.add("off");
        const menu4 = document.querySelector(".js-menu-mobile");
        menu4.classList.add("desativar");
    });

    modalBox.addEventListener("click", (e) => {
        if(e.target.id == "js-btn-fecharPeito" || e.target.id == "js-modal-peito") {
            modalBox.classList.remove("ativo");
            const scroll = document.querySelector(".js-scroll");
            scroll.classList.remove("off");
            const menu = document.querySelector(".js-menu-mobile");
            menu.classList.remove("desativar");
        } 
    })
};

const modalPernas = () => {
    const btnTreino = document.querySelector(".js-btn-pernas");
    const modalBox = document.querySelector(".js-modal-pernas");
   
    
    btnTreino.addEventListener("click", () => {
        modalBox.classList.add("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.add("off");
        const menu5 = document.querySelector(".js-menu-mobile");
        menu5.classList.add("desativar");
    });

    modalBox.addEventListener("click", (e) => {
        if(e.target.id == "js-btn-fecharPernas" || e.target.id == "js-modal-pernas") {
            modalBox.classList.remove("ativo");
            const scroll = document.querySelector(".js-scroll");
            scroll.classList.remove("off");
            const menu = document.querySelector(".js-menu-mobile");
            menu.classList.remove("desativar");
        } 
    })
};

const modalCosta = () => {
    const btnTreino = document.querySelector(".js-btn-costa");
    const modalBox = document.querySelector(".js-modal-costa");
   
    
    btnTreino.addEventListener("click", () => {
        modalBox.classList.add("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.add("off");
        const menu6 = document.querySelector(".js-menu-mobile");
        menu6.classList.add("desativar");
    });

    modalBox.addEventListener("click", (e) => {
        if(e.target.id == "js-btn-fecharCosta" || e.target.id == "js-modal-costas") {
            modalBox.classList.remove("ativo");
            const scroll = document.querySelector(".js-scroll");
            scroll.classList.remove("off");
            const menu = document.querySelector(".js-menu-mobile");
            menu.classList.remove("desativar");
        } 
    })
};

modalBiceps();
modalTriceps();
modalOmbro();
modalPeito();
modalPernas();
modalCosta();
