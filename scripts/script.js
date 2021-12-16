let modal = document.querySelector('.modal'),
    day   = document.querySelectorAll('.month tr td');


// Данные в модалке
let btn        = document.querySelector('.btn'), 
    modalTitle = document.querySelector('.modal_title');


// Название месяца и запись в modal
let nameMonth     = document.querySelector('.name_month'),
    selectedMonth = document.querySelector('.selected_month');

// Заголовок и запись в modal
let textTitle  = document.querySelectorAll('.text_title'),
    inputTitle = document.querySelector('.input_title');


// Текст заметки и запись в modal
let textNote = document.querySelectorAll('.text_note'),
    inputNote = document.querySelector('.input_note');

    
// Дата и запись в modal 
let date         = document.querySelectorAll('.date'),
    selectedDate = document.querySelector('.selected_date');


// День недели и запись в modal
let weekDay         = document.querySelectorAll('.week_day'),
    selectedWeekDay = document.querySelector('.selected_week_day');


// Костыль цикла
let dayNumber;


for(let i = 0; i < day.length; i++) {
    day[i].addEventListener('click', () => {
        // document.getElementsByTagName('body')[0].style = 'overflow: hidden !important;'
        // Модальное окно
        modal.classList.add('modal_active')

        modal.addEventListener('click', (el) => {
            if(el.target.classList.contains('modal')) {
                modal.classList.remove('modal_active')
                // document.getElementsByTagName('body')[0].style = 'overflow: scroll !important;'
            }
        })

        dayNumber = i

        // Инициализация данных в модальное окно
        selectedMonth.innerText = nameMonth.innerText
        inputTitle.value = textTitle[i].innerText
        inputNote.value = textNote[i].innerText
        selectedDate.innerText = date[i].innerText
        selectedWeekDay.innerText = weekDay[i].innerText
        modalTitle.innerText = inputTitle.value

        // Запись текста
        btn.addEventListener('click', () => {
            textTitle[dayNumber].innerHTML = inputTitle.value
            textNote[dayNumber].innerText = inputNote.value
            modal.classList.remove('modal_active')
            // document.getElementsByTagName('body')[0].style = 'overflow: scroll !important;'
        })

        inputTitle.addEventListener('input', () => {
            modalTitle.innerText = inputTitle.value
        })
    })// day[i]
}
