const cards = document.querySelectorAll(".card");
const hide = document.querySelector(".hide");
const content = document.querySelector(".content");
const close = document.querySelector(".close");

for(let card of cards){
    card.addEventListener("click", function(){
        const img = card.querySelector("img");
        const h1 = card.querySelector("h3");
        const p = card.querySelector("span");

        hide.classList.add("active");

        content.querySelector("img").src = img.src;
        content.querySelector("h1").innerHTML = h1.textContent;
        content.querySelector("p").innerHTML = p.textContent;

    })
};

document.querySelector(".close").addEventListener("click", function(){
    hide.classList.remove('active')

    content.querySelector("img").src = "";
    content.querySelector("h1").innerHTML = "";
    content.querySelector("p").innerHTML = "";
})
