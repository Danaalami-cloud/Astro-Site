// let items = document.querySelectorAll('.carousel-container');

// items.forEach((el) => {
//     const minPerSlide = 4;
//     let next = el.nextElementSibling;
//     for (let i=1; i < minPerSlide; i++) {
//         if (!next) {
//         // wrap the carousel by using first child
//         next = items[0];
//     }
//     let cloneChild = next.cloneNode(true)
//     el.appendChild(cloneChild.children[0]);
//     next = next.nextElementSibling;
// }
// })