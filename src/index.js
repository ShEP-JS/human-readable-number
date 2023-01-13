module.exports = function toReadable(number) {
    let obj = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    let strOfNum = number.toString();
    if (strOfNum.length === 1) {
        return obj[strOfNum];
    } else if (strOfNum.length === 2) {
        if (strOfNum[0] === "1" || strOfNum[1] === "0") {
            return obj[strOfNum];
        } else {
            return obj[+strOfNum[0] * 10] + " " + obj[strOfNum[1]];
        }
    } else if (strOfNum.length === 3) {
        if (strOfNum[1] === "0" && strOfNum[2] === "0") {
            return obj[strOfNum[0]] + " hundred";
        } else if (strOfNum[2] === "0" || strOfNum[1] === "1") {
            return (
                obj[strOfNum[0]] + " hundred " + obj[strOfNum[1] + strOfNum[2]]
            );
        } else if (strOfNum[1] === "0") {
            return obj[strOfNum[0]] + " hundred " + obj[strOfNum[2]];
        } else {
            return (
                obj[strOfNum[0]] +
                " hundred " +
                obj[+strOfNum[1] * 10] +
                " " +
                obj[strOfNum[2]]
            );
        }
    }
};
