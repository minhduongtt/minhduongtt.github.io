$(window).load(function() {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');

    sendEmail("tạm biệt nhé!! tất cả hết rồi");
    // =============   Loading page   ============
    function loadPage() {
        $('.message-first').fadeIn('slow');
        var i = 0;

        function msgLoop(i) {
            if (i == 5) {
                $('.bye').css({
                    display: 'block',
                    opacity: 1
                });
            } else {
                $("p:nth-child(" + i + ")").fadeOut('slow').delay(2000).promise().done(function() {
                    i = i + 1;
                    $("p:nth-child(" + i + ")").fadeIn('slow').delay(4000);
                    msgLoop(i);
                });
            }
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
};