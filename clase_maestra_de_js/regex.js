let text1 = 'Este texto es para decir que me gusta la música electrónica';
let text2 = 'Este texto es para decir que me gusta la música ranchera';
let text3 = 'Este texto es para decir que me gusta la musica Agropecuaria';
let text4 = 'Este texto es para decir que me gusta la música internacional';
let text5 = 'Este texto es para decir que me gusta la música andina';
let text6 = 'Este texto es para decir que me gusta la música del pacifico';

let regex = /internacional$/;

console.log(regex.test(text1));
console.log(regex.test(text2));
console.log(regex.test(text3));
console.log(regex.test(text4));
console.log(regex.test(text5));
console.log(regex.test(text6))