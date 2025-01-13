function convertTemp() {
    var c = document.getElementById('c');
    var f = (c.value)*9/5 + 32
    document.getElementById('f').value = f
}

function convertWeight(){
    var kgs = document.getElementById("kgs");
    var lbs = kgs.value*2.2
    document.getElementById('lbs').value = lbs
}

function convertDistance() {
    var km = document.getElementById("km");
    var mi = km.value * 0.62137
    document.getElementById('mi').value = mi
}