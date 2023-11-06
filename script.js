let arr = [10, 20, 30, 40, 50];

console.log("Array awal:", arr);

arr.unshift(5);
console.log("Setelah unshift(5):", arr);

let first = arr.shift();
console.log("Elemen yang di-shift:", first);
console.log("Array setelah shift:", arr);

arr.push(100);
console.log("Setelah push(100):", arr);

let last = arr.pop();
console.log("Elemen yang di-pop:", last);
console.log("Array setelah pop:", arr);

let slicedArray = arr.slice(1, 4);
console.log("Hasil slice(1, 4):", slicedArray);

let squaredArray = arr.map(element => element * element);
console.log("Hasil map (kuadrat):", squaredArray);

let filteredArray = arr.filter(element => element > 30);
console.log("Hasil filter (elemen > 30):", filteredArray);

let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Hasil reduce (jumlah semua elemen):", sum);
