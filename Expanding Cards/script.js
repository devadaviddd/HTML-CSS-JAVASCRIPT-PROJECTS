const panels = document.querySelectorAll('.panel');
var spam = false;

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}

var index = 0;
panels.forEach((panel) => {
    panel.addEventListener('click', () => {      
        removeActiveClasses();
        panel.classList.add('active');
        spam = true;
    })
})
