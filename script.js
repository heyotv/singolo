window.onload = function() {

  addMenuClickHandler();

  addSliderSwitchingClickHandler();
}

const addMenuClickHandler = () => {
  const menu = document.querySelector('.navigation-list'),
    items = menu.querySelectorAll('a');
  menu.addEventListener('click', (event) => {
    items.forEach(item => item.classList.remove('navigation-item-selected'));
    event.target.classList.add('navigation-item-selected');
  });
}

const addSliderSwitchingClickHandler = () => {
  const previousArrow = document.querySelector('.previous-arrow'),
    nextArrow = document.querySelector('.next-arrow'),
    slider = document.querySelector('.slider');
  let slides = document.querySelectorAll('.slide'),
    now = 0,
    disable = false;

  nextArrow.addEventListener('click', () => {

    if (disable === true) {
      return false;
    }

    disable = true;

    slider.classList.toggle('slider-click-color');

    if (now == slides.length - 1) {
      console.log('1');
      slides[0].classList.remove('slide-to-the-right');
      slides[0].classList.add('slide-to-the-left');
      slides[0].style.display = 'block';
      setTimeout(() => {
        slides[0].classList.remove('slide-to-the-left');
      }, 10);
      slides[now].classList.add('slide-to-the-right');
      setTimeout(() => {
        slides[now + 1].style.display = 'none';
      }, 1000);
      setTimeout(() => {
        disable = false;
      }, 2000);

      now = 0;

    } else {
      console.log('2');
      slides[now + 1].classList.remove('slide-to-the-right');
      slides[now + 1].classList.add('slide-to-the-left');
      slides[now + 1].style.display = 'block';
      setTimeout(() => {
        slides[now].classList.remove('slide-to-the-left');
      }, 10);
      slides[now].classList.add('slide-to-the-right');
      setTimeout(() => {
        slides[0].style.display = 'none';
      }, 1000);
      setTimeout(() => {
        disable = false;
      }, 2000);

      now++;
    }

  });

  previousArrow.addEventListener('click', () => {

    if (disable === true) {
      return false;
    }

    disable = true;

    slider.classList.toggle('slider-click-color');

    if (now === 0) {
      console.log('1')
      slides[slides.length - 1].classList.remove('slide-to-the-right');
      slides[slides.length - 1].classList.add('slide-to-the-right');
      slides[slides.length - 1].style.display = 'block';
      setTimeout(() => {
        slides[slides.length - 1].classList.remove('slide-to-the-right')
      }, 10);
      slides[0].classList.add('slide-to-the-left');
      setTimeout(() => {
        slides[0].style.display = 'none';
      }, 1000);
      setTimeout(() => {
        disable = false;
      }, 2000);

      now = slides.length - 1;

    } else {
      console.log('2')
      slides[now - 1].classList.remove('slide-to-the-left');
      slides[now - 1].classList.add('slide-to-the-right');
      slides[now - 1].style.display = 'block';
      setTimeout(() => {
        slides[now].classList.remove('slide-to-the-right');
      }, 10);
      slides[now].classList.add('slide-to-the-left');
      setTimeout(() => {
        slides[slides.length - 1].style.display = 'none';
      }, 1000);
      setTimeout(() => {
        disable = false;
      }, 2000);

      now--;
    }

  });
}