$(document).ready(function () { 


    var rand_num = Math.floor(Math.random() * 100);
    var hints = '';

    var gameFieldSrc = "res/fragments/game.html";
    var inputNameSrc = "res/fragments/name-form.html"

    var playersNamesArr = [];
    //var playersAnswArr = [],[];

    console.log(rand_num); 

    $("#game-field").load(inputNameSrc);

    $("#input_num").click(function () { 
        
        playerTry++;

        var num = $('#you_num').val(); 

        console.log(num)

        if (num == rand_num) { 
 
            hints += 'Вірно, Ви перемоголи' + '<br>'; 
            $("#winners_list").html += playersNamesArr[--playersNamesArr.length] + "<br>"
 
        } else {
            hints += 'Неправильно, дане число';

            if (num < rand_num) { 
                hints += ' більше ' + num;
            }
            else {
                hints += ' менше ' + num;
            }
            hints += '<br>'
        }
        $('#rez').html(hints);
    });

    $("#input_name").click(function () { 
        playersNamesArr.push( $('#name').val());
        $("#game-field").html = ""; 
        $("#game-field").load(inputNameSrc);
    });

});