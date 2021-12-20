let modal = document.querySelector('.modal'),
    dayTd   = document.querySelectorAll('.month tr td');
    closeModal = document.querySelector('.close_modal')

// Данные в модалке
let btn        = document.querySelector('.btn'), 
    modalTitle = document.querySelector('.modal_title');


// Название месяца и запись в modal
let nameMonth     = document.querySelectorAll('.name_month'),
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

let dayBg = document.querySelectorAll('.day');

// Костыль цикла
let dayNumber;

// Кнопки удаления
let btnResetTitle  = document.querySelector('.btn_reset_title'),
    btnResetNote   = document.querySelector('.btn_reset_note'),
    btnDeleteModal = document.querySelector('.btn_delete_modal');

let modalTopInformation = document.querySelector('.modal_top_information');

for(let i = 0; i < dayTd.length; i++) {
    dayTd[i].addEventListener('click', () => {
        // Модальное окно
        modal.classList.add('modal_active')

        modal.addEventListener('click', (el) => {
            if(el.target.classList.contains('modal')) {
                modal.classList.remove('modal_active')
            }
        })

        closeModal.addEventListener('click', () => {
            modal.classList.remove('modal_active')
        })

        dayNumber = i

        

        // Инициализация данных в модальное окно
        inputTitle.value = textTitle[i].innerText
        inputNote.value = textNote[i].innerText
        selectedDate.innerText = date[i].innerText
        selectedWeekDay.innerText = weekDay[i].innerText
        modalTitle.innerText = inputTitle.value
        deleteModalBg()
        initModalBg()

        // Запись текста
        btn.addEventListener('click', () => {
            textTitle[dayNumber].innerHTML = inputTitle.value
            textNote[dayNumber].innerText = inputNote.value
            modal.classList.remove('modal_active')
        })

        inputTitle.addEventListener('input', () => {
            modalTitle.innerText = inputTitle.value
        })

        // Удаление текста
        btnResetTitle.addEventListener('click', () => {
            inputTitle.value = ''
            modalTitle.innerText = inputTitle.value
        })

        btnResetNote.addEventListener('click', () => {
            inputNote.value = ''
            textNote[dayNumber].innerText = inputNote.value
        })

        btnDeleteModal.addEventListener('click', () => {
            inputTitle.value = ''
            modalTitle.innerText = inputTitle.value
            textTitle[dayNumber].innerHTML = inputTitle.value

            inputNote.value = ''
            textNote[dayNumber].innerText = inputNote.value

            modal.classList.remove('modal_active')
        })
    })// day[i]
    initDayBg()
}


function initDayBg() {
    for(let i = 0; i < dayBg.length; i++){
        if(weekDay[i].innerText === 'сб' || weekDay[i].innerText === 'вс') {
            dayBg[i].classList.add('outputdays')
        }
        else{
            dayBg[i].classList.add('weekdays')
        }
    }
}



function initModalBg() {
    if(dayBg[dayNumber].classList.contains('outputdays')){
        modalTopInformation.classList.add('outputdays')
    }
    else if(dayBg[dayNumber].classList.contains('today')){
        modalTopInformation.classList.add('today')
    }
    else if(dayBg[dayNumber].classList.contains('weekdays')){
        modalTopInformation.classList.add('weekdays')
    } 
}

function deleteModalBg() {
    modalTopInformation.classList.remove('outputdays')
    modalTopInformation.classList.remove('weekdays')
    modalTopInformation.classList.remove('today')
}




