MaDiv = document.getElementById("button");
MaDiv.addEventListener("click", Click);

function Click(evenement)
{
    var long = window.prompt("Saisir une longueur: ");
    
    var perimetre = 2* long * Math.PI ;
    var aire = Math.PI * long ; 

    alert("Aire: " + aire + "\nPerimetre: " + perimetre);
}