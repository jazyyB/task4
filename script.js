let myDate = setInterval(myTimer, 1000);
function myTimer (){
    let d = new Date ();
    document.getElementById("date").innerHTML = d.toLocaleTimeString();

}

function myTimer (){
    let d = new Date ();
    document.getElementById("date1").innerHTML = d.toLocaleDateString();
    document.getElementById("date").innerHTML = d.toLocaleTimeString();
}


