/*
JupiMath - 'math' because it does math, 'jupi' because I was looking at my dog, Jupiter.

created Sept 7 2013 by Luke Sticka, on a whim, because reasons.

*/

//var jupimath = {

var jupiGetter = {

    getValueById: function (elementID) {
        var targetID = document.getElementById(elementID);
        if (targetID === null) {
            console.log(elementID + " wasn't a good ID. Return value = 0");
            return 0;
        } else {
            var aNumber = Number(targetID.innerHTML);
            if (isNaN(aNumber)) {
                console.log(elementID + " didn't have a real number. Return value = 0");
                return 0;
            } else {
                return aNumber;
            }
        }
    },

    getManyValues: function (elementArray) {
        var valuesArray = [];
        elementArray.forEach(function (element) {
            var newValue = jupiGetter.getValueById(element);
            valuesArray.push(newValue);
        });
        return valuesArray;
    }

};

var jupiBaseMath = {

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

    doMathByIds: function (mathType, elementArray) {
        var mathCheck = typeof jupiBaseMath[mathType];
        if (mathCheck === "function" && mathType !== "doMathByIds") {
            return jupiBaseMath[mathType](jupiGetter.getManyValues(elementArray));
        } else {
            console.log("I can't do that kind of math!");
            //return false;
        }
    }
};

var jupiWrite = {

    writeTotalToId: function (elementID, total) {
        document.getElementById(elementID).innerHTML = total;
    },

    writeMathToId: function (mathType, elementArray, targetElement) {
        var answer = jupiBaseMath.doMathByIds(mathType, elementArray);
        jupiWrite.writeTotalToId(targetElement, answer);
    }

};

