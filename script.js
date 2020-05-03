$(document).ready(function () {


    var rand_num = 0;  
    var hints = '';
    var winners = '';
    var inputName;
    var inputNumCount = 0;

    var gameFieldSrc = "res/fragments/game.html";
    var inputNameSrc = "res/fragments/name-form.html"

    var playersNamesArr = [];
    var playersAnswArr = [];

    console.log(rand_num);

    $("#game-field").load(inputNameSrc);


    $("body").on("click", "#input_name", function () {
        rand_num = Math.floor(Math.random() * 100);
        playersAnswArr.push(new Array(1));
        playersNamesArr.push($('#name').val());
        $("#game-field").html("");
        $("#game-field").load(gameFieldSrc);
        hints = '';
        inputNumCount = 0;
    });

    $("body").on("click", "#input_num", function () {

        var num = $('#you_num').val();

        console.log(num)

        if (num == rand_num) {
            winners += "" + playersNamesArr[playersNamesArr.length - 1] + " спроб: "
                + playersAnswArr[playersNamesArr.length - 1].length + "<br>";
            $("#winners_list").html(winners);
            $("#game-field").load(inputNameSrc);
            inputName = $("#input_name");
            alert("'Вірно, Ви перемоголи'")
        } else {
            hints += 'Неправильно, згенероване число';

            if (num < rand_num) {
                hints += ' більше ' + num;
            }
            else {
                hints += ' менше ' + num;
            }
            hints += '<br>'
            playersAnswArr[playersNamesArr.length - 1][inputNumCount++] = num;
        }
        $('#rez').html(hints);
    });
});