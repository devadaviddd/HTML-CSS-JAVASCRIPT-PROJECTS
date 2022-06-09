const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    // height trigger point is window.innerHeight / 5 * 4
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        // getBoundingClientRect is function make the rec relative to the viewport and return top right left bottom value
        const boxTop = box.getBoundingClientRect().top;
        
        if(boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}



