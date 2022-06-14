const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// focus() --> automatically focus on the text area when open the website
textarea.focus();

//The filter() method creates a new array filled with elements that pass a test provided by a function.

//map() creates a new array from calling a function for every array element.

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim()); //statement splits the element in arr and prevent has empty element.
    tagsEl.innerHTML = '';
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    })
    console.log(tags);
}


function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight');
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag(); //Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
        highlightTag(randomTag);

        setTimeout(() => {
            unhighlightTag(randomTag);
        }, 100)

    }, 100)

    setTimeout(() => {
        clearInterval(interval);
        
        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
        }, 100)

    }, times * 100)
}



// keyup executes when we release the keyboard 
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if(e.key == 'Enter') {

        // Clear the value of e after 10ms;
        setTimeout(() => {
            e.target.value = '';
        }, 10)
        randomSelect();
    }
})

