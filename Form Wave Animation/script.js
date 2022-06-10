const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('') //Split into array of letter
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) //mapping to create span for each letter
        .join(''); // join again to the string
})