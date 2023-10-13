//! --------------- Level-1---------------------

let str = "30 Days Of JavaScript"
let newStr = "30 Days Of "
console.log(str);
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.substr(newStr.length,4));
console.log(str.substr(11,4));
console.log(str.substring(11,15));
console.log(str.substring(3,22));
console.log(str.includes("script"));
console.log(str.split(""));
console.log(str.split(" "));
console.log("3o Days Of JavaScript".split());
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(","));
console.log(str.replace("JavaScript","Python"));
console.log(str.charAt(15));
console.log(str.charCodeAt(11));
console.log(str.indexOf("a"));
console.log(str.indexOf("a",5));
console.log(str.lastIndexOf("a"));
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf("because"));
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf("because"));
console.log('You cannot end a sentence with because because because is a conjunction'.search("because"));
console.log(str.trim());
console.log(str.startsWith("0 Day"));
console.log(str.endsWith("script"));
console.log(str.match(/a/));
console.log(str.match(/a/g));
console.log(str.match(/a/gi));
console.log(str.match(/\d/));
console.log(str.match(/\d+/));
console.log(str.match(/\d+/gi));

console.log("30 Days Of ".concat("JavaScript"));
console.log(str.repeat(3));


//!--------------- Level-2 -------------------
//10.soru
let text = "JavaScript"
leng = text.length
console.log(leng);

let randomSayi = Math.floor(Math.random()*leng)
console.log(randomSayi);
console.log(text[randomSayi]);

//!--------------- Level-3 -------------------

let tex = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// sayi = tex.match(/love/gi)
// console.log(sayi.length);
console.log(tex.match(/love/gi).length);


const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

// newSentence = sentence.replace(/%/gi,"").replace(/@/gi,"").replace(/#/gi,"").replace(/&/gi,"").replace(/\$/gi,"");

console.log(sentence.replace(/[^a-zA-Z0-9\s]/gi, ""));
// const cleanedSentence = sentence.replace(/[^a-zA-Z0-9\s]/g, '')

// console.log(newSentence.split(" "));



