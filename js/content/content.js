$('.question').on('click', function () {
    let $this = $(this);
    let $nextQuestion = $this.next();
    $nextQuestion.slideToggle();
});


