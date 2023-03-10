function boucle() {
    var tableau = [];
    for (var i = 0; i < 3; i++) {
      tableau.push(i*i);
    }
    alert("Le tableau est : " + tableau);
  }
  
function boucle2() {
    var longueur = parseInt(prompt("Entrez la longueur du tableau :"));
    var tableau = [];
    for (var i = 0; i < longueur; i++) {
      tableau.push(i*i);
    }
    alert("Le tableau est : " + tableau);
}
  