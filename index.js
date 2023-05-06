const nominaly = [1, 2, 5, 10, 20, 50];
var iledodal = document.getElementById("cena");
var napoj = document.getElementsByName("input");
var napoj_r = document.getElementsByName("napoj");
var resztas = document.getElementById("dawajhajs");
var ilejest = 0;
var odp = document.getElementById("polezielone");
var dodajnapoj = document.getElementById("napoj");

//Wpłacono:0zł<br/>Pozostało do zapłaty:0zł<br/>reszta:0zł
function dawaj(){
var ktury_napuj = 0;
for(let i in napoj){
	if(napoj[i].checked){
		ktury_napuj = i;
	}
}

const how = parseInt(iledodal.value);
console.log(how);
for(let huk in nominaly){
	if(how === nominaly[huk]){
		ilejest += parseInt(iledodal.value);
		let cena = napoj[ktury_napuj].value;
		let ilezostalo = cena - ilejest;
		if(ilezostalo < 0 ){ilezostalo = 0;}
		let reszta = ilejest - cena;
		let tab =[];
		odp.innerHTML = "Wpłacono:"+ilejest+"zł<br/>Pozostało do zapłaty:"+ilezostalo+"zł<br/>reszta:"+reszta+"zł";
		if(reszta >= 0){
			let zmienna_r = reszta;
			dodajnapoj.src = napoj_r[ktury_napuj].src;
			let ile_nominalas = nominaly.length - 1;
			while(ile_nominalas >= 0){
				while(nominaly[ile_nominalas] <= zmienna_r){
					zmienna_r -= nominaly[ile_nominalas];
					tab.push(nominaly[ile_nominalas]);
				}
				ile_nominalas--;
			}
			ilejest=0;
			ilezostalo=0;
			reszta=0;
			resztas.innerHTML = "";
			for(let i of tab){
				console.log(i);
				switch (i) {
					case 1:
						resztas.innerHTML +='<div class="onezl">1 zł</div>';
					break;
					case 2:
						resztas.innerHTML +='<div class="twozl">2 zł</div>';
					break;
					case 5:
						resztas.innerHTML +='<div class="fivezl">5 zł</div>';
					break;
					case 10:
						resztas.innerHTML +='<div class="tenzl">10 zł</div>';
					break;
					case 20:
						resztas.innerHTML +='<div class="twentyzl">20 zł</div>';
					break;
					case 50:
						resztas.innerHTML += '<div class="fiftyzl">50 zł</div>';
					break;
					default:
						resztas.innerHTML += 'hmm';
					break;
				}
			}
		}							
	}
}
}