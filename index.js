$("button").click(function(){
    var dice1 = drawDice()[0]
    var dice2 = drawDice()[1]
    $(".dice1").removeClass('start-dice');
    $(".dice2").removeClass('start-dice');
    if(dice1>dice2){
        $(".title").text("WIN PLAYER ONE");
    }
    else if(dice1<dice2){
        $(".title").text("WIN PLAYER TWO");
    }
    else{
    }

    switch (dice1) 
    { 
        case 1:
            $(".dice1").html(htmlDice1)
            break;
        case 2:
            $(".dice1").html(htmlDice2)
            break;
        case 3:
            $(".dice1").html(htmlDice3)
            break;
        case 4:
            $(".dice1").html(htmlDice4)
            break;
        case 5:
            $(".dice1").html(htmlDice5)
            break;
        case 6:$(".dice1").html(htmlDice6)
            break;
    
        default:
            break;
        }


        switch (dice2) 
    { 
        case 1:
            $(".dice2").html(htmlDice1)
            break;
        case 2:
            $(".dice2").html(htmlDice2)
            break;
        case 3:
            $(".dice2").html(htmlDice3)
            break;
        case 4:
            $(".dice2").html(htmlDice4)
            break;
        case 5:
            $(".dice2").html(htmlDice5)
            break;
        case 6:$(".dice2").html(htmlDice6)
            break;
    
        default:
            break;
        }
})


function drawDice(){
    var dice1,dice2
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2= Math.floor(Math.random() * 6) + 1;
    return [dice1,dice2]
}
var htmlDice1 = `
<div class="one dice">
<span class="dot"></span>
</div>
`;
var htmlDice2 = `
<div class="two dice">
<span class="dot"></span>
<span class="dot"></span>
</div>
`;
var htmlDice3 = `
<div class="tree dice">
<span class="dot"></span>
<span class="dot"></span>
<span class="dot"></span>
</div>
`;
var htmlDice4 = `
<div class="fourth dice">
<div class="column">
    <span class="dot"></span>
    <span class="dot"></span>
</div>
<div class="column">
    <span class="dot"></span>
    <span class="dot"></span>
</div>
</div>
`;
var htmlDice5 = `
<div class="fifth dice">
    <div class="column">
        <span class="dot"></span>
        <span class="dot"></span>
    </div>
    <div class="center-column column">
        <span class="dot"></span>
    </div>
    <div class="column">
        <span class="dot"></span>
        <span class="dot"></span>
    </div>
</div>
`;
var htmlDice6 = `
<div class="sixty dice">
    <div class="column">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>
    <div class="column">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>
</div>
`;