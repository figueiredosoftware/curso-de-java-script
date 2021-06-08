const arr = new Array();
console.log(typeof arr);
console.log(arr);
arr[0] = "Daniela";
arr[1] = 28;
console.log(arr);

const arr2 = new Array(true, "Daniela", 28, new Array(2, 4, 10));
console.log(arr2);
console.log(arr2[1]);
console.log(arr2[3][1]);
console.log(arr2[3][3]);