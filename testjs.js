
let a = [3, 6, 14, 2, 7, 30, 1];

for (let i = 0; i < a.length; i++) {
    for (let j = i; j < a.length; j++) {
        if (a[i] > a[j]) {
            let temp = a[I];
            a[i] = a[j];
            a[j] = temp;
        }
        console.log(a);
    }
}