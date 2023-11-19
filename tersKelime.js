var kelime = prompt("Kelimeyi giriniz.");

var tersKelime = "";

for (i= kelime.length-1; i>=0; i--){
 tersKelime = tersKelime + kelime[i];
}

console.log(kelime + " sinin tersi "+ tersKelime+ "'dir");