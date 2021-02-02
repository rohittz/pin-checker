var inputNums = "";
var currentPIN;
var randomGenerator = function(){
    var random = Math.floor(Math.random() * (9999- 1001) + 1000);
    currentPIN = random;
    showinBox("gen-PIN", random);
}
function showinBox(id, value){
    var inputBox = document.getElementById(id);
    // console.log(value);
    inputBox.value = value;
}
var numClicked = function(){
    if(inputNums.length == 4){
        return;
    }
    inputNums += this.innerText;
    showinBox("input-num", inputNums);
}
var deleteOneCha = function(){
    inputNums = inputNums.slice(0, -1);
    // console.log(inputNums);
    showinBox("input-num", inputNums);
}
var deleteAllNums = function(){
    inputNums = "";
    showinBox("input-num", inputNums);
}
var submitted = function(){
    if(currentPIN == inputNums){
        console.log("It works");
    }
    else{
        console.log("hello no")
    }
}
var generatePIN = document.getElementsByClassName("btn-pin")[0];
var nums= document.getElementsByClassName("num");
var deleteOne = document.getElementById("del");
var deleteAll = document.getElementById("clear");
var submitBtn = document.getElementById("submit");
generatePIN.addEventListener("click", randomGenerator);
deleteOne.addEventListener("click", deleteOneCha);
deleteAll.addEventListener("click", deleteAllNums);
submitBtn.addEventListener("click", submitted);
for( var i = 0 ; i < nums.length ; i++){
    var singlenum = nums[i];
    singlenum.addEventListener("click", numClicked);
}