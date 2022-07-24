ratingsElement = document.querySelectorAll("button[id]")
submitElement = document.querySelector(".submit")
ratingDiv = document.querySelector('.rating')
thankDiv = document.querySelector('.thank')
ratingSelectedElement = document.querySelector('#rating-selected')

let choosenValue = null

ratingsElement.forEach(element => {
    element.addEventListener('click', toggleActive)
});

function toggleActive(e) {
    if (choosenValue == null) {
        choosenValue = e.target
        addActive(e.target, true)
    }
    else if (choosenValue != e.target) {
        addActive(choosenValue, false)
        choosenValue = e.target
        addActive(e.target, true)
    }
    else if (choosenValue == e.target) {
        choosenValue = null
        addActive(e.target, false)

    }
    else {
        choosenValue = e.target
        addActive(e.target, true)
    }
}

function addActive(element, bool) {
    if (bool) {
        element.classList.add('active')
    }
    else {
        element.classList.remove('active')
    }
}

submitElement.addEventListener('click', handleSubmit)

function handleSubmit(e) {
    if (choosenValue == null) {
        alert('Select a rating please')
    }
    else {
        ratingDiv.style.display = 'none'
        thankDiv.style.display = 'flex'
        ratingSelectedElement.innerText = choosenValue.innerText
    }
}