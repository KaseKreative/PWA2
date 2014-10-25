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
                firstname: firstname,
                lastname: lastname,
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



//    Display Username


    $.getJSON("xhr/check_login.php", function (data) {
//        console.log(data);
        $.each(data, function (key, val) {
//            console.log(val.first_name);
            $(".userid").html("Welcome User: " + val.first_name);
        })
    });



// Go To Profile Page


    $('.accountbtn').on("click", function (e) {
        e.preventDefault();
        window.location.assign("profile.html");
    });

// Go To Projects Page

    $('.projectsbtn').on('click', function (e) {
        e.preventDefault();
        window.location.assign('Project.html');
    });

// Update Account Information


//
//
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
                    var updatefirstname = response.user.firstname;
                    var updatelastname = response.user.lastname;
                    var updateemail = response.user.email;
                };
            }
        });

//
//
//
//
//
        $('#updateAcctBtn').on("click", function (e) {
            e.preventDefault();



            var changedfirstname = $('#updateFirstName').val();
            var changedlastname = $('#updateLastName').val();
            var changedemail = $('#updateEmail').val();


            $.ajax({
                url: 'xhr/update_user.php',
                type: 'post',
                dataType: 'json',
                data: {
                    firstname: changedfirstname,
                    lastname: changedlastname,
                    email: changedemail
                },
                success: function (response) {
                    if (response.error) {
                        console.log(response.error);
                    } else {
                        console.log('Account Updated');
//                        window.location.assign("admin.html");
                    };

                }
            });

        });
    };

//    SHOW MODAL

    $("#addBtn").on("click", function(){
       $("#Modal").show();
    });

    $("#exit").on("click", function(){
        $("#Modal").hide();
    })



    $(".projects").sortable()
        .disableSelection();












    $('#add').on('click', function(e) {
        e.preventDefault();
        var projName = $('#boardName').val(),
            projDesc = $('#boardType').val(),
            projDue = $('#purchaseDate').val(),
            status = $('input[name = "status"]:checked').prop("id");

        $.ajax({
            url: "xhr/new_project.php",
            type: "post",
            dataType: "json",
            data: {
                projectName: projName,
                projectDescription: projDesc,
                dueDate: projDue,
                status: status
            },
            success: function(response) {
                console.log('Testing for success');

                if(response.error) {
                    alert(response.error);
                } else {
                    window.location.assign("Project.html");
                };
            }
        });
    });




//    GET PROJECTS

    var projects = function () {
        $.ajax({
            url: 'xhr/get_projects.php',
            type: 'get',
            dataType: 'json',
            success: function (response) {
                if (response.error) {
                    alert(response.error)
                } else {
                    for (var i = 0, j = response.projects.length; i < j; i++) {
                        var result = response.projects[i];

                        $(".projects").append(
                            '<div class="ui-state-default" style="border:1px solid black; margin:0 10px; border-radius: 10px; padding: 5px;">' +
                                '<div id="sortable" class="ui-state-active box-size">' +
                                " <input class='projectid' type='hidden' value='" + result.id + "'>" +
                                " Board Name: " + result.projectName + "<br>" +
                                " Purchase Date: " + result.dueDate + "<br>" +
                                " Board Type: " + result.projectDescription + "<br>" +
                                " Board Status: " + result.status + "<br>"
                                + '<button class="deletebtn">Delete</button>'
                                + "<button data='" + result.id + "'class='editbtn'>Edit</button>"
                                + '</div> </div> <br>'

                        );

                };



////    DELETE BTN

    $(".deletebtn").on("click", function(e){
        var pid = $(this).parent().find(".projectid").val();
         $.ajax({
            url: "xhr/delete_project.php",
            data: {
                projectID: pid
            },
            type: 'POST',
            dataType: 'json',
            success: function(){
                console.log("Testing for success");

                if (response.error) {
                    alert(response.error);
                } else {
                    window.location.assign("Project.html");
                };
            }
        });
    });

            }

        }

    })

};
    projects();
//





            })(jQuery);