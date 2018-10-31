
function kalkulator() {     
	let i1 = document.getElementById('num1').value ; //angka pertama   
	let i2 = document.getElementById('num2').value ; //angka kedua   

	document.getElementById('result').value = parseInt(i1) + parseInt(i2); 

	let alertPesan = document.getElementById('message');
	alertPesan.innerHTML = "Done";
	let label = document.querySelector('label');
	label.innerHTML = "<strong>Hasil dari penjumlahan</strong>";
} 

let result = document.getElementById('equiv'); 
result.addEventListener('click', kalkulator);
