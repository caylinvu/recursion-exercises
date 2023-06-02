function fibs(n) {
    let result = [];
    let num1 = '';
    let num2 = '';
    let sum = '';

    for (let i = 0; i < n; i++) {
        if (i == 0) {
            num1 = 0;
            result.push(num1);
        } else if (i == 1) {
            num2 = 1;
            result.push(num2);
        } else {
            sum = num1 + num2;
            result.push(sum);
            num1 = num2;
            num2 = sum;
        }
    }

    return result;
}

console.log(fibs(8));

function fibsRec(n) {
    if (n <= 0) {
        return [];
    } else if (n == 1) {
        return [0];
    } else if (n == 2) {
        return [0, 1];
    } else {
        return [...fibsRec(n-1), fibsRec(n-1)[n-2] + fibsRec(n-1)[n-3]];
    }
}

console.log(fibsRec(8));