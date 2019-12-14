// portfolio
if (document.querySelector('.portfolio-wrapper')) {
  const gallery = document.querySelector('.portfolio__gallery');
  const button = document.querySelector('.portfolio-modal__button');
  let modal = document.querySelector('.portfolio-modal'); // touch event handler

  const touchGallery = new Hammer(gallery);
  touchGallery.on('tap press', showModal);
  gallery.addEventListener('click', showModal);
  button.addEventListener('click', hideModal);
  modal.addEventListener('click', hideModal);

  function showModal(e) {
    if (e.target.classList.contains('portfolio-pics__img')) {
      const img = e.target;
      const src = img.src;
      const alt = img.alt;
      const caption = img.title;
      let modalImg = document.querySelector('.portfolio-modal__img');
      let modalCaption = document.querySelector('.portfolio-modal__caption');
      modalImg.src = src;
      modalImg.alt = alt;
      modalCaption.innerText = caption;
      modal.classList.add('portfolio-modal--show');
    }
  }

  function hideModal() {
    modal.classList.remove('portfolio-modal--show');
  }
} // home


if (document.querySelector('.new-home-wrapper')) {
  const opt1 = document.querySelector('.nh-options__option-1');
  const opt2 = document.querySelector('.nh-options__option-2');
  const opt3 = document.querySelector('.nh-options__option-3');
  let inThatCase = document.querySelector('.nh-p3__title');
  let responseElem = document.querySelector('.nh-p3__text');
  opt1.addEventListener('click', scrollDown);
  opt2.addEventListener('click', scrollDown);
  opt3.addEventListener('click', scrollDown);

  function scrollDown(e) {
    let text1 = document.querySelector('.nh-p3__text--1');
    let text2 = document.querySelector('.nh-p3__text--2');
    let text3 = document.querySelector('.nh-p3__text--3');
    let parent = e.target.parentNode;

    if (e.target.classList.contains('nh-options__option-1') || parent.classList.contains('nh-options__option-1')) {
      text1.classList.remove('nh-p3__text--hide');
      text2.classList.add('nh-p3__text--hide');
      text3.classList.add('nh-p3__text--hide');
    }

    if (e.target.classList.contains('nh-options__option-2') || parent.classList.contains('nh-options__option-2')) {
      text1.classList.add('nh-p3__text--hide');
      text2.classList.remove('nh-p3__text--hide');
      text3.classList.add('nh-p3__text--hide');
    }

    if (e.target.classList.contains('nh-options__option-3') || parent.classList.contains('nh-options__option-3')) {
      text1.classList.add('nh-p3__text--hide');
      text2.classList.add('nh-p3__text--hide');
      text3.classList.remove('nh-p3__text--hide');
    }

    inThatCase.scrollIntoView({
      behavior: 'smooth'
    });
  }
}