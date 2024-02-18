var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");
var i;
function opentab(tabname){
    for(i=0;i<3;i++)
    {
        document.getElementsByClassName("tab-links")[i].classList.remove("active-link");
    }
    for(y of tabcontents)
    {
        y.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}