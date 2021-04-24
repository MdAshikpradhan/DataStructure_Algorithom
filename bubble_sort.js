const numbers = [23, 54, 12, 8, 45, 90, 2];

//[23, 54, 12, 8, 45, 90, 2];
//[23, 12, 54, 8, 45, 90, 2];
//[23, 12, 8, 45, 54, 90, 2];
//[23, 12, 8, 45, 54, 2, 90];
//[12, 23, 8, 45, 54, 2, 90];
//[12, 8, 23, 45, 54, 2, 90];
//[12, 8, 23, 45, 54, 2, 90];
//[12, 8, 23, 45, 2, 54, 90];
//[8, 12, 23, 45, 2, 54, 90];
//[8, 12, 23, 2, 45, 54, 90];
//[8, 12, 2, 23, 45, 54, 90];
//[8, 2, 12, 23, 45, 54, 90];
//[2, 8, 12, 23, 45, 54, 90];


function bubbleSot(array) {
    for ( let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if(array[j] > array[j+1]) {
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

function bubbleSotDescending(array) {
    for ( let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if(array[j] < array[j+1]) {
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

const sorted = bubbleSort(numbers);

console.log(sorted);

const descendingSorted = bubbleSotDescending(numbers);
console.log(descendingSorted);


// 1 => 1
// 1 => 2
// 10 => 10
// 100 => 100
// n => n
// O(n)

// 1 => n
// 2 => 2xn
// 3 => 3xn
// n => nxn
// O(n^2)

// const time_complexity 
// O(1)