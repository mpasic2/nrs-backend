//onsole.log(sadrzajRacuna.innerHTML + "xxxxx");
//sadrzajRacuna.innerHTML = "";
function sadrzaj(proizvod, kolicina, cijena){
	var tabela = '<table><tr id="naslovi"><td id="1">NAZIV</td><td id="2">KOLIČINA</td><td id="3">CIJENA</td></tr>';

	tabela += "<tr><td>" + proizvod + "</td><td>" + kolicina + "</td><td>" + cijena + "</td></tr>";
	console.log(tabela);
		/*cijene.push(x);
		proizvodi.push(naziv);
		kolicine.push(kolicina);*/
		//console.log("Ovo su proizvodi: " + proizvodi);
		//console.log("Ovo je sadržaj html-a: " + sadrzajRacuna);
		

		//string += naziv + "  " + kolicina + "  " + cijena + "<br>";

	
	tabela += "</table>";

	document.getElementById('racun').innerHTML = tabela;	
}


//sadrzajRacuna.innerHTML = proizvodi.toString();
//doc.getElementsByClassName('racun').innerHTML = string;

/*function nacrtajTabelu(podaci,error){
    if(error==null || error==undefined){
        
        for(var i=0;i<podaci.length;i++){
            tabela+="<tr><td>" + podaci[i].naziv + "</td><td>" + podaci[i].aktivnost + "</td><td>" + podaci[i].dan + "</td><td>" + podaci[i].start + "</td><td>" +podaci[i].end +"</tr>"  ;
        }

*/