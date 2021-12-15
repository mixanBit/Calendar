let modal = document.querySelectorAll('.modal'),
    day   = document.querySelectorAll('.month tr td');

for(let i = 0; i < day.length; i++) {
    day[i].addEventListener('click', () => {
        modal[i].classList.add('modal_active')

        modal[i].addEventListener('click', (el) => {
            if(el.target.classList.contains('modal')) {
                modal[i].classList.remove('modal_active')
            }
        })
    })
}


let input = document.querySelectorAll('input'),
    text  = document.querySelectorAll('.text'),
    btn   = document.querySelectorAll('.btn');

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', () => {
        text[i].innerText = input[i].value
        modal[i].classList.remove('modal_active')
    })
}

