const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        boxes.forEach(b => {
            if(b !== box) b.classList.remove('active');
        });
        box.classList.toggle('active');
    });
});