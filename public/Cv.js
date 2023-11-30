"use strict";
//window.jsPDF = window.jspdf.jsPDF;

// Convert HTML content to PDF

/*
function Convert_HTML_To_PDF() {
    var doc = new jsPDF();

    // Source HTMLElement or a string containing HTML.
    var elementHTML = document.querySelector('.container:nth-child(12)');
    //String( $('#contentToPrint').html().replace('\n','').replace(/\s/g, ''));
    //document.querySelector("#contentToPrint");

    doc.html(elementHTML, {
        callback: function(doc) {
            // Save the PDF
            doc.save('document-html.pdf');
        },
        margin: [10, 10, 10, 10],
        autoPaging: 'text',
        x: 0,
        y: 0,
        width: 190, //target width in the PDF document
        windowWidth: 675 //window width in CSS pixels
    });
}

function convertHTMLToPDF() {
	const { jsPDF } = window.jspdf;

	var doc = new jsPDF('l', 'mm', [1200, 1210]);
	var pdfjs = document.querySelector('.container');

	doc.html(pdfjs, {
		callback: function(doc) {
			//doc.save("output.pdf");
            doc.output('dataurlnewwindow');
		},
		x: 10,
		y: 10
	});

}
*/



var filePathForRo ="./Languages/romana.json";
var filePathForEn ="./Languages/english.json";
var filePathForEs ="./Languages/spanish.json";
var filePathForDe ="./Languages/german.json";


	function getLanguageFile(nameOfFlag){
        if (nameOfFlag === "Ro") { console.log("Changed language to Ro"); return filePathForRo;  }
        else if (nameOfFlag === "En") {  console.log("Changed language to En"); return filePathForEn; }
        else if (nameOfFlag === "Es") {  console.log("Changed language to Es"); return filePathForEs; }
         else if (nameOfFlag === "De") {  console.log("Changed language to De"); return filePathForDe; }
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
            let t=`${value}`;
            document.getElementById(k).innerHTML =t;
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


