a = 3;
b = 2;

MaDiv = document.getElementById("button");
MaDiv.addEventListener("click", multiple);

function multiple (x=8)
{
   return x*3;
}

function affiche(){
    alert(multiple(a));
    alert (multiple(b));
    alert (multiple());
}