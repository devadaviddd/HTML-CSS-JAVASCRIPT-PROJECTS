const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const wrap = document.querySelectorAll('.wrap');

openBtn.addEventListener('click', function(){
    for(let i = 0; i < wrap.length; i++) {
        wrap[i].classList.toggle('visible');
    }
})

closeBtn.addEventListener('click', function(){
    for(let i = 0; i < wrap.length; i++) {
        wrap[i].classList.toggle('visible');
    }
})
