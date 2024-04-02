"use strict";


function itMenuReg(){

console.log("Working IT");
document.getElementById('IT_EAE').style.display = 'block';
document.getElementById('IT_ESD').style.display = 'block';
document.getElementById('IT_EA').style.display = 'block';
document.getElementById('COOK_MP').style.display = 'none';
document.getElementById('SELL_RDS').style.display = 'none';
document.getElementById('COOK_PF').style.display = 'none';
document.getElementById('COOK_Class').style.display = 'none';
document.getElementById('EMP').style.display = 'none';
document.getElementById('ELP').style.display = 'none';
document.getElementById('EMC').style.display = 'block';
document.getElementById('ELC').style.display = 'block';
document.getElementById('VTY').style.display = 'block';
document.getElementById('CTT').style.display = 'block';
document.getElementById('TS').style.display = 'block';
document.getElementById('AP').style.display = 'block';
document.getElementById('PS').style.display = 'block';
document.getElementById('AL').style.display = 'block';
change_attribute_pic();

console.log("Finish styling!")
}


function change_attribute_pic() {
document.getElementById('cvFoto').style.visibility = "visible";
        document.getElementById('cvFoto').src = "images/IT_CV_PIC.jpg";
}

function itLang(){
console.log("Working in IT")

    filePathForRo = filePathForRo.replace("Psychology","IT");
    filePathForEn = filePathForEn.replace("Psychology","IT");
    filePathForEs = filePathForEs.replace("Psychology","IT");
    filePathForDe = filePathForDe.replace("Psychology","IT");
    filePathForCa = filePathForCa.replace("Psychology","IT");

        filePathForRo = filePathForRo.replace("Cook","IT");
        filePathForEn = filePathForEn.replace("Cook","IT");
        filePathForEs = filePathForEs.replace("Cook","IT");
        filePathForDe = filePathForDe.replace("Cook","IT");
        filePathForCa = filePathForCa.replace("Cook","IT");

    console.log("Changes to file done done!");
}


