let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

const showSlide = index => {
    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
};

document.querySelector('.carousel-next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});