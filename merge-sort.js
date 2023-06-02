function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        let half = Math.ceil(arr.length / 2);
        let firstHalf = arr.slice(0, half);
        let secondHalf = arr.slice(half);
        return merge(mergeSort(firstHalf), mergeSort(secondHalf));
    }
}

function merge(leftArray, rightArray) {
    let mergedArray = [];
    let element = '';

    while (leftArray.length > 0 && rightArray.length > 0) {
        if (leftArray[0] < rightArray[0]) {
            element = leftArray.shift();
            mergedArray.push(element);
        } else if (rightArray[0] < leftArray[0]) {
            element = rightArray.shift();
            mergedArray.push(element);
        }
    }

    return mergedArray.concat(leftArray, rightArray);
}

console.log(mergeSort([9,3,2,1,10,4,5,7]));