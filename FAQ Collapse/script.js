const faqs = document.querySelectorAll('.faq');
const faq_toggles = document.querySelectorAll('.faq-toggle');


// faqs.forEach((faq, index) => {
//     faq_toggles[index].addEventListener('click', () => {
//         faq.classList.toggle('active');
//     })
// });

//Another Solution
faq_toggles.forEach(faq_toggle => {
    faq_toggle.addEventListener('click', () => {
        faq_toggle.parentNode.classList.toggle('active');
    })
})