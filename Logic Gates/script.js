
//AND gate code
document.getElementById("andA").onchange = updateAND;
document.getElementById("andB").onchange = updateAND;

function updateAND(){
    const a = document.getElementById("andA").checked;
    const b = document.getElementById("andB").checked;

    if(a && b){
        document.getElementById("outAND").checked = true;
    }
    else{
        document.getElementById("outAND").checked = false;
    }

}

//OR gate code
document.getElementById("orA").onchange = updateOR;
document.getElementById("orB").onchange = updateOR;

function updateOR(){
    const a = document.getElementById("orA").checked;
    const b = document.getElementById("orB").checked;

    //instead of using an IF statement...
    document.getElementById("outOR").checked = a || b;
}

//NOT gate
document.getElementById("notA").onchange = updateNOT;

function updateNOT(){
    const a = document.getElementById("notA").checked;
    document.getElementById("outNOT").checked = !a;
}
