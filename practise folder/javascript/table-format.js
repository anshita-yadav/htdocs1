function printTable() {
    let n, i, res;
    n = tableNum.value;
    for (i = 1; i <= 20; ++i) {
        res = n * i;
        document.write(`${n} * ${i} = ${res}<br>`)
    }


}