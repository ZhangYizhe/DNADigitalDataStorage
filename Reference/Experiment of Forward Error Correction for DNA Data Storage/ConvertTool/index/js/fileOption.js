function openNormalFile() {
    const file = document.getElementById("openNormalFile").files[0];
    const reader = new FileReader();

    document.getElementById("empty_view").style.visibility = "visible";

    reader.addEventListener("load", function () {
        // convert image file to base64 string
        var myDate = new Date();
        createTextFile(myDate.getFullYear() + "-" + myDate.getMonth() + "-" + myDate.getDate() + " " + myDate.getHours() + "-" + myDate.getMinutes() + "-" + myDate.getSeconds() + '.gboke', reader.result);
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

function openGbokeFile() {
    const file = document.getElementById("openGbokeFile").files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        // convert image file to base64 string
        var myDate = new Date();
        let resultString = DNAToString(reader.result);
        let fileTypeMarch = resultString.match("/[a-z].+;");
        if (fileTypeMarch.length < 1) {
            Alert("File invalid!");
            return;
        }

        var fileType = fileTypeMarch[0].replace("/", "").replace(";", "");
        switch (fileType) {
            case "plain":
                fileType = ".txt";
                break;
            case "mpeg":
                fileType = ".mp3";
                break;
            default:
                fileType = "." + fileType;
                break;
        }
        downloadFileFromURI(resultString, myDate.getFullYear() + "-" + myDate.getMonth() + "-" + myDate.getDate() + " " + myDate.getHours() + "-" + myDate.getMinutes() + "-" + myDate.getSeconds() + fileType);
    }, false);

    if (file) {
        reader.readAsText(file);
    }
}

const createTextFile = async (fileNmae, text) => {

    // text to dna
    text = await StringToDNA(text);
    document.getElementById("empty_view").style.visibility = "hidden";

    const element = document.createElement('a');
    element.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,' + encodeURIComponent(text),
    );
    element.setAttribute('download', fileNmae);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);



};

const downloadFileFromURI = (uri, name) => {
    const element = document.createElement('a');
    element.download = name;
    element.href = uri;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
