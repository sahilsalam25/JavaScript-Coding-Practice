let str = 'Sahil Salam'
let letter = 'S';
let counter = 0;
for (let i = 0; i <= str.length; i++) {
    if (str[i] == letter) {
        counter++;
    }
}
console.log(`${str}  => ${letter} is  >= ${counter}`);