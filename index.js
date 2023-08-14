document.querySelector("a.share").addEventListener("click", ()=> {
    setTimeout(()=> {
        document.querySelector("span.contact-us").classList.toggle("hide");
        document.querySelector(".profile a").classList.toggle("current");
        document.querySelector(".profile a svg").classList.toggle("svg-color");
    }, 100);
});