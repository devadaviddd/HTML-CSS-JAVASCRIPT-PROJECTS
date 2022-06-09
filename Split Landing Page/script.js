const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// mouseenter --> mouse hover 
left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});

// mouseleave --> mouse hover leave
left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
})

// mouseenter --> mouse hover 
right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});

// mouseleave --> mouse hover leave
right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
})

