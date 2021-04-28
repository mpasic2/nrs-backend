function scrollNav(){
	var nav = document.getElementById('sticky');
	if(window.pageYOffset > 220){
		nav.classList.add('sticky');
	}else{
		nav.classList.re
	}
}

window.onscroll = function(){
	scrollNav();
}