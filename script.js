$(document).ready(function () {


    var rand_num = Math.floor(Math.random() * 100);
    var hints = '';
    var inputName;
    var inputNum;

    var gameFieldSrc = "res/fragments/game.html";
    var inputNameSrc = "res/fragments/name-form.html"

    var playersNamesArr = [];
    var playersAnswArr = new Array(2);

    console.log(rand_num);

  

    $("#input_name").on("click", function () {
        playersNamesArr.push($('#name').val());
        $("#game-field").html("");
        $("#game-field").load(gameFieldSrc);
        
    });

    $("body").on("click", "#input_num", function () {

        playerTry++;

        var num = $('#you_num').val();

        console.log(num)

        if (num == rand_num) {

            hints += 'Вірно, Ви перемоголи' + '<br>';
            $("#winners_list").html += playersNamesArr[--playersNamesArr.length] + "<br>"
            $("#game-field").load(inputNameSrc);
            inputName = $("#input_name");

        } else {
            hints += 'Неправильно, дане число';

            if (num < rand_num) {
                hints += ' більше ' + num;
            }
            else {
                hints += ' менше ' + num;
            }
            hints += '<br>'
            playersAnswArr[--playersNamesArr.length].push(num);
        }
        $('#rez').html(hints);
    });
});