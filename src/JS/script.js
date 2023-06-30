$(document).ready(function () {
    $("#password").on('keyup', function() {
        let pass = $("#password").val();
        
        let strong = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
        let medium = new RegExp("((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))");
        if(strong.test(pass)) {
            $("#strength").html("<h3 style='color:green'>Strong</h3>");
        } else if(medium.test(pass)) {
            $("#strength").html("<h3 style='color:blue'>fair</h3>");
        }else {
            $("#strength").html("<h3 style='color:red'>Weak</h3>");
        }
    })
});
