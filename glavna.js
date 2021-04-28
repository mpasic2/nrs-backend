var incrementBtn = doc.getElementsByClassName('inc');
var decrementBtn = doc.getElementsByClassName('dec');
var buyBtn = doc.getElementsByClassName('buy');
var cijene = [];
var proizvodi = [];
var kolicine = [];
var string = "";

for(var i = 0; i < incrementBtn.length; i++){
	var btn = incrementBtn[i];
	btn.addEventListener('click', function(event) {
		var btnClick = event.target;

		var input = btnClick.parentElement.children[1];

		var inputValue = input.value;

		var newValue = parseInt(inputValue) + 1;

		input.value = newValue;
	})
}

for(var i = 0; i < decrementBtn.length; i++){
	var btn = decrementBtn[i];
	btn.addEventListener('click', function(event) {
		var btnClick = event.target;

		var input = btnClick.parentElement.children[1];

		var inputValue = input.value;

		var newValue = parseInt(inputValue) - 1;

		if(newValue >= 1){
			input.value = newValue;
		}else{
			input.value = 1;
		}
	})
}


//onsole.log(sadrzajRacuna.innerHTML + "xxxxx");
//sadrzajRacuna.innerHTML = "";
//var tabela = '<table><tr id="naslovi"><td id="1">NAZIV</td><td id="2">KOLIČINA</td><td id="3">CIJENA</td></tr>';


for(var i = 0; i < buyBtn.length; i++){
	var btn = buyBtn[i];
	btn.addEventListener('click', function(event) {
		var btnClick = event.target;
		console.log(btnClick.parentElement.children[0].textContent);
		var naziv = btnClick.parentElement.children[0].textContent;
		var cijena = btnClick.parentElement.children[2].children[0].textContent;
		var kolicina = btnClick.parentElement.children[4].children[1].value;

		var x = cijena.substring(7, 12);

		sadrzaj(naziv, kolicina, x);
		/*cijene.push(x);
		proizvodi.push(naziv);
		kolicine.push(kolicina);*/
		//console.log("Ovo su proizvodi: " + proizvodi);
		//console.log("Ovo je sadržaj html-a: " + sadrzajRacuna);
		

		//string += naziv + "  " + kolicina + "  " + cijena + "<br>";

	})
}
//tabela += "</table>";

//	console.log(doc.getElementById('racun'))	



//sadrzajRacuna.innerHTML = proizvodi.toString();
//doc.getElementsByClassName('racun').innerHTML = string;

/*function nacrtajTabelu(podaci,error){
    if(error==null || error==undefined){
        
        for(var i=0;i<podaci.length;i++){
            tabela+="<tr><td>" + podaci[i].naziv + "</td><td>" + podaci[i].aktivnost + "</td><td>" + podaci[i].dan + "</td><td>" + podaci[i].start + "</td><td>" +podaci[i].end +"</tr>"  ;
        }

*/