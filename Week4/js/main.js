/**
 * Created by KaseTebo on 10/18/14.
 */

(function ($) {
    $('#signinButton').click(function () {
        var user = $('#user').val();
        var pass = $('#pass').val();
        console.log("The username is: " + user + " The Password Is: " + pass);

        $.ajax({
            url: 'xhr/login.php',
            type: 'post',
            dataType: 'json',
            data: {
                username: user,
                password: pass
            },
            success: function (response) {
                if (response.error) {
                    alert(response.error);
                } else {
                    window.location.assign('admin.html');
                }
            }
        });


    });


//    LOGOUTTTTTT


    $('#logOut').click(function (e) {
        e.preventDefault();
        $.get('xhr/logout.php', function () {
            window.location.assign('index.html');
        })
    })


//    Display Username


    $.getJSON("xhr/check_login.php", function (data) {
//        console.log(data);
        $.each(data, function (key, val) {
//            console.log(val.first_name);
            $(".userid").html("Welcome User: " + val.first_name);
        })
    });


//    REGISTER

    $('#register').on('click', function () {
        var firstname = $('#first-name').val(),
            lastname = $('#last-name').val(),
            username = $('#user-name').val(),
            email = $('#email').val(),
            password = $('#password').val();

        console.log(firstname + " " + lastname + " " + username + " " + email + " " + password);

        $.ajax({
            url: 'xhr/register.php',
            type: 'post',
            dataType: 'json',
            data: {
                first_name: firstname,
                last_name: lastname,
                username: username,
                email: email,
                password: password
//            Phone, City State, Zipcode, Avatar, Role
            },

            success: function (response) {
                if (response.error) {
                    alert(response.error);
                } else {
                    window.location.assign('admin.html');
                }
            }
        });
    });


// Go To Profile Page


    $('.accountbtn').on("click", function (e) {
        e.preventDefault();
        window.location.assign("profile.html");
    });

// Go To Projects Page

    $('.projectsbtn').on('click', function (e) {
        e.preventDefault();
        window.location.assign('projects.html');
    });

// Update Account Information






    var updateAcct = function () {
        console.log('Pulls user info');
        $.ajax({
            url: 'xhr/get_user.php',
            type: 'get',
            dataType: 'json',
            success: function (response) {
                if (response.error) {
                    alert(response.error)
                } else {
                    var updatefirstname = response.user.first_name;
                    var updatelastname = response.user.last_name;
                    var updateemail = response.user.email;
                };
            }
        });






        $('#updateAcctBtn').on("click", function (e) {
            e.preventDefault();
            var changedfirstname = $('#updateFirstName').val();
            var changedlastname = $('#updateLastName').val();
            var changedemail = $('#updateEmail').val();

            console.log(changedfirstname);

            $.ajax({
                url: 'xhr/update_user.php',
                type: 'post',
                dataType: 'json',
                data: {
                    first_name: changedfirstname,
                    last_name: changedlastname,
                    email: changedemail
                },
                success: function (response) {
                    if (response.error) {
                        console.log(response.error);
                    } else {
                        console.log('Account Updated');
                    };

                }
            });

        });
    };


})(jQuery);