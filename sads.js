$('.mercedes.esasslide img').attr('src', `${sekiller[2][0].url}`)
for (let i = 0; i < sekiller[2].length; i++) {
    $('.mercedes.altslide').append(`<img no="${i}" src="${sekiller[2][i].url}">`)
}


var mersz;
var mersmyVar;
$('.slideshow img').click(function () {
    // mercedesstopslide()
    $('.mercedes.esashisse').show();
    $('.slideshow').css("opacity", "0");
    $('.slidehisse button').show()
    $('.mercedes.esashisse img').attr('src', `${$(this).attr('src')}`)
    mersz = $(this).attr('no')
    $('.bodi').css("overflow","hidden")
})



mersmyVar = setInterval(mersslidefunksiya, 1000);

var m = 0
function mersslidefunksiya() {
    m++
    if (m == sekiller[2].length) {
        m = 0
    }
    $('.mercedes.esasslide img').attr('src', `${sekiller[2][m].url}`)
    $('.mercedes.esasslide img').attr('no', `${m}`)
}
// function mersstopslide() {
//     clearInterval(mersmyVar)
// }




$(".sol").click(function () {
    mersz--
    if (mersz == -1) {
        mersz = sekiller[2].length - 1
    }
    $('.mercedes.esashisse img').attr('src', `${sekiller[2][mersz].url}`)
})

$(".sag").click(function () {
    mersz++
    if (mersz == sekiller[2].length) {
        mersz = 0
    }
    $('.mercedes.esashisse img').attr('src', `${sekiller[2][mersz].url}`)
})


$('.mercedes.orta img').click(function () {
    $('.mercedes.esashisse').show();
    $('.bagla').show()
    $('.mercedes.esashisse img').attr('src', `${$(this).attr('src')}`)
    $('.mercedes.esashisse img').css("border", "white 2px solid")

})