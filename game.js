var correctNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  let txtu = ' Угадать'
  var guess = document.getElementById("guess").value;
  var result = document.getElementById("result");
 

  if (guess == correctNumber) {
    result.innerHTML = "Поздравляю! Ты нашел нужное число!";
   
  } else if (guess > correctNumber) {
    result.innerHTML = "Это число больше загаданного. Попробуй еще.";
  } else {
    result.innerHTML = "Это число меньше загаданного. Попробуй еще.";
  }
}
document.addEventListener('click', ({ target: t }) => {
  if (t.classList.contains('click-count')) {
     t.innerText = (t.innerText | 0) + 1;
    
   }
 });



// window.onload = function () {
//   let clickDiv = document.getElementById("click-div");
//   clickDiv.onclick = incrementClick;

// }

// var counterVal = 0;

// incrementClick = function() {
//   updateDisplay(++counterVal);
// }


// function updateDisplay(val) {
//   document.getElementById("counter-label").innerHTML = val;
// }