let colorBody = document.querySelector('.color_body'),
    colorWeekdays = document.querySelector('.color_weekdays'),
    colorOutputdays = document.querySelector('.color_outputdays'),
    colorToday = document.querySelector('.color_today'),
    colorDay = document.querySelector('.color_day'),
    colorSidebar = document.querySelector('.color_sidebar');


colorBody.addEventListener('input', () => {
    document.documentElement.style.setProperty('--bgBody', `${colorBody.value}`);
})

colorWeekdays.addEventListener('input', () => {
  document.documentElement.style.setProperty('--bgWeekdays', `${colorWeekdays.value}`);
})

colorOutputdays.addEventListener('input', () => {
  document.documentElement.style.setProperty('--bgOutputdays', `${colorOutputdays.value}`);
})

colorToday.addEventListener('input', () => {
  document.documentElement.style.setProperty('--bgToday', `${colorToday.value}`);
})

colorDay.addEventListener('input', () => {
  document.documentElement.style.setProperty('--colorDay', `${colorDay.value}`);
})

colorSidebar.addEventListener('input', () => {
  document.documentElement.style.setProperty('--bgSidebar', `${colorSidebar.value}`);
})