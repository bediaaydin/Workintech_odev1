/* 
1. Bir dizideki kelimelerin sadece "e" harfi ile bitenlerini filtrelemek için filter metodunu kullanın.

Örnek Dizi: ['apple', 'banana', 'cherry', 'date', 'grape']

2. Bir dizideki her kelimenin uzunluğunu döndüren bir map fonksiyonu yazın.

Örnek Dizi: ['lion', 'tiger', 'elephant', 'cat']
*/


//çözüm 1
const ornekDizi = ['apple', 'banana', 'cherry', 'date', 'grape'];
const eHarfiIleBitenler = ornekDizi.filter(kelime => kelime.endsWith("e"));
console.log(eHarfiIleBitenler);
 

//çözüm 2
const ornekDizi2 = ['lion', 'tiger', 'elephant', 'cat']
const herElemanUzunlugu = ornekDizi.map(kelime => kelime.length);
console.log(herElemanUzunlugu);
 