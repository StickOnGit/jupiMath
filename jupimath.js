/*
JupiMath - 'math' because it does math, 'jupi' because I was looking at my dog, Jupiter.

created Sept 7 2013 by Luke Sticka, on a whim, because reasons.

*/

var jupimath = {

    getValueById: function (elementID) {
        var targetID = document.getElementById(elementID);
        if (targetID === null) {
            console.log(elementID + " wasn't a good ID. Your math might fail.");
            return 0;
        } else {
            var aNumber = Number(targetID.innerHTML);
            if (isNaN(aNumber)) {
                console.log(elementID + " didn't have a real number. Check your math!");
                return 0;
            } else {
                return aNumber;
            }
        }
    },

    getManyValues: function (elementArray) {
        var valuesArray = [];
        elementArray.forEach(function (element) {
            var newValue = jupimath.getValueById(element);
            valuesArray.push(newValue);
        });
        return valuesArray;
    },

    add: function (arrayOfValues) {
        var sum = arrayOfValues.shift();
        arrayOfValues.forEach(function (value) {
            sum += value;
        });
        return sum;
    },

    subtract: function (arrayOfValues) {
        var difference = arrayOfValues.shift();
        arrayOfValues.forEach(function (value) {
            difference -= value;
        });
        return difference;
    },

    multiply: function (arrayOfValues) {
        var product = arrayOfValues.shift();
        arrayOfValues.forEach(function (value) {
            product *= value;
        });
        return product;
    },

    divide: function (arrayOfValues) {
        var quotient = arrayOfValues.shift();
        arrayOfValues.forEach(function (value) {
            quotient /= value;
        });
        return quotient;
    },

    writeTotalToElementById: function (elementID, total) {
        document.getElementById(elementID).innerHTML = total;
    },

    simpleMathByIds: function (mathType, elementArray) {
        if (typeof jupimath[mathType] === "function") {
            return jupimath[mathType](jupimath.getManyValues(elementArray));
        } else {
            console.log("I can't do that kind of math!");
        }
    },

    writeMathToId: function (mathType, elementArray, targetElement) {
        var answer = jupimath.simpleMathByIds(mathType, elementArray);
        jupimath.writeTotalToElementById(targetElement, answer);
    }

};

jupimath.writeMathToId("divide", ["one", 3], "putTotalHere");