let     sidebar = document.querySelector('.sidebar'),
     btnSidebar = document.querySelector('.btn_sidebar'),
     btn_sidebar_img = document.querySelector('.btn_sidebar_img')

btnSidebar.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar_active')
  if(sidebar.classList.contains('sidebar_active')){
    btn_sidebar_img.src = 'images/close.png'
    btnSidebar.style.padding = '12px'
  }
  else{
    btn_sidebar_img.src = 'images/setting.png'
    btnSidebar.style.padding = '5px'
  }
})
