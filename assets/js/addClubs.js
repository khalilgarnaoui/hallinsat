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
    "dsc2.png",
    "cim2.png",
    "ieee2.png",
    "dataoverflow2.png",
    "spark2.png"
];
var links = ["https://meet.google.com/yze-tgbh-oow",
    "https://meet.google.com/qqm-cuqz-hwp",
    "JEI/index.html",
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
    "https://meet.google.com/sue-cxbh-mub",
    "https://drive.google.com/file/d/1ldZPrXjjUEwNc8iLvV2toR1VdHfUyBu1/view",
    "https://meet.google.com/wad-nzjn-qph",
    "https://meet.google.com/aae-vvhd-zwt",
    "https://meet.google.com/eko-woku-oko"
];

var toAdd = "";
for(let i=0;i<logos.length;i++) {

    toAdd +=
        '<div class="col-md-3 col-sm-6 col-xs-12" style="margin-bottom: 50px;">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
        '<div class="flip-card-front">' +
        '<img src="assets/images/'+logos[i]+'" alt="Brand Logo" style="width: auto">' +
        '</div>' +
        '<div class="flip-card-back">' +
        '<h1><a href='+links[i]+'>Visiter le Stand</a></h1>' +
        '</div>' +
        '</div></div></div>';

}

$(".mu-sponsors-content").append(toAdd);