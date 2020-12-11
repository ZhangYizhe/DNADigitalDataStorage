window.onload = function(){
    numberToDecimalismTable();
}

// 0-256 decimalism to dna base
function numberToDecimalismTable() {
    var result = "<tr>";
    for (var i = 0; i < 256; i++) {
        let bin = textToBin("" + i + "");
        result += "<td>" + i + " " + bin + "<br><span class='dna_result_string'>" + binaryToDNA(bin) + "</span></td>";
        if ((i + 1) % 4 === 0) {
            result += "</tr><tr>"
        }
    }

    result += "</tr>"

    document.getElementById("numberToDecimalismTable").innerHTML = result;
}

// button convert
function convertBtnTap(type) {
    let input = document.getElementById("inputText").value
    if (input === "") {
        document.getElementById("outputText").value = "";
        return
    }

    var result = ""
    if (type === 1) {
        result = DNAToString(input);
    } else {
        result = StringToDNA(input);
    }

    document.getElementById("outputText").value = result;
}
