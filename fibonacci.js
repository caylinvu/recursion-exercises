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