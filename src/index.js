const toTen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const toTwenty = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const toHundred = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable (number) {
    const neededNumber = number.toString();
    let result;
    if (number === 0) {
        return 'zero';
    } else if (neededNumber.length === 1) {
        result = toTen[number];
        return result.trim();
    } else if (number > 10 && number < 20) {
        result = toTwenty[neededNumber[1]];
        return result.trim();
    } else if (neededNumber.length === 2 && Number(neededNumber[1]) === 0) {
        result =  toHundred[neededNumber[0]];
        return result.trim();
    } else if (neededNumber.length === 2) {
        result = `${toHundred[neededNumber[0]]} ${toTen[neededNumber[1]]}`;
        return result.trim();
    } else if (neededNumber.length === 3 && Number(neededNumber[2]) === 0) {
        result = `${toTen[neededNumber[0]]} hundred ${toHundred[neededNumber[1]]}`;
        return result.trim();
    } else if (neededNumber.length === 3 && Number(neededNumber[1]) === 1) {
        result = `${toTen[neededNumber[0]]} hundred ${toTwenty[neededNumber[2]]}`;
        return result.trim();
    } else if (neededNumber.length === 3 && Number(neededNumber[1]) === 0) {
        result = `${toTen[neededNumber[0]]} hundred ${toTen[neededNumber[2]]}`;
        return result.trim();
    } else if (neededNumber.length === 3) {
        result = `${toTen[neededNumber[0]]} hundred ${toHundred[neededNumber[1]]} ${toTen[neededNumber[2]]}`;
        return result.trim();
    }
  
};
