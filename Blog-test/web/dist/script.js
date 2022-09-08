//operace s navbarem
const navBar = document.querySelector("#side-nav");
openNav = () => {
    navBar.style.width = "300px";
}
closeNav = () => {
    navBar.style.width = "0px";
}

//klik na článek
writeInfo = (e) => {
    console.log(e.innerText);
}

//výpis do konzole
document.addEventListener("DOMContentLoaded", () => { 
    //počet příspěvků v dokumentu  
    let countOfArticles = document.querySelectorAll(".article-text-positioning").length;
    console.log("Počet článků v dokumentu: " + countOfArticles);

    //průměrná výška příspěvků - počítám z obrázků, neboť divy maj marginy
    let articles = document.querySelectorAll(".article-text-positioning img");
    let totalHeight = 0;
    for(let i = 0; i < articles.length; i++){
        totalHeight += articles[i].offsetHeight;
    }
    console.log("Průměrná výška článků v dokumentu: " + (totalHeight/countOfArticles) + "px");

    //součet délek nadpisů příspěvků
    let headings1 = document.querySelectorAll(".article-text-positioning h1");
    let headings2 = document.querySelectorAll(".article-text-positioning h2");
    let countChars = 0;
    for(let j = 0; j < headings1.length; j++){
        countChars += headings1[j].textContent.length;
    } 
    for(let x = 0; x < headings2.length; x++){
        countChars += headings2[x].textContent.length;
    } 
    console.log("Součet délek všech nadpisů je: " + (countChars) + " písmen");
});

