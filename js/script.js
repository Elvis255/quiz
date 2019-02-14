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
        if (q3Result==="Happy"){
            return 1;
        }
        else if(q3Result==="Sad"){
            return 2;
        }
        else if (q3Result==="Hungry"){
            return 3;
        }
        else if (q3Result==="Tired"){
            return 4;
        }
        else if(q3Result==="Angry"){
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
        return " Tequila by Dan + Shay";
    }
    }
       function displayPic(){
    if (totalScore<=3){
       $(".siliconValley").attr("src","https://i.ytimg.com/vi/f0bbDFRYD_A/maxresdefault.jpg");
    }
    else if (totalScore>3 && totalScore<=5){
        $(".siliconValley").attr("src","https://78.media.tumblr.com/70015bc0affc81b02239e18002456a8e/tumblr_padcx3VoWd1urmyjyo5_r1_500.gif");
    }
    else if (totalScore===6){
        $(".siliconValley").attr("src","http://static1.squarespace.com/static/5795f260414fb5c7c374b62a/5795f35a9c03e0de76872d14/5bc0429fe2c4835e820d29ce/1539327791777/Bad-Bunny-Drake.gif?format=1500w");
    }
    else if (totalScore > 6) {
        $(".siliconValley").attr("src","http://bestfan.com/blog/wp-content/uploads/2018/03/giphy-20.gif");
    }
       }
     function displayLink(){
    if (totalScore<=3){
       $("#link").append("<a href="+"https://www.youtube.com/watch?v=f0bbDFRYD_A"+">"+"Play Now"+"</a");
    }
    else if (totalScore>3 && totalScore<=5){
        $("#link").append("<a href="+"https://www.youtube.com/watch?v=IHNzOHi8sJs"+">"+"Play Now"+"</a");
    }
    else if (totalScore===6){
        $("#link").append("<a href="+"https://www.youtube.com/watch?v=OSUxrSe5GbI"+">"+"Play Now"+"</a");
    }
    else if (totalScore > 6) {
         $("#link").append("<a href="+"https://www.youtube.com/watch?v=c4qgqNS_20s"+">"+"Play Now"+"</a");
    }
    }

         displayResult(totalScore);
         congrats(name);
         displayPic(totalScore);
         displayLink(totalScore);
        
    });
    });
   

   






