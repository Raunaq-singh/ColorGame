var colors = getRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = colors[pickTheColor(colors)];
var displayColor = document.getElementById("colorDisplay");
var displayMessage = document.getElementById("displayMessage");
var heading = document.querySelector("#heading");
var newColors = document.getElementById("newColors");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var isEasy = false;
var isHard = true;
var gameOver = false;

easy.addEventListener("click", function(){
    if(!isEasy){
        colors = getRandomColors(3);
        pickedColor = colors[pickTheColor(colors)];
        displayColor.textContent = pickedColor.toUpperCase();
        coloringSquares(squares, colors);
        heading.style.backgroundColor = "steelblue";
        isEasy = true;
        isHard = false;
        displayMessage.innerHTML = "";
    }
})

hard.addEventListener("click", function(){
    if(!isHard){
        colors = getRandomColors(6);
        pickedColor = colors[pickTheColor(colors)];
        displayColor.textContent = pickedColor.toUpperCase();
        coloringSquares(squares, colors);
        heading.style.backgroundColor = "steelblue";
        isHard = true;
        isEasy = false;
        displayMessage.innerHTML = "";
    }
})

newColors.addEventListener("click", function(){
    
    if(isHard)
        colors = getRandomColors(6);
    else
        colors = getRandomColors(3);

    pickedColor = colors[pickTheColor(colors)];
    coloringSquares(squares, colors);
    displayColor.textContent = pickedColor.toUpperCase();
    heading.style.backgroundColor = "steelblue";
    displayMessage.innerHTML = "";
    newColors.innerHTML = "New Colors";
})

displayColor.textContent = pickedColor.toUpperCase();

for(var i=0; i<colors.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click",function(){
        var choosenColor = String(this.style.backgroundColor);

        if(pickedColor === choosenColor){
            //alert("Clicked");
            //this.style.backgroundColor = "rgb(255, 255, 255)";
            displayMessage.innerHTML = "Correct :D";
            if(isHard)
                colorAll(squares, 6);
            else
                colorAll(squares, 3);

            heading.style.backgroundColor = choosenColor;
            gameOver = true;
            newColors.innerHTML = "Play Again?";
        }
        else{
            //alert("Wrong clicked");
            this.style.backgroundColor = "#232323";
            displayMessage.innerHTML = "Try Again :(";
        }
    })
}

function coloringSquares(squares, colors){
    for(var i=0; i<colors.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }

    if(colors.length === 3){
        for(var i=3; i<squares.length; i++){
            squares[i].style.backgroundColor = "#232323";
        }
    }
}

function colorAll(arr, num){
    for(var i=0; i<num; i++){
        arr[i].style.backgroundColor = pickedColor;
    }
}

function pickTheColor(colors){
    return Math.floor(Math.random()*colors.length);
}

function getRandomColors(num){
    var randomColors = new Array();

    for(var i=0;i<num;i++){
        randomColors.push(randomColorGenerator());
    }
    
    return randomColors;
}

function randomColorGenerator(){
    var ret = "";

    //generating content of red;
    var red = Math.floor((Math.random())*256);

    //generating content of green;
    var green = Math.floor((Math.random())*256);

    //generating content of blue;
    var blue = Math.floor((Math.random())*256);

    ret += "rgb(";
    ret += red;
    ret += ", ";
    ret += green;
    ret += ", ";
    ret += blue;
    ret += ")";

    //alert(ret);
    return ret;
}