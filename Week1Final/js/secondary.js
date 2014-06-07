/**
 * Created by KaseTebo on 6/6/14.
 */
(function () {





    var topGame1 = document.querySelector("#Top1");
    var topGame2 = document.querySelector("#Top2");
    var topGame3 = document.querySelector("#Top3");

    var value = document.querySelector("#RG1");
    var range = document.querySelector("#xbox1");

    var value1 = document.querySelector("#RG2");
    var range1 = document.querySelector("#playstation1");

    var value2 = document.querySelector("#RG3");
    var range2 = document.querySelector("#Wii1");

    var value3 = document.querySelector("#RG4");
    var range3 = document.querySelector("#PC");

//    console.log(range.value);
//    console.log(value.innerHTML);

    $(range).on('change', function () {
        $(value).html(range.value);
    });

    $(range1).on('change', function () {
        $(value1).html(range1.value);
    });

    $(range2).on('change', function () {
        $(value2).html(range2.value);
    });

    $(range3).on('change', function () {
        $(value3).html(range3.value);
    });


    $(topGame1).mousedown(function () {
        $(topGame1).draggable({ start: function (mouseDown, focus, window, enable) {
        }})();

        $(topGame2).mousedown(function () {
            $(topGame2).draggable({ start: function (mouseDown, focus, window, enable) {
            }})();
             });
            $(topGame3).mousedown(function () {
                $(topGame3).draggable({ start: function (mouseDown, focus, window, enable) {
                }})();
            });

    });
})();