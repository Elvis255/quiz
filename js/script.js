/* global $ */



$(document).ready(function() {
    $("#click").click(function() {
      
        var name = $("#name").val();
        var songPlacement = " ";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore = questionOne(q1Result) + questionTwo(q2Result)+ questionThree(q3Result);
         function questionOne(q1Result){
        if (q1Result==="Run"){
            return 1;

        }
        else if(q1Result==="Sleep"){
            return 2;
        }
        else if(q1Result==="Shop"){
            return 3;
        }
    }
    function questionTwo(q2Result){
        if (q2Result==="Korea"){
            return 3;
        }
        else if(q2Result==="Colombia"){
            return 2;
        }
        
        else if(q2Result==="Spain"){
            return 1;
        }
        
    }
    function questionThree(q3Result){
        if (q3Result==="5"){
            return 1;
        }
        else if(q3Result==="4"){
            return 2;
        }
        else if (q3Result==="3"){
            return 3;
        }
        else if (q3Result==="2"){
            return 4;
        }
        else if(q3Result==="1"){
            return 5;
        }
    }  
          
          
           function congrats(name){
        $("#answer").text("Congratulations "+ name+ " your next song will be "+ displayResult());
    }
          
          
          function displayResult(){
    if (totalScore<=3){
        return " Changes by XXXTENTACION";
    }
    else if (totalScore>3 && totalScore<=5){
        return " DDU-DDU-DU by BLACKPINK";
    }
    else if (totalScore===6){
        return " MIA by Bad Bunny ft. Drake";
    }
    else if (totalScore > 6) {
        return " I Heard Goodbyes by Dan + Shay";
    }
    }
       function displayPic(){
    if (totalScore<=3){
       $(".siliconValley").attr("src","https://i.ytimg.com/vi/f0bbDFRYD_A/maxresdefault.jpg");
    }
    else if (totalScore>3 && totalScore<=5){
        $(".siliconValley").attr("src","https://i.ytimg.com/vi/IHNzOHi8sJs/maxresdefault.jpg");
    }
    else if (totalScore===6){
        $(".siliconValley").attr("src","https://wmscradio.com/wp-content/uploads/sites/4/2018/11/mia-bad-bunny.png");
    }
    else if (totalScore > 6) {
        $(".siliconValley").attr("src","data:image/jpeg;base64,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");
    }
    }
       
   
         displayResult(totalScore);
         congrats(name);
         displayPic(totalScore);
        
    });
    });
   

   






