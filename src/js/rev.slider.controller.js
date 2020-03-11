jQuery(document).ready(function () {
    "use strict";
    var revapi;
    if ($("#rev_slider").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider");
    } else {
        revapi = $("#rev_slider").show().revolution({
            sliderType: "standard",
            jsFileLocation: "js/",
            stopLoop: 'off', //Disable Autoplay: stopLoop: 'on',
            stopAfterLoops: -1, //Disable Autoplay: stopAfterLoops: 0,
            stopAtSlide: -1, //Disable Autoplay: stopAtSlide: 1,
            dottedOverlay: 'none', //網格效果 Options are “twoxtwo”, “twoxtwowhite”, “threexthree” and “threexthreewhite”.
            sliderLayout: "auto",
            delay: 5000,
            lazyLoad: "on",
            navigation: {
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on"
                },
                arrows: {
                    style: "erinyen",
                    enable: true,
                    hide_onmobile: false,
                    hide_under: 992,
                    hide_onleave: false,
                    tmp: '<div class="tp-title-wrap"> <div class="tp-arr-imgholder"></div> <div class="tp-arr-img-over"></div> <span class="tp-arr-titleholder">{{title}}</span> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 25,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 25,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: false
                }
            },
            //768 以下解析度要 +1 ，但文字吃會差1，所以文字若桌機跟手機不同顏色或樣式，要用CSS強制控制
            responsiveLevels: [3841, 1920, 1440, 1366, 1024, 769, 415, 376, 361, 321],
            gridwidth: [3830, 1903, 1370, 1170, 900, 750, 410, 370, 350, 315],
            gridheight: [1394, 700, 523, 500, 400, 270, 150, 139, 133, 119], //BANNER 高度設定免調CSS
            lazyType: "single", //single 啟用延遲載入，圖片路徑要改為 data-lazyload="" 並加上 src="假圖或loading圖"
            spinner: "spinner2", //loading圖示，設為2為自訂，src=""
            parallax: {
                type: "on",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
                disable_onmobile: "on"
            },
            debugMode: false
        });
    }
});