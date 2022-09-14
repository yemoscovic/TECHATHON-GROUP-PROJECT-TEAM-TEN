var wholedoc= document;
wholedoc.addEventListener("scroll",change);
function change(){
    document.querySelector("nav").style.backgroundColor= "white";
    let navBar= document.querySelector("nav");
    navBar.classList.add("shadow");
}
//     document.getElementById("mycross").style.backgroundColor= "red";
// }
// const setTime= setTimeout(cross,10*1000);

//====================================The hambuger Javascript===========
const myNav = document.querySelector("button");
myNav.addEventListener("click" , theClick);
function theClick(){
    myNav.classList.toggle("cross");
    const navList= document.querySelectorAll("div")[2];
    navList.classList.toggle("list");
    const signPage= document.querySelectorAll("div")[3];
    signPage.classList.toggle("list");
}