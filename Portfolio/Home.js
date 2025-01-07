const burger=document.querySelector('.burger')
const navi=document.querySelector('.navi')
const navlogo=document.querySelector('.navlogo')
const navlist=document.querySelector('.navlist')
const cross=document.querySelector('.cross')

burger.addEventListener('click', ()=>{
	navlogo.classList.toggle('vclass');
	navlist.classList.toggle('vclass');
	navi.classList.toggle('h-nav');
})
document.getElementById("menu").onclick = function() {
            document.getElementById("menu").style.display = "none";
        }
cross.addEventListener('click', ()=>{
	navlogo.classList.toggle('vclass');
	navlist.classList.toggle('vclass');
	navi.classList.toggle('h-nav');
})
document.getElementById("close").onclick = function() {
            document.getElementById("menu").style.display = "block";
        }


var icon = document.getElementById("icon");

icon.onclick = function(){
	document.body.classList.toggle("light-theme");
	if(document.body.classList.contains("light-theme")){
		icon.src = "moon.png";
	}else{
		icon.src = "sun.png";
	}
}