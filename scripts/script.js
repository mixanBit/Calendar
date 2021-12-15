let modal = document.querySelector('.modal'),
    day   = document.querySelectorAll('.month tr td');

let input = document.querySelector('input'),
    text  = document.querySelectorAll('.text'),
    btn   = document.querySelector('.btn');

let dayNumber;

for(let i = 0; i < day.length; i++) {
    day[i].addEventListener('click', () => {
        dayNumber = i
        modal.classList.add('modal_active')

        modal.addEventListener('click', (el) => {
            if(el.target.classList.contains('modal')) {
                modal.classList.remove('modal_active')
            }
        })
        input.value = text[i].innerText

        btn.addEventListener('click', () => {
            text[dayNumber].innerHTML = input.value
            console.log(dayNumber)
            modal.classList.remove('modal_active')
        })
    })

    
}



// for(let i = 0; i < btn.length; i++){
//     btn.addEventListener('click', () => {
//         text[i].innerText = input.value
//         modal.classList.remove('modal_active')
//     })
// }

