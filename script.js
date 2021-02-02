var inputNums = "";
var currentPIN;
var randomGenerator = function(){
    var random = Math.floor(Math.random() * (9999- 1001) + 1000);
    currentPIN = random;
    showinBox(generateBox, random);
}
function showinBox(Box, value){
    if(incorrectInfo.style.display != "none"){
        incorrectInfo.style.display = "none";
    }
    // console.log(value);
    Box.value = value;
}
var numClicked = function(){
    if(inputNums.length == 4){
        return;
    }
    inputNums += this.innerText;
    showinBox(inputBox, inputNums);
}
var deleteOneCha = function(){
    inputNums = inputNums.slice(0, -1);
    // console.log(inputNums);
    showinBox(inputBox, inputNums);
}
var deleteAllNums = function(){
    inputNums = "";
    showinBox(inputBox, inputNums);
}
var submitted = function(){
    if(currentPIN == inputNums){
        sectionRandom.style.display = "none";
        sectionInput.style.display = "none";
        correctInfo.style.display = "block";
    }
    else{
        incorrectInfo.style.display = "block";
        inputNums = "";
        inputBox.value = "";
    }
}
var playAgain = function(){
    sectionRandom.style.display = "inherit";
    location.reload();
}
var generatePIN = document.getElementsByClassName("btn-pin")[0];
var nums= document.getElementsByClassName("num");
var deleteOne = document.getElementById("del");
var deleteAll = document.getElementById("clear");
var submitBtn = document.getElementById("submit");
var sectionRandom = document.getElementsByClassName("random-generator")[0];
var sectionInput = document.getElementsByClassName("input-pin")[0];
var correctInfo = document.getElementById("correct");
var incorrectInfo = document.getElementById("incorrect");
var generateBox = document.getElementById("gen-PIN");
var inputBox = document.getElementById("input-num");
var playAgainbtn = document.getElementById("play-again");
generatePIN.addEventListener("click", randomGenerator);
deleteOne.addEventListener("click", deleteOneCha);
deleteAll.addEventListener("click", deleteAllNums);
submitBtn.addEventListener("click", submitted);
playAgainbtn.addEventListener("click", playAgain);
for( var i = 0 ; i < nums.length ; i++){
    var singlenum = nums[i];
    singlenum.addEventListener("click", numClicked);
}