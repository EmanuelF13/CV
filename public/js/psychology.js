"use strict";
function psychologyCV(){
console.log("Working Psy");
document.getElementById('IT_EAE').style.display = 'none';
document.getElementById('IT_ESD').style.display = 'block';
document.getElementById('IT_EA').style.display = 'none';
document.getElementById('COOK_MP').style.display = 'none';
document.getElementById('SELL_RDS').style.display = 'block';
document.getElementById('COOK_PF').style.display = 'none';
document.getElementById('COOK_Class').style.display = 'none';
document.getElementById('EMP').style.display = 'block';
document.getElementById('ELP').style.display = 'block';
document.getElementById('EMC').style.display = 'none';
document.getElementById('ELC').style.display = 'none';
document.getElementById('VTY').style.display = 'none';
document.getElementById('CTT').style.display = 'none';
document.getElementById('TS').style.display = 'none';
document.getElementById('AP').style.display = 'none';
document.getElementById('PS').style.display = 'none';
document.getElementById('AL').style.display = 'none';
document.getElementById('TSs').style.display = 'block';
document.getElementById('TSaP').style.display = 'block';
change_attribute_pic_psih();

}


function change_attribute_pic_psih() {
        document.getElementById('cvFoto').style.visibility = "visible";
        document.getElementById('cvFoto').src = "images/CVPic.jpg";
}

function psyLang(){

console.log("Working in psychology");

    filePathForRo = filePathForRo.replace("IT","Psychology");
    filePathForEn = filePathForEn.replace("IT","Psychology");
    filePathForEs = filePathForEs.replace("IT","Psychology");
    filePathForDe = filePathForDe.replace("IT","Psychology");
    filePathForCa = filePathForCa.replace("IT","Psychology");
        filePathForRo = filePathForRo.replace("Cook","Psychology");
        filePathForEn = filePathForEn.replace("Cook","Psychology");
        filePathForEs = filePathForEs.replace("Cook","Psychology");
        filePathForDe = filePathForDe.replace("Cook","Psychology");
        filePathForCa = filePathForCa.replace("Cook","Psychology");

    console.log("Changes to file done done!");
}


