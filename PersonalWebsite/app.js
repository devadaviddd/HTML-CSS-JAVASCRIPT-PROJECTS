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


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});