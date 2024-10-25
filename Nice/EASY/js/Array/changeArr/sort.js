// сортує массив по заданій функції або по зростанню(за замовчування) 
// міняє заданий массив
// compareFn(a, b) return value	sort order
        //         > 0	        sort a after b, e.g. [b, a]
        //         < 0	        sort a before b, e.g. [a, b]
        //         === 0	    keep original order of a and b
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]
array1.sort((a,b) => {
        return a-b;
})
console.log(array1)