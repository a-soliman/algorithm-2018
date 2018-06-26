/*

Is Unique

Instructions
Create a function that determines whether all chars in a string are unique or not., make it case senstive.

Input: String,
Output: Boolean

*/

function isUnique( str ) {
    let hash = {};
    for ( let i = 0; i < str.length; i++ ) {
        let currentChar = str[i];

        if ( hash[currentChar] == true) {
            return false;
        }
        hash[currentChar] = true;
    }
    return true;
}

function isUnique2( str ) {
    let sortedString = str.split('').sort();
    for ( let i = 0; i < sortedString.length; i++ ) {
        if ( sortedString[i] == sortedString[i+1] ) {
            return false;
        }
    }
    return true;
}

function isUnique3( str ) {
    let strSet = new Set(str);
    return str.length == strSet.size() ? true : false;
}

console.log('isUnique: ', isUnique('something'));


//----------------------------------
function flattenArray(arr) {
    let flatArray = [];

    function getValue ( item ) {
        if( !Array.isArray(item) ) {
            flatArray.push(item);
        }
        else {
            item.forEach((innerItem) => {
                getValue(innerItem);
            });
        }
    }

    arr.forEach((item) => {
        getValue(item);
    });

    return flatArray;
}

console.log('FlatternArray: ', flattenArray([1,['a', 'b', [55,555,5555, ['aa', 'aaa']]], [[['z']]], 3]));

// ----------------------------
function removeDupes1(str) {
    let set = new Set(str);
    let newString = '';

    for ( let value of set ) {
        newString += value;
    }
    return newString;
}

function removeDupes2(str) {
    let newString = '';

    for ( let i = 0; i < str.length; i++ ) {
        if( !newString.includes(str[i]) ) {
            newString += str[i];
        }
    }
    return newString;
}

console.log(removeDupes2('ahmedahmed'));

// --------------------------------------
function heighestFrequency(arr) {
    let hash = {};
    let maxFrequecy = 0;
    let mostFrequent = arr[0];

    arr.forEach((item) => {
        if ( hash[item] ) {
            hash[item]++;
        }else {
            hash[item] = 1;
        }
        if ( hash[item] > maxFrequecy ) {
            maxFrequecy = hash[item];
            mostFrequent = item;
        }
    });
    return mostFrequent;
}

console.log(heighestFrequency(['abc', 'def','def','def', 'abc', 'abc']));


// ----------------------------------