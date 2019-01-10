/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var songPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });
    function quest1(q1Result){
        if (q1Result==" Run"){
            return 2;
        }
        else{
            return 1;
        }
    }
    function quest2(q2Result){
        if (q2Result=="Korea"){
            return 4;
        }
        else if(q2Result=="Colombia"){
            return 3;
        }
        else if(q2Result=="Spain"){
            return 2;
        }
        else{
            return 1;
        }
        
    }
    function quest3(q3Result){
        if (q3Result=="5"){
            return 1;
        }
        else if(q3Result=="4"){
            return 2;
        }
        else if (q3Result=="3"){
            return 3;
        }
        else if (q3Result=="2"){
            return 4;
        }
        else{
            return 5;
        }
    }
 $("button").click(function() {
        var totalScore= quest1 + quest2+ quest3;
    });
    function congrats(name){
        return "Congratulations "+ name+ " you're next song will be "+ songPlacement;
    }
    function displayResult(score){
    if (totalScore==3 || totalScore ==5){
        return " Changes by XXXTENTACION";
    }
    else if (totalScore==6 || totalScore==7){
        return " DDU-DDU-DU by BLACKPINK";
    }
    else if (totalScore==8 || totalScore==9){
        return " MIA by Bad Bunny ft. Drake"
    }
    else {
        return " I Heard Goodbyes by Dan + Shay"
    }


});




