window.show_error = function(error) {
    $("#login-error").addClass("login-error--visible");
    $("#login-error").html(error);
};

$(document).ready(function(){
    $('#login').submit(
        function(){
            new QWebChannel(qt.webChannelTransport, function(channel){
                var router = channel.objects.router;
                var email = $('#email').val();
                var password = $('#password').val();

                if (email && password) {
                    router.js_handler_login(email, password);
                }
            });
            return false;
        }
    );

    $('#reset-password').click(
        function(){
            new QWebChannel(qt.webChannelTransport, function(channel){
                var router = channel.objects.router;
                var email = $('#email').val();

                if (email) {
                    router.js_handler_reset_password(email);
                    location.href = "password-reset.html";
                }
            });
       }
    );

    $('.open-url').click(
        function(){
            var button = this;

            new QWebChannel(qt.webChannelTransport, function(channel){
                var router = channel.objects.router;
                var url = $(button).attr("data-url");

                if (url) {
                    router.js_open_url(url);
                }
            });
        }
    );
});

