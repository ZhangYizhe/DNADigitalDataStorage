// StringToDNA
function StringToDNA(string) {
    let bin = textToBin("" + string + "");
    return binaryToDNA(bin);
}

// DNAToString
function DNAToString(string) {
    var outputStr = "";
    let dnaBaseArr = string.split(' ');

    for (let i = 0; i < dnaBaseArr.length; i++) {
        let dnaBase = dnaBaseArr[i].split('');
        if (dnaBase.length < 5) {
            outputStr += " --------";
        }

        outputStr += " " + nucleotidesShallToFirstThreeBits(dnaBase[0]);
        outputStr += "" + nucleotidesShallToFirstThreeBits(dnaBase[1]);
        outputStr += "" + nucleotidesShallToFirstThreeBits(dnaBase[3]);
        outputStr += "" + nucleotidesShallToLastTwoBits(dnaBase[2] + dnaBase[4]);
    }

    return binToText(outputStr);
}

function firstThreeBitsToNucleotidesShall(string) {
    switch (string) {
        case "00":
            return "A";
        case "01":
            return "C";
        case "10":
            return "G";
        case "11":
            return "T";
    }
    return "E";
}

function nucleotidesShallToFirstThreeBits(string) {
    switch (string) {
        case "A":
            return "00";
        case "C":
            return "01";
        case "G":
            return "10";
        case "T":
            return "11";
    }
    return "--";
}

var nucleotidesSortArr = [
    "AA", "CC", "GG", "TT",
    "AC", "CG", "GT", "TA",
    "AG", "CT", "GA", "TC",
    "AT", "CA", "GC", "TG"]

function lastTwoBitsToNucleotidesShall(string) {
    switch (string) {
        case "00":
            return nucleotidesSortArr[randomNum(0, 3)];
        case "01":
            return nucleotidesSortArr[randomNum(4, 7)];
        case "10":
            return nucleotidesSortArr[randomNum(8, 11)];
        case "11":
            return nucleotidesSortArr[randomNum(12, 15)];
    }
    return "EE";
}

function nucleotidesShallToLastTwoBits(string) {
    switch (string) {
        case "AA": case "CC": case "GG": case "TT":
            return "00";
        case "AC": case "CG": case "GT": case "TA":
            return "01";
        case "AG": case "CT": case "GA": case "TC":
            return "10";
        case "AT": case "CA": case "GC": case "TG":
            return "11";
    }
    return "EE";
}

// BinaryToDNA
function binaryToDNA(string) {
    //Join the array back to a string
    return string.split(' ')
        .map(binarySingleToDNA)
        .join(' ');
}

function binarySingleToDNA(string) {
    let array = string.split('');
    if (array.length < 8) {
        return "error";
    }

    var outputStr = "";
    var lastTwoBit = lastTwoBitsToNucleotidesShall(array[6] + array[7]);

    outputStr += firstThreeBitsToNucleotidesShall(array[0] + array[1]);
    outputStr += firstThreeBitsToNucleotidesShall(array[2] + array[3]);
    outputStr += lastTwoBit.split('')[0]; // 7th and 8th bit covert to nucleotides seek first character of result
    outputStr += firstThreeBitsToNucleotidesShall(array[4] + array[5]);
    outputStr += lastTwoBit.split('')[1]; // 7th and 8th bit covert to nucleotides seek second character of result

    if (outputStr.split('')[3] === outputStr.split('')[4]) {
        return binarySingleToDNA(string)
    }

    if (outputStr.split('')[0] === outputStr.split('')[1] === outputStr.split('')[2]) {
        return binarySingleToDNA(string)
    }

    return outputStr
}


//random from minNum to maxNum
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}

function textToBin(string) {
    return (
        Array
            .from(string)
            .reduce((acc, char) => acc.concat(char.charCodeAt().toString(2)), [])
            .map(bin => {
                if (bin.length > 8) {
                    return "";
                }
                return  '0'.repeat(8 - bin.length) + bin;
            })
            .join(' ')
    );
}

function binToText(string) {
    //Join the array back to a string
    return string.split(' ') //Split string in array of binary chars
        .map(bin => String.fromCharCode(parseInt(bin, 2))) //Map every binary char to real char
        .join('');
}
