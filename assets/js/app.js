
//tahun di footer
var Tahun = new Date().getFullYear();
document.getElementById("time").innerHTML = Tahun;

// gambar
const images = document.querySelectorAll(' .gambar_inner');
images.forEach(function (image) {
    image.addEventListener('mouseenter', function (e) {
        image.style.backgroundColor = ' #9ebd85';
        image.style.borderRadius = '12px';
        image.style.borderBottom = "3px outset #78ba5f";
    })
    image.addEventListener('mouseleave', function (e) {
        image.style.backgroundColor = '#d1e3c6';
        image.style.borderBottom = "none";
        image.style.borderRadius = '0px';
    })
})
// keterngan
const cards = document.querySelectorAll('.keterangan');
cards.forEach(function (card) {
    card.addEventListener('mouseenter', function (e) {
        card.style.borderBottom = "3px outset #9ebd85";
    })
    card.addEventListener('mouseleave', function (e) {
        card.style.borderBottom = "none";
    })
})

