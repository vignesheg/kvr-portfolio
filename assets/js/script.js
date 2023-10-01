function slideanimate(){
    let slideBtn = document.getElementById("slide-btn");
    slideBtn.classList.add("fa-flip");

    setTimeout(()=>{
        slideBtn.classList.remove("fa-flip");
    },500);

}

    let preloader = document.getElementById("preloader");
    setTimeout(()=>{
        preloader.classList.add("hide");
    },3000);

      


