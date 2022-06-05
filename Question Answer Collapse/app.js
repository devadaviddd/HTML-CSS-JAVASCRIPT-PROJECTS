let btns = document.querySelectorAll('.wrap-toggle');

let wraps = document.querySelectorAll('.wrap');

for(let x = 0; x < btns.length; x++) {
    btns[x].addEventListener('click', function(){
        // If there is no active class --> toggle will add it. If there is active class -> toggle will remove it
        wraps[x].classList.toggle('active');
    })
}