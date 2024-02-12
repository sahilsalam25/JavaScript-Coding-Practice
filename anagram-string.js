let str1 = 'Army';
let str2 = 'Mary';
function checkAnagram(str1, str2) {
    let a = str1.toLowerCase();
    let b = str2.toLowerCase();
    a = a.split('').sort().join('');
    b = b.split('').sort().join('');
    return a === b;
}
console.log(checkAnagram(str1, str2));