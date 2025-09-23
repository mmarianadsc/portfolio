const items = document.querySelectorAll('.timeline-item');
document.querySelectorAll('.timeline-item').forEach((item, index) => {
  item.classList.remove('left', 'right');
  if (index % 2 === 0) {
    item.classList.add('right'); 
  } else {
    item.classList.add('left'); 
  }
});

document.querySelectorAll(".timeline-item").forEach((item, index) => {
  if ((index + 1) % 2 === 0) {
    item.classList.add("item-even");
  } else {
    item.classList.add("item-odd");
  }
});

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.8;

  items.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < triggerBottom) {
      item.style.opacity = 1;
      item.style.transform = 'translateY(0)';
    } else {
      item.style.opacity = 0;
      item.style.transform = 'translateY(50px)';
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

const images = document.querySelectorAll('.image-container');

images.forEach(img => {
  img.addEventListener('click', () => {
    const overlay = img.querySelector('.overlay-text');
    if(overlay.style.opacity == 1) {
      overlay.style.opacity = 0;
    } else {
      overlay.style.opacity = 1;
    }
  });
});

document.querySelectorAll('.carousel').forEach(carousel => {
  const images = carousel.querySelector('.carousel-images');
  const imgCount = images.children.length;
  const dotsContainer = carousel.querySelector('.carousel-dots');
  let index = 0;
  let interval;

  for (let i = 0; i < imgCount; i++) {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      index = i;
      updateCarousel();
      resetInterval();
    });
    dotsContainer.appendChild(dot);
  }

  const dots = dotsContainer.querySelectorAll('span');

  const updateCarousel = () => {
    images.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  };

  const nextSlide = () => {
    index = (index + 1) % imgCount;
    updateCarousel();
  };

  const startInterval = () => interval = setInterval(nextSlide, 3000);
  const resetInterval = () => {
    clearInterval(interval);
    startInterval();
  };

  startInterval();
});