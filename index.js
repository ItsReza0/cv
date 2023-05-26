var mybuts = ["green", "blue", "yellow", "red"]
var temp = [];
var counter = 0;
var level = 1;
var alowClick = false;
var start_checker = true;
var terry  = 0
$('body').keyup(function (event) {if (event.key === 'Enter' && start_checker){start_checker = false; rolling()}});

$('.btn').click(function (event) {
    if(alowClick === true){
        if(event.target.id === temp[counter]){
            anime(counter)
            counter += 1
            if (temp.length === counter){
                alowClick = false;
                level += 1;
                rolling();
            }
        }else{
            $('h1').text("Game over, press Enter to restart the game");
            temp = [];
            level = 1;
            alowClick = false;
            start_checker = true;
            counter = 0;
            $('body').addClass("game-over");
            setTimeout(() => {
                $('body').removeClass('game-over')
            }, 1000);
            var myaud = new Audio("sounds/wrong.mp3")
            myaud.play()

        }
    }
})

function rolling(){
    counter = 0;
    var ran = Math.random();
    temp.push(mybuts[Math.floor(ran * 4)]);
    roll = false;
    $('h1').text("level " + level);
    var i = temp.length - 1
    setTimeout(function(){var aud = new Audio("sounds/"+temp[i] + ".mp3");
    aud.play();
    anime(i);
    alowClick = true;
    }, 800)
}

function anime(i){
    $("." + temp[i]).addClass('pressed')
        setTimeout(() => {
            
            $('.' + temp[i]).removeClass("pressed")
        }, 100);
}
