function count(arr) {
    return arr.filter((a) => a === true).length;
}

console.log(count([true, false, false, true, false]) + " True values");