// Дни месяца
let width,
    today = new Date(),
    count = today.getMonth(),
    calendarLine = document.querySelector('.calendar_line'),
    month        = document.querySelectorAll('.month'),
    prev         = document.querySelector('.prev'),
    next         = document.querySelector('.next');

// Название месяца
let widthNameMonth,
    sliderLineNameMonth = document.querySelector('.slider_line_name_month');

// Инициализация слайдера
function initSlider() {
  width = document.querySelector('.calendar').offsetWidth
  calendarLine.style.width = width * month.length + 'px'

  widthNameMonth = document.querySelector('.slider_name_month').offsetWidth
  sliderLineNameMonth.style.width = widthNameMonth * nameMonth.length + 'px'
  
  todayDate()
  initNameMonth()
  rollSlider()
}
    
initSlider()
window.addEventListener('resize', initSlider);

function rollSlider() {
  calendarLine.style.transform = 'translate(-' + count * width + 'px)';
  sliderLineNameMonth.style.transform = 'translate(-' + count * widthNameMonth + 'px)';
}

// КНОПКИ
function nextSlide() {
  count++;
  if (count >= month.length) {
      count = 0;
  }
  todayDate()
  initNameMonth()
  rollSlider();
}
next.addEventListener('click', nextSlide);


function prevSlide() {
  count--;
  if (count < 0) {
      count = month.length - 1;
  }
  todayDate()
  initNameMonth()
  rollSlider();
}
prev.addEventListener('click', prevSlide);


// Инициализация месяца в модалке
function initNameMonth() {
  selectedMonth.innerText = nameMonth[count].innerHTML
}

// Находит нынешнюю дату
function todayDate() {

  for(let i = 0; i < dayTd.length; i++){
      if(today.getDate() == date[i].innerHTML && today.getMonth() == count){
        setTimeout(() => {
          dayBg[i].classList.add('today')
        }, 300)
      } 
      else{
        dayBg[i].classList.remove('today')
      }
    }
      
}