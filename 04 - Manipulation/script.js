// Menyeleksi Section
const sectionB = document.getElementById('b');
const sectionA = document.getElementById('a');

// Membuat tag link baru : <a href="https://youtube.com/c/DIKDNS">Youtube Channel</a>
const linkBaru = document.createElement('a');
linkBaru.setAttribute('href', 'https://youtube.com/c/DIKDNS');
linkBaru.appendChild(document.createTextNode('Youtube Channel'));


// Menambahkan Tag Paragraf Baru di Section A
// Buat element baru
const paragrafBaru = document.createElement('p');
const teksParagrafBaru = document.createTextNode('Ini adalah Paragraf baru dari Js.');

// Simpan teks node ke dalam element paragraf
paragrafBaru.appendChild(teksParagrafBaru);

// Simpan Kumpulan Node tadi di section a
sectionA.appendChild(paragrafBaru);


// Menambahkan Tag li baru di sebelum li ke-2
// ul dan li ke 2 selection
const ul = document.querySelector('#b ul');
const listItemKe2 = ul.querySelector('li:nth-child(2)');

/// Membuat ListItemBaru dan node teks nya
const listItemBaru = document.createElement('li');
listItemBaru.appendChild(document.createTextNode('Item baru dari Js.'));

// Memasukan li di ul sebelum li ke-2
ul.insertBefore(listItemBaru, listItemKe2);


// Menghapus Tag Link
sectionA.removeChild(document.getElementsByTagName('a')[0]);


// Mengganti P4 dengan link
sectionB.replaceChild(linkBaru, sectionB.querySelector('p'));