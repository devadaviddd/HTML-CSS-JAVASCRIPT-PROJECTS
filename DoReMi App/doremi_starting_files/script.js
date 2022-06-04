let myKeys = document.querySelectorAll('.key');

function playSnd(key){
    switch(key) {
        case 'c':
            var snd = new Audio('doremi/do.mp3');
            snd.play();
            break;
        case 'd':
            var snd = new Audio('doremi/re.mp3');
            snd.play();
            break;
        case 'e':
            var snd = new Audio('doremi/mi.mp3');
            snd.play();
            break;
        case 'f':
            var snd = new Audio('doremi/fa.mp3');
            snd.play();
            break;
        case 'g':
            var snd = new Audio('doremi/sol.mp3');
            snd.play();
            break;
        case 'a':
            var snd = new Audio('doremi/la.mp3');
            snd.play();
            break;
        case 'b':
            var snd = new Audio('doremi/ti.mp3');
            snd.play();
            break;
        case 'k':
            var snd = new Audio('doremi/doh.mp3');
            snd.play();
            break;

        default:
            console.log(key);
    }

}
var delay = 150;

document.addEventListener('keydown', function(btn){
    console.log(btn.key);
    playSnd(btn.key.toLowerCase());
    let pressed_key = btn.key.toLowerCase();

    for(let x = 0; x < myKeys.length; x++) {
        myKeys[x].classList.remove('activated');
    }

    for(let x = 0; x < myKeys.length; x++) {
        if(pressed_key == myKeys[x].innerHTML.toLowerCase()) {
            myKeys[x].classList.add('activated');

            setTimeout(function(){
                myKeys[x].classList.remove('activated');
            }, delay);
        }
    }

  
    


})

for(let x = 0; x < myKeys.length; x++) {
    myKeys[x].addEventListener('click', function(){
        // alert("button " + myKeys[x].innerHTML + " is clicked!");
        playSnd(myKeys[x].innerHTML.toLowerCase());
    })
}


