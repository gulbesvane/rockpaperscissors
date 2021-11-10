
var color = "#4b4d50";
var computersChoice;
var playersChoice;

//add  click event listener to each html item with class element
document.querySelectorAll('.element').forEach(item => {
  item.addEventListener('click', event => {
  	//this is the code to be executed when click is detected
  	//change the background of the element to indicate selection to the user
  	//console.log(item);
    item.style.backgroundColor = color;
    //set the players choice variable to the ID number of the item (had to introduce new id for this, 
    // couldnt find how to otherwise retrieve a number of the item selected)
    playersChoice = item.id;
    //test
    //console.log(playersChoice);
    calculateOutcome();
	setTimeout(function(){
		item.style.backgroundColor = "transparent";
	},50);
  })
})

function opponentsPick(){
	var images = new Array("images/rock.png","images/paper.png","images/scissors.png");
	var randomNum = Math.floor(Math.random() * images.length);
	
	document.getElementById("computersChoice").src = images[randomNum];
	computersChoice = randomNum+1;

	document.getElementById("computersChoice").style.backgroundColor = color;
	setTimeout(function(){
		document.getElementById("computersChoice").style.backgroundColor = "transparent";
	},50);
}


function calculateOutcome(){
		if(playersChoice == computersChoice){
			document.getElementById("result").innerHTML = "It's a draw!";
			}
		else if(playersChoice == 1 && computersChoice == 3){
			document.getElementById("result").innerHTML = "You won!";
			}
		else if(playersChoice==3 && computersChoice == 1){
			document.getElementById("result").innerHTML = "You lost!";
			}
		else if(playersChoice > computersChoice){
			document.getElementById("result").innerHTML = "You won!";
			}
		else{
			document.getElementById("result").innerHTML = "You lost!";
			}
		// for testing
		// console.log(`computer ${computersChoice}`);
		// console.log(`player ${playersChoice}`);
		}


// longer version of monitoring click event on each image
// const element1 = document.getElementById('1');
// const element2 = document.getElementById('2');
// const element3 = document.getElementById('3');


// // always checking if the element is clicked, if so, change colour to notify user and set playersChoice accordingly
// element1.addEventListener("click", () => {
// 	element1.style.backgroundColor = color;
// 	playersChoice = 1;
// // 	// for testing
// // 	// console.log("rock clicked!");
// // 	// console.log(playersChoice);
// 	calculateOutcome();
// 	setTimeout(function(){
// 		element1.style.backgroundColor = "transparent";
// 	},50);
// });

// element2.addEventListener("click", () => {
// 	element2.style.backgroundColor = color;
// 	playersChoice = 2;
// 	calculateOutcome();
// 	setTimeout(function(){
// 		element2.style.backgroundColor = "transparent";
// 	},50);
// });
// element3.addEventListener("click", () => {
// 	element3.style.backgroundColor = color;
// 	playersChoice = 3;
// 	calculateOutcome();
// 	setTimeout(function(){
// 		element3.style.backgroundColor = "transparent";
// 	},50);
// });


