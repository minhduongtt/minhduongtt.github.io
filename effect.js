$(window).load(function() {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');

    // =============   Loading page   ============
    function loadPage() {
        $('.message-first').fadeIn('slow');
        var i;

        function msgLoop(i) {
            $("p:nth-child(" + i + ")").fadeOut('slow').delay(3000).promise().done(function() {
                i = i + 1;
                $("p:nth-child(" + i + ")").fadeIn('slow').delay(7000);
                if (i == 3) {
                    $("p:nth-child(3)").fadeOut('slow').promise().done(function() {
                        $('#story').fadeIn('slow');
                        $('.message-first').fadeOut('slow');
                    });
                } else {
                    msgLoop(i);
                }

            });
            // body...
        }
        msgLoop(0);
    };

    loadPage();
});
$('document').ready(function() {
    var vw;
    // =============   light   ============
    $(window).resize(function() {
        vw = $(window).width() / 2;
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b11').animate({ top: 240, left: vw - 350 }, 500);
        $('#b22').animate({ top: 240, left: vw - 250 }, 500);
        $('#b33').animate({ top: 240, left: vw - 150 }, 500);
        $('#b44').animate({ top: 240, left: vw - 50 }, 500);
        $('#b55').animate({ top: 240, left: vw + 50 }, 500);
        $('#b66').animate({ top: 240, left: vw + 150 }, 500);
        $('#b77').animate({ top: 240, left: vw + 250 }, 500);
    });

    function msgLoop(i, k, where) {
        $("p:nth-child(" + i + ")").fadeOut('slow').delay(3000).promise().done(function() {
            i = i + 1;
            $("p:nth-child(" + i + ")").fadeIn('slow').delay(7000);
            if (i == k) {
                $("p:nth-child(" + k + ")").fadeOut('slow').promise().done(function() {
                    $(where).fadeIn('slow');
                });
            } else {
                msgLoop(i, k, where);
            }

        });
    }

    // =============   Turn on light and Music   ============

    $('#turn_on').click(function() {
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');

        // message two and play music
        function msgLoopLing(i, k, where) {
            $("p:nth-child(" + i + ")").fadeOut('slow').delay(3000).promise().done(function() {
                i = i + 1;
                $("p:nth-child(" + i + ")").fadeIn('slow').delay(7000);
                if (i == k) {
                    $("p:nth-child(" + k + ")").fadeOut('slow').promise().done(function() {
                        var audio = $('.song')[0];
                        audio.play();
                        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
                        $('#bulb_red').addClass('bulb-glow-red-after');
                        $('#bulb_blue').addClass('bulb-glow-blue-after');
                        $('#bulb_green').addClass('bulb-glow-green-after');
                        $('#bulb_pink').addClass('bulb-glow-pink-after');
                        $('#bulb_orange').addClass('bulb-glow-orange-after');
                        $('body').css('backgroud-color', '#FFF');
                        $('body').addClass('peach-after');
                        $(where).fadeIn('slow');
                        $('.message-two').fadeOut('slow');
                    });
                } else {
                    msgLoopLing(i, k, where);
                }

            });
        }

        $(this).fadeOut('slow').delay(5000).promise().done(function() {
            $('.message-two').fadeIn('slow');
            msgLoopLing(0, 3, '#bannar_coming');
        });
    });

    // =============   Banner and ballon  ============

    $('#bannar_coming').click(function() {
        $('.bannar').addClass('bannar-come');

        function msgLoopLing(i, k) {
            $("p:nth-child(" + i + ")").fadeOut('slow').delay(3000).promise().done(function() {
                i = i + 1;
                $("p:nth-child(" + i + ")").fadeIn('slow').delay(6000);
                if (i == k) {
                    $("p:nth-child(" + k + ")").fadeOut('slow').promise().done(function() {
                        //ballon fly
                        $('.balloon-border').animate({ top: -500 }, 8000);
                        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
                        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
                        loopOne();
                        loopTwo();
                        loopThree();
                        loopFour();
                        loopFive();
                        loopSix();
                        loopSeven();
                    });

                }
                if (i == 5) {
                    $("p:nth-child(5)").fadeOut('slow').promise().done(function() {
                        $('.message-three').fadeOut('slow');
                        $('#cake_fadein').fadeIn('slow');
                    });
                } else {
                    msgLoopLing(i, k);
                }

            });
        }
        $(this).fadeOut('slow').delay(6000).promise().done(function() {
            $('.message-three').fadeIn('slow');
            msgLoopLing(0, 1);

        });
    });


    function loopOne() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b1').animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopOne();
        });
    }

    function loopTwo() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b2').animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopTwo();
        });
    }

    function loopThree() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b3').animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopThree();
        });
    }

    function loopFour() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b4').animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopFour();
        });
    }

    function loopFive() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b5').animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopFive();
        });
    }

    function loopSix() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b6').animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopSix();
        });
    }

    function loopSeven() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b7').animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopSeven();
        });
    }

    // =============   Cake and wish  ============

    $('#cake_fadein').click(function() {
        $('.cake').fadeIn('slow');
        var audio = $('.song')[0];
        audio.pause();
        var audio2 = $('.song2')[0];
        audio2.play();

        function msgLoopLing(i, k) {
            $("p:nth-child(" + i + ")").fadeOut('slow').delay(3000).promise().done(function() {
                i = i + 1;
                $("p:nth-child(" + i + ")").fadeIn('slow').delay(7000);
                if (i == k) {
                    $("p:nth-child(" + k + ")").fadeOut('slow').promise().done(function() {
                        $('#b1,#b4,#b5,#b7').addClass('hide');
                        $('#b2,#b3,#b6').addClass('hide');
                        $('#story').fadeIn('slow');
                        $('.message-four').fadeOut('slow');
                    });
                } else {
                    msgLoopLing(i, k);
                }

            });
        }
        $(this).fadeOut('slow').delay(3000).promise().done(function() {
            $('.message-four').fadeIn('slow');
            msgLoopLing(0, 9);
        });
    });

    //============ Message ===============

    $('#story').click(function() {
        var audio = $('.song3')[0];
        audio.play();
        var audio2 = $('.song2')[0];
        audio2.pause();

        $(this).fadeOut('slow').promise().done(function() {
            $('#b1,#b4,#b5,#b7').addClass('hide');
            $('#b2,#b3,#b6').addClass('hide');
            $('#cake').addClass('hide');
            $('.message').fadeIn('slow');
        });

        var i;

        function msgLoop(i) {
            $("p:nth-child(" + i + ")").fadeOut('slow').delay(2000).promise().done(function() {
                i = i + 1;
                $("p:nth-child(" + i + ")").fadeIn('slow').delay(2000);
                if (i == 28) {

                } else {
                    msgLoop(i);
                }

            });
            // body...
        }

        msgLoop(0);

    });
});