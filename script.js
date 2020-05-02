$(document).ready(function () { 


    var rand_num = Math.floor(Math.random() * 100);
    var hints = '';

    var playersNamesArr = [];
    //var playersAnswArr = [],[];

    console.log(rand_num); 

    $("#game-field").load("res/fragments/game.html");

    $("#input_num").click(function () { 
        
        playerTry++;

        var num = $('#you_num').val(); 

        console.log(num)

        if (num == rand_num) { 
 
            hints += 'Вірно, Ви перемоголи' + '<br>'; 
 
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


});