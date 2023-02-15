var correctNumber = Math.floor(Math.random() * 100) + 1;


function checkGuess() {
  let txtu = 'Угадать'
  var guess = document.getElementById("guess").value;
  var result = document.getElementById("result");
 

  

  if (guess == correctNumber) {
    result.innerHTML = "Поздравляю! Ты нашел нужное число, перезагрузи страницу!";
    value.innerText = value.innerText;
  } else if (guess > correctNumber) {
    result.innerHTML = "Это число больше загаданного. Попробуй еще.";
  } else {
    result.innerHTML = "Это число меньше загаданного. Попробуй еще.";
  }

}





 document.addEventListener('click', ({ target: t }) => {
   if (t.classList.contains('click-count')) {
     // t.innerText = (t.innerText | 0) + 1;
      value.innerText = (value.innerText | 0) + 1;
    }
  });



// let count = 0;
// // select value and buttons
// const value = document.querySelector("#value");
// const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const style = e.currentTarget.classList;
//     if (style.contains("Угадать")) {
//       count++;
//     } else {
//       count = 0;
//     }

//     // if (count > 0) {
//     //   value.style.color = "green";
//     // }
//     // if (count < 0) {
//     //   value.style.color = "red";
//     // }
//     // if (count === 0) {
//     //   value.style.color = "#222";
//     // }
//     value.textContent = count;
//   });
// });