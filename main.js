var ball = document.getElementById('ball');
var lvlup = document.querySelectorAll('.lvlup');
var counter = 0;
var ballStyle = getComputedStyle(ball);
var ballContainer = document.querySelector('.ball__container');
var button = document.getElementById('button');
	var hideBall = function () {
		lvlup[counter - 1].style.display = "block";
						ball.style.display = "none";
							setTimeout (function() {
								lvlup[counter - 1].style.display = "";
									ball.style.display = "";
							}, 1500);
	}
	button.onclick = function () {
		location.reload(true);
	}					   
	ball.onclick = function () {
		counter += 1;
		switch(counter) {
			// lvl= case + 1
			case 1: 
					ball.style.animationDuration = "1s";
					ball.style.animationTimingFunction = "ease-in-out";
						hideBall();
						break;
			case 2:
					ball.style.animationName = "change__lvl2";
					ball.style.animationDuration = "1.5s";
					ball.style.animationTimingFunction = "ease-out";
						hideBall();
						break;
			case 3:
					ball.style.animationName = "change__lvl3";
					ball.style.animationDirection = "normal";
						hideBall();
						break;
			case 4:
					ball.style.animationName = "change__lvl4"
					ball.style.animationDuration = "2.2s";
						hideBall();	
						break;
			case 5:
					ball.style.animationName = "none";
					ballContainer.style.animationName = "change__lvl5";
					ballContainer.style.animationDuration = "1.5s";
					ballContainer.style.animationIterationCount = "infinite";
					ballContainer.style.animationTimingFunction = "linear";
						hideBall();
						break;	
			case 6:
					var gameOver = document.querySelector('.gameover');
					gameOver.style.display = "block";
						ball.style.display = "none";
	}
}					   					 



