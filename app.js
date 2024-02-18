const themeToggler=document.querySelector(".dark-light-button");
const changeText=document.getElementById("dark-to-light-txt");

themeToggler.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme");
    const is_dark_mode=document.body.classList.contains("dark-theme")

    window.localStorage.setItem("dark-mode",is_dark_mode);

    if (document.body.classList.contains("dark-theme")) {
        changeText.innerHTML='Light';
        
    } else {
        changeText.innerHTML='Dark';
    }
        
});