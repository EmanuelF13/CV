"use strict";
function cookCV(){
console.log("Working Cook");

document.getElementById('IT_EAE').style.display = 'none';
document.getElementById('IT_ESD').style.display = 'none';
document.getElementById('IT_EA').style.display = 'none';
document.getElementById('COOK_MP').style.display = 'block';
document.getElementById('SELL_RDS').style.display = 'block';
document.getElementById('COOK_PF').style.display = 'block';
document.getElementById('COOK_Class').style.display = 'block';
document.getElementById('EMP').style.display = 'none';
document.getElementById('ELP').style.display = 'none';
document.getElementById('EMC').style.display = 'none';
document.getElementById('ELC').style.display = 'none';
document.getElementById('VTY').style.display = 'none';
document.getElementById('CTT').style.display = 'none';
document.getElementById('TS').style.display = 'none';
document.getElementById('AP').style.display = 'none';
document.getElementById('PS').style.display = 'none';
document.getElementById('AL').style.display = 'none';
change_attribute_pic_cook();


console.log("Finish styling!")
}


function change_attribute_pic_cook() {
console.log("Removing picture");
        document.getElementById('cvFoto').style.visibility = "hidden";
}


var allPaths= [filePathForRo, filePathForEn,filePathForEs, filePathForDe, filePathForCa];


function checkReplacementStatus(){
 return allPaths.some(str => str.includes("IT")) || allPaths.some(str => str.includes("Psychology")) ;
}
function cookLang(){
    console.log(checkReplacementStatus());
    filePathForRo = filePathForRo.replace("IT","Cook");
    filePathForEn = filePathForEn.replace("IT","Cook");
    filePathForEs = filePathForEs.replace("IT","Cook");
    filePathForDe = filePathForDe.replace("IT","Cook");
    filePathForCa = filePathForCa.replace("IT","Cook");
        filePathForRo = filePathForRo.replace("Psychology","Cook");
        filePathForEn = filePathForEn.replace("Psychology","Cook");
        filePathForEs = filePathForEs.replace("Psychology","Cook");
        filePathForDe = filePathForDe.replace("Psychology","Cook");
        filePathForCa = filePathForCa.replace("Psychology","Cook");

    console.log("Changes to file done done!");
}