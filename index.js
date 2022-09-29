var options = ["rock","scissors","paper"];

$("#start").click(function(){
    var randomP1 = Math.floor(Math.random()*3);
    var randomP2 = Math.floor(Math.random()*3);
    var p1Pick = options[randomP1];
    var p2Pick = options[randomP2];
    $("#p1").attr("src","images/"+p1Pick+".png");
    $("#p2").attr("src","images/"+p2Pick+".png");
    if(p1Pick === "rock" && p2Pick === "scissors"){
        $(".result").text("Player 1 Wins!");
    }
    else if(p1Pick === "scissors" && p2Pick === "rock"){
        $(".result").text("Player 2 Wins!");
    }
    else if(p1Pick === "rock" && p2Pick === "paper"){
        $(".result").text("Player 2 Wins!");
    }
    else if(p1Pick === "paper" && p2Pick === "rock"){
        $(".result").text("Player 1 Wins!");
    }
    else if(p1Pick === "scissors" && p2Pick === "paper"){
        $(".result").text("Player 1 Wins!");
    }
    else if(p1Pick === "paper" && p2Pick === "scissors"){
        $(".result").text("Player 2 Wins!");
    }
    else if(p1Pick === p2Pick){
        $(".result").text("It's a draw!");
    }
});

