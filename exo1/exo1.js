MaDiv = document.getElementById("button");
MaDiv.addEventListener("click", Click);

function Click(evenement)
{
    var long = window.prompt("Saisir une largueur:");
    var larg = window.prompt("Saisir une longueur:");
    var aire = long * larg;
    var perimetre = long*2 + larg*2; 
    alert("aire:" + aire + "\nperimetre" + perimetre);
}