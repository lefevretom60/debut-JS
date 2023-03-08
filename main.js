function modifie()
{
    var modif = document.getElementsByName("lesdivs");
    modif.forEach(function(div) 
    {
        div.innerHTML = "Hello";
    });
}
/*exo 9 sur tag name*/
function modifclassename()
{
    var modif = document.getElementsByClassName("toto");
    for (var i=0; modif.length; i++)
    {
        modif[i].innerHTML = "Hello";
    }
}

function modiftagname() 
{
    var modif = document.getElementsByTagName("div");

    for(var i = 0; i < modif.length; i++)
    {
        modif[i].innerHTML = "Hello";
    }
}
