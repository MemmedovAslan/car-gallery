function play() {
    var mySound = new Audio("123.mp3");
    mySound.play()
}

$('.background button').click(function() {
    $('.background').css("top", "-100%")
    $(this).hide()
    $('nav').css("color", "white")
    $('nav a').css("color", "white")
    $('nav').css("background-color", "rgb(17, 17, 17)")
})
$(".menu").click(function() {
    $(".ust ul").toggle()
})

var sekiller = [
    [{ url: "https://www.topgear.com/sites/default/files/cars-car/carousel/2018/12/bmw_330i_m_sport-037.jpg?w=892&h=502" },
        { url: "https://www.topgear.com/sites/default/files/cars-car/carousel/2018/12/bmw_330i_m_sport-039.jpg?w=892&h=502" },
        { url: "https://www.topgear.com/sites/default/files/cars-car/carousel/2018/12/bmw_320d_sport_line-098.jpg?w=892&h=502" },
        { url: "https://www.topgear.com/sites/default/files/cars-car/carousel/2018/12/bmw_330i_m_sport-058.jpg?w=892&h=502" },
        { url: "https://www.topgear.com/sites/default/files/cars-car/carousel/2018/12/bmw_330i_m_sport-062.jpg?w=892&h=502" }
    ],

    [{ url: "https://www.topgear.com/sites/default/files/cars-car/carousel/2019/09/ttsc6146.jpg?w=892&h=502" },
        { url: "https://www.topgear.com/sites/default/files/cars-car/carousel/2019/09/ttsc5123t.jpg?w=892&h=502" },
        { url: "https://www.topgear.com/sites/default/files/cars-car/carousel/2019/09/ttsc5321.jpg?w=892&h=502" },
        { url: "https://www.topgear.com/sites/default/files/cars-car/carousel/2019/09/ttsc5347.jpg?w=892&h=502" },
        { url: "https://www.topgear.com/sites/default/files/cars-car/carousel/2019/09/ttsc9546.jpg?w=892&h=502" }
    ],

    [{ url: "https://www.topgear.com/sites/default/files/2021/11/Mercedes_C300D_0000.jpg?w=892&h=502" },
        { url: "https://www.topgear.com/sites/default/files/2021/11/Mercedes_C300D_0003.jpg?w=892&h=502" },
        { url: "https://www.topgear.com/sites/default/files/2021/11/Mercedes_C300D_0162.jpg?w=892&h=502" },
        { url: "https://www.topgear.com/sites/default/files/2021/11/Mercedes_C300D_0079.jpg?w=892&h=502" },
        { url: "https://carwow-uk-wp-3.imgix.net/20C0673_119-scaled.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750" }
    ],
]

$('.bmw.esasslide img').attr('src', `${sekiller[0][0].url}`)
for (let i = 0; i < sekiller[0].length; i++) {
    $('.bmw.altslide').append(`<img no="${i}" src="${sekiller[0][i].url}">`)
}


var z;
var myVar;
$(".bagla").click(function() {
    $('.esashisse').hide()
    $('.bagla').hide()
    $('.slideshow').css("opacity", "1");
    $('.slidehisse button').hide()
    $('.bodi').css("overflowY", "scroll")
})

$('.slideshow img').click(function() {
    // stopslide()
    $('.bmw.esashisse').show();
    $('.slideshow').css("opacity", "0");
    $('.slidehisse button').show()
    $('.bmw.esashisse img').attr('src', `${$(this).attr('src')}`)
    z = $(this).attr('no')
    $('.bodi').css("overflow", "hidden")
})



myVar = setInterval(slidefunksiya, 1000);

var b = 0;

function slidefunksiya() {
    b++
    if (b == sekiller[0].length) {
        b = 0
    }
    $('.bmw.esasslide img').attr('src', `${sekiller[0][b].url}`)
    $('.bmw.esasslide img').attr('no', `${b}`)
}
// function stopslide() {
//     clearInterval(myVar)
// }





$(".bmw .sol").click(function() {
    z--
    if (z == -1) {
        z = sekiller[0].length - 1
    }
    $('.bmw.esashisse img').attr('src', `${sekiller[0][z].url}`)
})

$(".bmw .sag").click(function() {
    z++
    if (z == sekiller[0].length) {
        z = 0
    }
    $('.bmw.esashisse img').attr('src', `${sekiller[0][z].url}`)
})


$('.bmw.orta img').click(function() {
    $('.bmw.esashisse').show();
    $('.bagla').show()
    $('.bmw.esashisse img').attr('src', `${$(this).attr('src')}`)
    $('.bmw.esashisse img').css("border", "white 2px solid")

})




$('.audi.esasslide img').attr('src', `${sekiller[1][0].url}`)
for (let i = 0; i < sekiller[1].length; i++) {
    $('.audi.altslide').append(`<img no="${i}" src="${sekiller[1][i].url}">`)
}


var audiz;
var audimyVar
$('.slideshow img').click(function() {
    // audistopslide()
    $('.audi.esashisse').show();
    $('.slideshow').css("opacity", "0");
    $('.slidehisse button').show()
    $('.audi.esashisse img').attr('src', `${$(this).attr('src')}`)
    audiz = $(this).attr('no')
    $('.bodi').css("overflow", "hidden")
})



audimyVar = setInterval(audislidefunksiya, 1000);

var a = 0

function audislidefunksiya() {
    a++
    if (a == sekiller[1].length) {
        a = 0
    }
    $('.audi.esasslide img').attr('src', `${sekiller[1][a].url}`)
    $('.audi.esasslide img').attr('no', `${a}`)
}
// function audistopslide() {
//     clearInterval(audimyVar)
// }





$(".audi .sol").click(function() {
    audiz--
    if (audiz == -1) {
        audiz = sekiller[1].length - 1
    }
    $('.audi.esashisse img').attr('src', `${sekiller[1][audiz].url}`)
})

$(".audi .sag").click(function() {
    audiz++
    if (audiz == sekiller[1].length) {
        audiz = 0
    }
    $('.audi.esashisse img').attr('src', `${sekiller[1][audiz].url}`)
})


$('.audi.orta img').click(function() {
    $('.audi.esashisse').show();
    $('.bagla').show()
    $('.audi.esashisse img').attr('src', `${$(this).attr('src')}`)
    $('.audi.esashisse img').css("border", "white 2px solid")
})


$('.mercedes.esasslide img').attr('src', `${sekiller[2][0].url}`)
for (let i = 0; i < sekiller[2].length; i++) {
    $('.mercedes.altslide').append(`<img no="${i}" src="${sekiller[2][i].url}">`)
}


var mersz;
var mersmyVar;
$('.slideshow img').click(function() {
    // mercedesstopslide()
    $('.mercedes.esashisse').show();
    $('.slideshow').css("opacity", "0");
    $('.slidehisse button').show()
    $('.mercedes.esashisse img').attr('src', `${$(this).attr('src')}`)
    mersz = $(this).attr('no')
    $('.bodi').css("overflow", "hidden")
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




$(".mercedes .sol").click(function() {
    mersz--
    if (mersz == -1) {
        mersz = sekiller[2].length - 1
    }
    $('.mercedes.esashisse img').attr('src', `${sekiller[2][mersz].url}`)
})

$(".mercedes .sag").click(function() {
    mersz++
    if (mersz == sekiller[2].length) {
        mersz = 0
    }
    $('.mercedes.esashisse img').attr('src', `${sekiller[2][mersz].url}`)
})


$('.mercedes.orta img').click(function() {
    $('.mercedes.esashisse').show();
    $('.bagla').show()
    $('.mercedes.esashisse img').attr('src', `${$(this).attr('src')}`)
    $('.mercedes.esashisse img').css("border", "white 2px solid")

})





var bmwrengler = [
    "https://images.dealer.com/ddc/vehicles/2022/BMW/330e/Sedan/color/Portimao%20Blue%20Metallic-C31-41,69,139-640-en_US.jpg",
    "https://images.dealer.com/ddc/vehicles/2022/BMW/330e/Sedan/color/Aventurin%20Red%20Metallic-C57-70,22,29-640-en_US.jpg",
    "https://images.dealer.com/ddc/vehicles/2022/BMW/330e/Sedan/color/Dravit%20Gray%20Metallic-C36-87,94,87-640-en_US.jpg",
    "https://images.dealer.com/ddc/vehicles/2022/BMW/330e/Sedan/color/Melbourne%20Red%20Metallic-A75-87,17,20-640-en_US.jpg",
    "https://images.dealer.com/ddc/vehicles/2022/BMW/330e/Sedan/color/Mineral%20White%20Metallic-A96-202,202,202-640-en_US.jpg",
    "https://images.dealer.com/ddc/vehicles/2022/BMW/330e/Sedan/color/Sunset%20Orange%20Metallic-C1X-130,48,27-640-en_US.jpg",
    "https://images.dealer.com/ddc/vehicles/2022/BMW/330e/Sedan/color/Tanzanite%20Blue%20II%20Metallic-C3Z-3,15,41-640-en_US.jpg"
]

$(".bmw.reng ul li").click(function() {
    $('.rengsekil').attr('src', `${bmwrengler[$(this).attr('no')]}`)
})


var mercedesrengler = [
    "https://stimg.cardekho.com/images/car-images/930x620/Mercedes-Benz/Mercedes-Benz-New-C-Class/6599/1546950653072/222_Selenite-grey_686b70.jpg?tr=w-898",
    "https://stimg.cardekho.com/images/car-images/930x620/Mercedes-Benz/Mercedes-Benz-New-C-Class/6599/1546950653072/226_Cavansite-Blue_1e2339.jpg?tr=w-898",
    "https://stimg.cardekho.com/images/car-images/930x620/Mercedes-Benz/Mercedes-Benz-New-C-Class/6599/1546950653072/221_Polar-White_d2d3cb.jpg?tr=w-898",
    "https://stimg.cardekho.com/images/car-images/930x620/Mercedes-Benz/Mercedes-Benz-New-C-Class/6599/1546950653072/225_designo-hyacinth-red_bf1c21.jpg?tr=w-898",
    "https://stimg.cardekho.com/images/car-images/930x620/Mercedes-Benz/Mercedes-Benz-New-C-Class/6599/1546950653072/224_Mojave-Silver_a8a2a2.jpg?tr=w-898",
    "https://stimg.cardekho.com/images/car-images/930x620/Mercedes-Benz/Mercedes-Benz-New-C-Class/6599/1546950653072/223_Obsidian-Black_444444.jpg?tr=w-898",
]

$(".mercedes.reng ul li").click(function() {
    $('.rengsekil').attr('src', `${mercedesrengler[$(this).attr('no')]}`)
})


var audirengler = [
    "https://stimg.cardekho.com/images/car-images/930x620/Audi/RS7/7808/1594895214971/223_Daytona-Gray-Pearlescent_38393d.jpg?tr=w-898",
    "https://stimg.cardekho.com/images/car-images/930x620/Audi/RS7/7808/1594895214971/221_Tango-Red-Metallic_ae031c.jpg?tr=w-898",
    "https://stimg.cardekho.com/images/car-images/930x620/Audi/RS7/7808/1594895214971/228_Nardo-Gray_727680.jpg?tr=w-898",
    "https://stimg.cardekho.com/images/car-images/930x620/Audi/RS7/7808/1594895214971/222_Sebring-Black-Crystal-Effect_080d16.jpg?tr=w-898",
    "https://stimg.cardekho.com/images/car-images/930x620/Audi/RS7/7808/1594895214971/226_Glacier-White-Metallic_c2c5cc.jpg?tr=w-898",
    "https://stimg.cardekho.com/images/car-images/930x620/Audi/RS7/7808/1594895214971/225_Myth-Black-Metallic_040404.jpg?tr=w-898",
    "https://stimg.cardekho.com/images/car-images/930x620/Audi/RS7/7808/1594895214971/224_Navarra-Blue-Metallic_041538.jpg?tr=w-898",
]

$(".audi.reng ul li").click(function() {
    $('.rengsekil').attr('src', `${audirengler[$(this).attr('no')]}`)
})















$('.back button').click(function() {
    $('.back').css("height", "0vh")
    $(this).hide()
    $('nav').css("color", "black")
    $('nav a').css("color", "black")
})