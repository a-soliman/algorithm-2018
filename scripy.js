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
        let char = str[i];
        if ( hash[char] ) {
            hash[char]++;
        }else {
            hash[char] = 1;
        }
    }

    for (let key in hash ) {
        if ( hash[key] > 1 ) {
            return false;
        }
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

console.log('isUnique: ', isUnique2('somethinge'));