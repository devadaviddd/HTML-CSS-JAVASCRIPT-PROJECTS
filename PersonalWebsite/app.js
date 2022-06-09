const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const wrap = document.querySelectorAll('.wrap');
const skills = document.querySelectorAll('.skills');

window.addEventListener('scroll', checkSkills);

function checkSkills() {
    const triggerBottom = window.innerHeight / 5 * 3;

    skills.forEach(skill => {
        const boxTop = skill.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            skill.classList.add('show');
        } else {
            skill.classList.remove('show');
        }
    })
}


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