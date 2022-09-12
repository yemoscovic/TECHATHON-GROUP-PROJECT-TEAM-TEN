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