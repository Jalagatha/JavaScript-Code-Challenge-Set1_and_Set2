//question one set2
function sortArrays(arr) {
    let arrayLists = {
        evens: [],
        odds: [],
        chars: []
    };

    arr.forEach(item => {
        if (typeof item === 'number') {
            if (item % 2 === 0) {
                arrayLists.evens.push(item);
            } else {
                arrayLists.odds.push(item);
            }
        } else if (typeof item === 'string' && item.length === 1) {
            arrayLists.chars.push(item);
        }
    });

    //  function sort  numbers in ascending order
    function sortNumber(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    // function to sort strings in (alphabetical order)
    function sortString(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    sortNumber(arrayLists.evens);
    sortNumber(arrayLists.odds);
    sortString(arrayLists.chars);
    return arrayLists;
}
let arr = [3.0,'a',7,'x','20','d',4,'f',8]
let result = sortArrays(arr);
console.log(result);
