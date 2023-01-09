const no01 = document.querySelector(".no1");
const no02 = document.querySelector(".no2");
const no03 = document.querySelector(".no3");
const no04 = document.querySelector(".no4");
const no05 = document.querySelector(".no5");
const accept = document.querySelector(".yes-accept")
const yes = document.querySelector(".yes");
const text = document.querySelector(".text");
const anime = document.querySelector(".anime")

no03.addEventListener("mouseover", trocaNo);

function trocaNo(){
    no03.classList.remove("show");
    no01.classList.add("show");
}

no01.addEventListener("mouseover", trocaNo2);

function trocaNo2(){
    no01.classList.remove("show");
    no04.classList.add("show");
}

no04.addEventListener("mouseover", trocaNo3);

function trocaNo3(){
    no04.classList.remove("show");
    no02.classList.add("show");
}

no02.addEventListener("mouseover", trocaNo4);

function trocaNo4(){
    no02.classList.remove("show");
    no05.classList.add("show");
}

no05.addEventListener("mouseover", trocaNo5);

function trocaNo5(){
    no05.classList.remove("show");
    no03.classList.add("show");
}




yes.addEventListener("click", aceita);

function aceita(){
    no01.classList.add("hidden");
    no02.classList.add("hidden");
    no03.classList.add("hidden");
    no04.classList.add("hidden");
    no05.classList.add("hidden");
    yes.classList.add("hidden");
    text.classList.add("hidden");
    anime.classList.add("show")

    accept.classList.add("show");
}



// LUCIFER PASSOU POR AQUI
