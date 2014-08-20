$(document).ready(function(){

  $(".name").on("change", function (){
    console.log("Name entered: " + userName);

    var userName = $("#username").val();

    $(this).siblings('.greeting').children('p').text("Hi there " + userName);

  });


$("#button").on("click",function (){


  var level = $(this).closest('fieldset').children('.levelGroup').find('input').val();

  if (level === "easy" ){
    // window.location.href = "scene1_easy.html";
    console.log("easy scene1: " + level);
  }

  else if (level === "medium"){
    // window.location.href = "scene1_medium.html";
    console.log("medium scene1: " + level);
  }

  else if (level === "hard"){
    // window.location.href = "scene1.html";
    console.log("hard scene1: "+ level);
  }




});






}); //end of document
