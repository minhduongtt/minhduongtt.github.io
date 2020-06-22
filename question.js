$(window).load(function() {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
    sendEmail("Đang xem");
    // =============   Loading page   ============
    function loadPage() {
        $('.message-first').fadeIn('slow');
        var i;

        function msgLoop(i) {
            $("p:nth-child(" + i + ")").fadeOut('slow').delay(2000).promise().done(function() {
                i = i + 1;
                $("p:nth-child(" + i + ")").fadeIn('slow').delay(4000);
                if (i == 4) {
                    $("p:nth-child(4)").fadeOut('slow').promise().done(function() {
                        $('#turn_on').fadeIn('slow');

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

function sendEmail(text) {
    Email.send({
            Host: "smtp.gmail.com",
            Username: "viettqhe130524@fpt.edu.vn",
            Password: "tranquangviet",
            To: 'mv.taikhoanmoi@gmail.com',
            From: "viettqhe130524@fpt.edu.vn",
            Subject: "Test email",
            Body: text
        })
        .then(function(message) {

        });
}
$('document').ready(function() {

    // =============   Turn on light and Music   ============

    $('#turn_on').click(function() {
        var audio = $('.song')[0];
        audio.play();
        sendEmail("Click");
        // message two and play music
        function msgLoopLing(i, k, where) {
            $("p:nth-child(" + i + ")").fadeOut('slow').delay(3000).promise().done(function() {
                i = i + 1;
                $("p:nth-child(" + i + ")").fadeIn('slow').delay(4000);
                if (i == k) {
                    $("p:nth-child(" + k + ")").fadeOut('slow').promise().done(function() {
                        $(where).fadeIn('slow');
                        sendEmail("Xem câu hỏi");
                        audio.pause();
                        $('.message-two').fadeOut('slow');
                    });
                } else {
                    msgLoopLing(i, k, where);
                }
            });
        }

        $(this).fadeOut('slow').delay(2000).promise().done(function() {
            $('.message-two').fadeIn('slow');
            msgLoopLing(0, 54, '#bannar_coming');
        });
    });

    // =============   Banner and ballon  ============

    $('#q1_yes').click(function() {
        var audio = $('.song2')[0];
        audio.play();
        $('#bannar_coming').fadeOut('slow');
        sendEmail("còn tình cảm");

        function msgLoopLing(i, k) {
            $("p:nth-child(" + i + ")").fadeOut('slow').delay(3000).promise().done(function() {
                i = i + 1;
                $("p:nth-child(" + i + ")").fadeIn('slow').delay(4000);
                if (i == 4) {
                    $("p:nth-child(4)").fadeOut('slow').promise().done(function() {
                        $('.Q1-Yes-As').fadeOut('slow');
                        $('#Q2').fadeIn('slow');
                    });
                } else {
                    msgLoopLing(i, k);
                }

            });
        }
        $(this).fadeOut('slow').delay(2000).promise().done(function() {
            $('.Q1-Yes-As').fadeIn('slow');
            msgLoopLing(0, 1);

        });
    });
    $('#q1_no').click(function() {
        var audio = $('.song3')[0];
        audio.play();
        $('#bannar_coming').fadeOut('slow');
        sendEmail("không còn tình cảm");

        function msgLoopLing(i, k) {
            $("p:nth-child(" + i + ")").fadeOut('slow').delay(3000).promise().done(function() {
                i = i + 1;
                $("p:nth-child(" + i + ")").fadeIn('slow').delay(4000);
                if (i == 4) {
                    $("p:nth-child(4)").fadeOut('slow').promise().done(function() {
                        $('.Q1-No-As').fadeOut('slow');
                        $('#Q3').fadeIn('slow');
                    });
                } else {
                    msgLoopLing(i, k);
                }

            });
        }
        $(this).fadeOut('slow').delay(2000).promise().done(function() {
            $('.Q1-No-As').fadeIn('slow');
            msgLoopLing(0, 1);

        });
    });
    //Q2
    $('#q2_yes').click(function() {
        $('#Q2').fadeOut('slow');
        sendEmail("còn tình cảm - đồng ý");

        function msgLoopLing(i, k) {
            $("p:nth-child(" + i + ")").fadeOut('slow').delay(3000).promise().done(function() {
                i = i + 1;
                $("p:nth-child(" + i + ")").fadeIn('slow').delay(4000);
                if (i == 5) {
                    $("p:nth-child(4)").fadeOut('slow').promise().done(function() {
                        $('.Q2-yes-As').fadeIn('slow');
                    });
                } else {
                    msgLoopLing(i, k);
                }

            });
        }
        $(this).fadeOut('slow').delay(2000).promise().done(function() {
            $('.Q2-Yes-As').fadeIn('slow');
            msgLoopLing(0, 1);

        });
    });
    $('#q2_no').click(function() {
        $('#Q2').fadeOut('slow');
        sendEmail("còn tình cảm - không đồng ý");

        function msgLoopLing(i, k) {
            $("p:nth-child(" + i + ")").fadeOut('slow').delay(3000).promise().done(function() {
                i = i + 1;
                $("p:nth-child(" + i + ")").fadeIn('slow').delay(4000);
                if (i == 4) {
                    $("p:nth-child(4)").fadeOut('slow').promise().done(function() {
                        $('.Q2-No-As').fadeOut('slow');
                    });
                } else {
                    msgLoopLing(i, k);
                }

            });
        }
        $(this).fadeOut('slow').delay(2000).promise().done(function() {
            $('.Q2-No-As').fadeIn('slow');
            msgLoopLing(0, 1);

        });
    });
    //Q3
    $('#q3_yes').click(function() {
        $('#Q3').fadeOut('slow');
        sendEmail("Ko còn tình cảm - đồng ý");

        function msgLoopLing(i, k) {
            $("p:nth-child(" + i + ")").fadeOut('slow').delay(3000).promise().done(function() {
                i = i + 1;
                $("p:nth-child(" + i + ")").fadeIn('slow').delay(4000);
                if (i == 4) {
                    $("p:nth-child(4)").fadeOut('slow').promise().done(function() {
                        $('.Q3-Yes-As').fadeOut('slow');
                    });
                } else {
                    msgLoopLing(i, k);
                }

            });
        }
        $(this).fadeOut('slow').delay(2000).promise().done(function() {
            $('.Q3-Yes-As').fadeIn('slow');
            msgLoopLing(0, 1);
        });
    });

    $('#q3_no').click(function() {
        $('#Q3').fadeOut('slow');
        sendEmail("không còn tình cảm - không đồng ý");

        function msgLoopLing(i, k) {
            $("p:nth-child(" + i + ")").fadeOut('slow').delay(3000).promise().done(function() {
                i = i + 1;
                $("p:nth-child(" + i + ")").fadeIn('slow').delay(4000);
                if (i == 4) {
                    $("p:nth-child(4)").fadeOut('slow').promise().done(function() {
                        $('.Q3-No-As').fadeOut('slow');
                    });
                } else {
                    msgLoopLing(i, k);
                }

            });
        }
        $(this).fadeOut('slow').delay(2000).promise().done(function() {
            $('.Q3-No-As').fadeIn('slow');
            msgLoopLing(0, 1);

        });
    });
});