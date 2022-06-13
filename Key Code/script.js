const insert = document.getElementById('insert')


//function to get the information of the key
window.addEventListener('keydown', (event) => {
    //`` is use for dynamic data $ use for the variable whatever when in the `` block
    insert.innerHTML = `
        <div class="key">
            ${event.key === ' ' ? 'Space' : event.key} 
            <small>event.key</small>
        </div>

        <div class="key">
            ${event.keyCode}
            <small>event.keyCode</small>
        </div>

        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>
    `;
})



