
var filePathForRo ="./Languages/IT/romana.json";
var filePathForEn ="./Languages/IT/english.json";
var filePathForEs ="./Languages/IT/spanish.json";
var filePathForDe ="./Languages/IT/german.json";
var filePathForCa ="./Languages/IT/catalan.json";
const langRo="Ro";
const langDe="De";
const langEn="En";
const langCa="Ca";
const langEs="Es";


	function getLanguageFile(nameOfFlag){

//	if(nameOfFlag == null) {console.log("Something went bad!");return filePathForCa;} //don't know why this happens, have to figure out in next release
        if (nameOfFlag.toUpperCase() === langRo.toUpperCase()) { console.log("Changed language to Ro"); return filePathForRo;  }
        else if (nameOfFlag.toUpperCase() === langEn.toUpperCase()) {  console.log("Changed language to En"); return filePathForEn; }
        else if (nameOfFlag.toUpperCase() === langEs.toUpperCase()) {  console.log("Changed language to Es"); return filePathForEs; }
         else if (nameOfFlag.toUpperCase() === langDe.toUpperCase()) {  console.log("Changed language to De"); return filePathForDe; }
         else if (nameOfFlag.toUpperCase() === langCa.toUpperCase()) {  console.log("Changed language to Ca"); return filePathForCa; }
        else { console.log("No changes done!"); return "none"; }
	}

	function changeLanguage(flag){
    var data = getFolderDataIntoMap(flag);
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



