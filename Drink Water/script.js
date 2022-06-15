const smallCups = document.querySelectorAll('.cup-small');
const remained = document.getElementById('remained');
const percentage = document.getElementById('percentage');
const liters = document.getElementById('liters');

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerHTML = `${2 - (250 * fullCups / 1000)}L`
    }

    console.log(fullCups);
}

updateBigCup();

function highlightCups(idx) {
    smallCups.forEach((cup, i) => {
        if(i <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        } 
    })

    updateBigCup();
}

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {highlightCups(idx)});
})
