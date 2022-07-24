liQuestions = document.querySelectorAll('.question-li')

liQuestions.forEach(element => {
    element.addEventListener('click', handleClick)
});

function handleClick(event) {
    if (event.target.classList.contains('question-li')) {
        if (event.target.classList.contains('active')) {
        
            event.target.classList.remove('active')
        } else {
            event.target.classList.add('active')
        }
    }
    if (event.target.classList.contains('question')) {
        if (event.target.parentElement.classList.contains('active')) {
        
            event.target.parentElement.classList.remove('active')
        } else {
            event.target.parentElement.classList.add('active')
        }
    }
}