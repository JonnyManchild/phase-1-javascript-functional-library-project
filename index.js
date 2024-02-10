function myEach(collection, callback) {
    let myArray = [];
    if (typeof collection === 'object') {
        myArray = Object.values(collection)
    }
    else {
        myArray = collection;
    };
    for (let item of myArray) {
        callback(item)
    };
    return collection
}; 

function myMap(collection, callback) {
    let myArray = [];
    if (typeof collection === 'object') {
        myArray = Object.values(collection)
    }
    else {
        myArray = collection;
    };
    let finalArray = [];
    for (let item of myArray) {
        finalArray.push(callback(item));
    };
    return finalArray;
};

function myReduce(collection, callback, acc) {
    let myArray = [];
    if (typeof collection === 'object') {
        myArray = Object.values(collection)
    }
    else {
        myArray = collection;
    };
    if (acc === undefined) {
        acc = myArray[0];
        myArray = myArray.slice(1);
    }
    for (let item of myArray) {
        acc = callback(acc, item)}
    return acc;
};

function myFind(collection, callback) {
    let myArray = [];
    if (typeof collection === 'object') {
        myArray = Object.values(collection)
    }
    else {
        myArray = collection;
    };
    for (let item of myArray) {
        if (callback(item) === true) {
            return item
        };
    };
};

function myFilter(collection, callback) {
    let myArray = [];
    if (typeof collection === 'object') {
        myArray = Object.values(collection)
    }
    else {
        myArray = collection;
    };
    let finalArray = [];
    for (let item of myArray) {
        if (callback(item) === true) {
            finalArray.push(item)
        };
    };
    return finalArray
};

function mySize(collection) {
    let myArray = [];
    if (typeof collection === 'object') {
        myArray = Object.values(collection)
    }
    else {
        myArray = collection;
    };
    return myArray.length;
};    

function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    }
    else {
        return array.slice(0, n)
    }
};

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length-1];
    }
    else {
        return array.slice(-n)
    }
};

function myKeys(object) {
    let resultArray = [];
    for (let item in object) {
        resultArray.push(item)
    }
    return resultArray
};

function myValues(object) {
    let resultArray = [];
    for (let item in object) {
        resultArray.push(object[item])
    }
    return resultArray
};