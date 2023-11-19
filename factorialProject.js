var faktoriyelsayısı = prompt("Faktöriyelinin alınmasının istediğiniz sayıyı yazınız.");

var faktoriyel = 1;

for(var i=2; i<=faktoriyelsayısı; i++){
 faktoriyel = faktoriyel*i;
}

alert(faktoriyelsayısı + "nın faktoriyeli " + faktoriyel);