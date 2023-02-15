const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");
var clic = 1;
const burger = document.querySelector("nav h1");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

desplazarArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

function mostrarYocultar(){ 
   if(clic==1){
   document.getElementById("video").style.height = "215px";
   clic = clic + 1;
   } else{
       document.getElementById("video").style.height = "0px";      
    clic = 1;
   }   
}

function mostrarYocultar1(){ 
	if(clic==1){
	document.getElementById("video1").style.height = "215px";
	clic = clic + 1;
	} else{
		document.getElementById("video1").style.height = "0px";      
	 clic = 1;
	}   
 }

 function mostrarYocultar2(){ 
	if(clic==1){
	document.getElementById("video2").style.height = "215px";
	clic = clic + 1;
	} else{
		document.getElementById("video2").style.height = "0px";      
	 clic = 1;
	}   
 }


burger.addEventListener("click", () => {
	ul.classList.toggle("show");
  });

  const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

