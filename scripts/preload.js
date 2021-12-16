let animBlock = document.querySelector('.anim_block'),
preload = document.querySelector('.preload');

function preloadAnimation() {
  setTimeout(() => {
    animBlock.classList.add('anim_block_active')
  }, 500)
  setTimeout(() => {
    preload.classList.add('preload_active')
  }, 3800)
}


preloadAnimation()
  
