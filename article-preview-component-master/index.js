let footerActive = false
const footerElementActive = document.querySelector('.card-footer-active')
const footerElementPassive = document.querySelector('.card-footer-passive')
const shareBtn = document.querySelectorAll('.card-footer-share-btn')
shareBtn.forEach(btn => {
    btn.addEventListener('click', handleClick)
})

function handleClick() {
    if (footerActive) {
        footerElementActive.style.display = 'none'
        footerElementPassive.style.display = 'flex'
        footerActive = false
    } else {
        footerElementPassive.style.display = 'none'
        footerElementActive.style.display = 'flex'
        footerActive = true
    }
    console.log('Clicked')
}

console.log(shareBtn)