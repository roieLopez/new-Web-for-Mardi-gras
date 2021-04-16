$('.question').on('click', function () {
    let $this = $(this);
    let $nextQuestion = $this.next();
    $nextQuestion.slideToggle();
});

// let $p = $('.testd').text('');
// console.log($p);
// let $pval = text('1');
let $input = $('.testd');
console.log($input);
$('.questionE').on('click', function () {
    let $this = $(this);
    let $nextQuestion = $this.next();
    $nextQuestion.slideToggle();

});


// let btn2 = document.getElementById("btn");

// btn2.addEventListener('click', function(){
//     checkboxes = document.getElementById("question1").getElementsByTagName("input");
//     right = false;
//     for (var i = 0; i < checkboxes.length; i++) {
//         if (checkboxes[i].value == "roie" && checkboxes[i].checked == true) {
//             right = true;
//         }
//         if (right) {
//             let message = document.querySelector('.messager');
//             message.innerHTML = (`<div class="p-1" style="background-color: green; border-radius:30px; text-align:center; color:white; width:100px">good</div>`);
//         } else {
//             let message = document.querySelector('.messager');
//             message.innerHTML = (`<div class="p-1" style="background-color: red; border-radius:30px; text-align:center; color:white; width:100px">not good</div>`);
//         }
//     }
// });


function submitAnswers() {
    var total = 3;
    var score = 0;
    
    //Get user input
    var q1 = document.forms['quizForm']['q1'].value;
    var q2 = document.forms['quizForm']['q2'].value;
    var q3 = document.forms['quizForm']['q3'].value;
    
    // Validation  
    for(var i = 1; i <= total; i++) {
      if(eval('q' + i) === null || eval('q' + i) == '' ) {
        alert('You missed question ' + i);
        return false;
      }
    }
    
    // Set correct answers
    var answers = ["c","d","a"];
    
    for(var i = 1; i <= total; i++) {
      // Check answers
      if (eval('q' + i) == answers[i - 1]) {
        score++;
      }
    }
  
    // Display results
    var results = document.getElementById('results');
    results.innerHTML = '<h3>You scored <span style="color:#6453a6;">' + score + '</span> out of <span style="color:#6453a6">' + total + '</span></h3>';
    // alert('You scored ' + score + ' out of ' + total);
    
    return false;
  }