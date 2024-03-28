"use strict";
var filePathForRo ="./Languages/IT/romana.json";
var filePathForEn ="./Languages/IT/english.json";
var filePathForEs ="./Languages/IT/spanish.json";
var filePathForDe ="./Languages/IT/german.json";
var filePathForCa ="./Languages/IT/catalan.json";


	function getLanguageFile(nameOfFlag){
        if (nameOfFlag === "Ro") { console.log("Changed language to Ro"); return filePathForRo;  }
        else if (nameOfFlag === "En") {  console.log("Changed language to En"); return filePathForEn; }
        else if (nameOfFlag === "Es") {  console.log("Changed language to Es"); return filePathForEs; }
         else if (nameOfFlag === "De") {  console.log("Changed language to De"); return filePathForDe; }
         else if (nameOfFlag === "Ca") {  console.log("Changed language to Ca"); return filePathForCa; }
        else { console.log("No changes done!"); return "none"; }
	}

	function changeLanguage(flag){
    let data = getFolderDataIntoMap(flag);
    if (data === "none") {
    throw new Error("Something went badly wrong!");
    }
    else {
            data.forEach((value, key) => {
            let k = `${key}`;
            let t = `${value}`;
            try{
            document.getElementById(k).innerHTML =t;
            } catch (e){
            console.log(`The error I received are from the pair with value ${k} and key with value ${t}.`);
            }
                });
    }

	}



	function getFolderDataIntoMap(flag){
	        let request = new XMLHttpRequest();
	        let pathToLangFile =getLanguageFile(flag.value);
	        if( pathToLangFile!== "none")
	        {
	                    request.open("GET", pathToLangFile, false);
                        request.send(null)
                        const map = new Map(Object.entries(JSON.parse(request.responseText)));
                        return map;
	        }
        console.log("The language specified is not in my data base");
	}
function converter(){
console.log("Converting HTML to PDF");
window.print();
}

