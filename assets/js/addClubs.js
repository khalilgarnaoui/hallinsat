/* File used to dynamically add Clubs List in website */

var logos = ["theatro2.png",
    "isn2.png",
    "jei2.png",
    "autoclub2.png",
    "cine2.png",
    "enactus2.png",
    "iac2.png",
    "chem2.png",
    "sb2.png",
    "securinets2.png",
    "ip2.png",
    "timun2.png",
    "aerobotix2.png",
    "tadabor2.png",
    "techlens2.png",
    "tr2.png",
    "acm2.png",
    "jci2.png",
    "amitie2.png",
    "dsc2.png"
];
var links = ["https://meet.google.com/yze-tgbh-oow",
    "https://meet.google.com/qqm-cuqz-hwp",
    "https://meet.google.com/wxn-szmg-yyo",
    "https://meet.google.com/ocy-mspy-jtc",
    "https://meet.google.com/xqg-nsoc-geg",
    "https://meet.google.com/tcb-qhnw-ixs",
    "https://meet.google.com/zib-fxom-rjy",
    "https://meet.google.com/iya-ipir-zuo",
    "https://meet.google.com/bfb-fswu-cni",
    "https://meet.google.com/snu-hmnw-ocg",
    "https://meet.google.com/vyb-ovhi-mth",
    "https://meet.google.com/uzf-bzue-cqo",
    "https://meet.google.com/xrt-uhkk-dej",
    "https://meet.google.com/ouk-nuay-yhh",
    "https://meet.google.com/cts-xbnv-bri",
    "https://meet.google.com/wer-evbd-bcp",
    "https://sites.google.com/view/insat-acm/home",
    "https://meet.google.com/vdz-gdzd-vfj",
    "https://meet.google.com/vkf-urty-fsv",
    "https://meet.google.com/sue-cxbh-mub"
];

var toAdd = "";
for(let i=0;i<logos.length;i++) {

    /*if(!(i%4)) {
        toAdd += '<div class="row">';
    }*/

    toAdd +=
        '<div class="col-md-3 col-sm-4 col-xs-4" style="margin-bottom: 50px;">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
        '<div class="flip-card-front">' +
        '<img src="assets/images/'+logos[i]+'" alt="Brand Logo" style="width: auto">' +
        '</div>' +
        '<div class="flip-card-back">' +
        '<h1><a href=\'+links[i]+\'>Visiter le Stand</a></h1>' +
        '</div>' +
        '</div></div></div>';

    /*if(!(i%4)) {
        toAdd += '</div>';
    }*/

}

$(".mu-sponsors-content").append(toAdd);