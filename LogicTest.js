//Palindrom
console.log('\nPalindrom');
/*
Radar                 # --> palindrome
Malam                 # --> palindrome
Kasur ini rusak       # --> palindrome
Ibu Ratna antar ubi   # --> palindrome
Malas                 # --> not palindrome
Makan nasi goreng     # --> not palindrome
Balonku ada lima      # --> not palindrome
*/
function palindrom(kalimat){
  var lower = kalimat.toLowerCase();//membuat semua huruf menjadi kecil atau lower case
  var balik = "";//variabel kalimat ketika dibalik
  
  for(i = lower.length-1; i >= 0; i--){ //for untuk membalik kalimat
      balik += lower[i];
  }

  if (balik === lower){ //jika kata yang dibalik sama dengan kata di awal maka di return true dan sebaliknya
    return true;
  }else{
    return false;
  }
  
}

console.log(palindrom("Radar"));
console.log(palindrom("Malam"));
console.log(palindrom("Kasur ini rusak"));
console.log(palindrom("Ibu Ratna antar ubi"));
console.log(palindrom("Malas"));
console.log(palindrom("Makan nasi goreng"));
console.log(palindrom("Balonku ada lima"));

//Leap Year
console.log('\n Leap Year');
// 1900 dan 2020 kelipatan 4
function LeapYear(startNum, finishNum){
  var tampung = []; //membuat variabel untuk mnampung output tahun kelipatan 4 
  //var kelipatan = 4;
  
  if(startNum < finishNum){ //perulangan untuk tahun < finishNum
    for(var i = startNum + 4; i <= finishNum;){
      tampung.push(i); //di masukkan ke array tampung
      i = i + 4; // kemudian di tambah 4 karena output kelipatan 4
    }
    return tampung;//nilai di lempar
  }

}

console.log(LeapYear(1900, 2020));

//Reverse word
console.log('\nReverse word');

function balikKata(kata){
  var potong = kata.split (" "); //memisahkan setiap kata dengan parameter spasi
  var tampil = ""; //membuat variabel hasil yang ditampilkan
  for(i = 0; i < potong.length; i++){ //for sebanyak kata
      for(j = potong[i].length-1; j >= 0; j-- ){ // for untuk setiap kata dan dibalik
        tampil += potong[i][j]; //memasukkan ke variabel hasil
      }
      tampil += " " // setelah perkata dibalik kemudian ditambah spasi di akhir
  }
  return tampil;
}

console.log(balikKata("I am A Great human"));

//Fibonnaci
